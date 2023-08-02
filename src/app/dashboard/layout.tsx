"use client"

import {ReactNode, useCallback, useEffect, useState} from "react";
import Link from "next/link";
import {apiConfig} from "@/config/api";
import {useRouter} from "next/navigation";

interface Props {
  children: ReactNode
}

interface IUser {
  name: string
  email: string
}

export default function Layout({children}: Props) {
  const router = useRouter()
  const [user, setUser] = useState<IUser>(null)

  const getUserByToken = useCallback(async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      await router.push('/sigin')
    }

    const response = await fetch(`${apiConfig.base_url}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()

    if (response.ok)
      return setUser(data)

    return router.push('/sigin')
  }, [router])

  function handleLogout() {
    localStorage.clear()

    router.push('/')
  }

  useEffect(() => {
    getUserByToken().catch(err => err)
  }, [getUserByToken])

  return <div className="flex flex-col h-screen">
    <div className="w-full px-4 py-6 border flex justify-between">
      <Link href="/dashboard/home">
        <h1 className="text-xl text-purple-700 font-bold">script-logs</h1>
      </Link>
      <div className="flex align-middle divide-x-2 divide-purple-700">
        <div className="pr-4">
          Olá <b>{user?.name?.split(' ')[0]}</b>
        </div>
        <div className="px-4">
          <button onClick={handleLogout} className="text-purple-700 font-bold">Sair</button>
        </div>
      </div>
    </div>
    <div className="w-full h-full p-4 bg-gray-200">
      {children}
    </div>
  </div>
}