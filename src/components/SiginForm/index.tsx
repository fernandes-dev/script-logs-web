"use client"
import {useForm} from 'react-hook-form'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState()

  const {handleSubmit, register, formState: {isValid}} = useForm({mode: 'onChange'})

  async function handleSubmitLogin(data) {
    setErrorMessage(null)

    const response = await fetch(`${process.env.api_url}/auth/sigin`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    })

    const responseData = await response.json()

    if (response.ok) {
      localStorage.setItem('token', responseData.access_token)

      await router.push('/dashboard/home')
    }

    setErrorMessage(responseData.message)

    const timeout = setTimeout(() => {
      setErrorMessage(null)
      clearTimeout(timeout)
    }, 4000)
  }

  return <form name="login-form" onSubmit={handleSubmit(handleSubmitLogin)}>
    <div>
      {errorMessage && <span className="text-red-600">{errorMessage}</span>}
    </div>

    {/* email input */}
    <div className="flex flex-col">
      <label className="pb-2" htmlFor="email">Email</label>
      <input {...register('email', {required: true})} className="border rounded-md h-10 px-2" id="email" type="email"
             placeholder="example@email.com"/>
    </div>

    <div className="py-4"></div>

    {/* password input */}
    <div className="flex flex-col">
      <label className="pb-2" htmlFor="password">Password</label>
      <input {...register('password', {required: true})} className="border rounded-md h-10 px-2" id="password"
             type="password" placeholder="example@email.com"/>
    </div>

    <div className="py-4"></div>

    <div>
      <button disabled={!isValid} type="submit"
              className={`bg-purple-800 hover:bg-purple-700 disabled:bg-purple-300 text-white rounded-md h-10 px-4 w-full`}>Login
      </button>
    </div>
  </form>
}