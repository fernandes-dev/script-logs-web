import {ReactNode} from "react";
import Image from "next/image";
import MainImage from "../../../public/metrics.svg";

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return <div>
    <div className="p-4 flex absolute text-xl font-bold text-purple-700">
      <span>&#x2022;</span>script-logs
    </div>
    <main className="mx-auto">
      <div className="h-screen flex justify-between">
        <div className="w-full bg-white flex justify-center flex-col">
          {children}
        </div>

        <div className="bg-gray-100 w-full">
          <div className="flex h-screen w-full justify-center">
            <Image width={500} src={MainImage} alt={'metrics image'} />
          </div>
        </div>
      </div>
    </main>
  </div>
}