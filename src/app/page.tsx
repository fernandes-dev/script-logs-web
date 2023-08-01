import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import Image from "next/image";
import MainImage from '../../public/metrics.svg'

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="p-4 flex absolute text-xl font-bold text-purple-700">
        <span>&#x2022;</span>script-logs
      </div>

      <div className="h-screen flex justify-between">
        <div className="w-full bg-white flex justify-center flex-col">
          <div className="p-24">
            <h1 className="text-3xl font-bold mb-2">Wellcome to script-logs</h1>
            <small className="text-lg text-purple-700 font-bold">your aplication logs dashboard</small>

            <div className="pb-16"></div>
            <LoginForm/>

            <div className="pt-2">
              <span>Don`t have an acount? </span>
              <Link className="text-purple-700 font-bold" href={'/signup'}>Sign up</Link>
            </div>

          </div>
        </div>

        <div className="bg-gray-100 w-full">
          <div className="flex h-screen w-full justify-center">
            <Image width={500} src={MainImage} alt={'metrics image'} />
          </div>
        </div>
      </div>


    </main>
  )
}
