"use client"
import {useForm} from 'react-hook-form'

export default function LoginForm() {
  const {handleSubmit, register, formState: {isValid}} = useForm({mode: 'onChange'})

  function handleSubmitLogin(data) {
    console.log('ola', data)
  }

  return <form name="login-form" onSubmit={handleSubmit(handleSubmitLogin)}>
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