import SiginForm from "@/components/SiginForm";
import Link from "next/link";

export default function SigIn() {
  return (
    <div className="w-full bg-white flex justify-center flex-col">
      <div className="p-24">
        <h1 className="text-3xl font-bold mb-2">Wellcome to script-logs</h1>
        <small className="text-lg text-purple-700 font-bold">your aplication logs dashboard</small>

        <div className="pb-16"></div>
        <SiginForm/>

        <div className="pt-2">
          <span>Don`t have an acount? </span>
          <Link className="text-purple-700 font-bold" href={'/signup'}>Sign up</Link>
        </div>

      </div>
    </div>
  )
}
