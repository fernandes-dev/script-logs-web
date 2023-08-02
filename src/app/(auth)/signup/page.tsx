import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export default function SignUp() {
  return <div className="p-24">
    <h1 className="text-3xl font-bold mb-2">Register to script-logs</h1>
    <small className="text-lg text-purple-700 font-bold">your aplication logs dashboard</small>

    <div className="pb-16"></div>
    <SignupForm/>

    <div className="pt-2">
      <span>Already have an acount? </span>
      <Link className="text-purple-700 font-bold" href={'/sigin'}>Sign In</Link>
    </div>

  </div>

}