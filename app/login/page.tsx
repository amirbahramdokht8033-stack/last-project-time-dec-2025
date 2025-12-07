"use client"

import { useActionState } from "react"
import { login } from "./action"
import { useFormStatus } from "react-dom"
import { PersonStandingIcon } from "lucide-react"

function Login() {
  const [state, loginAction] = useActionState(login, undefined)
  return (
    <div id='login-form' className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">


      <form action={loginAction} className='grid grid-cols-1 bg-white shadow shadow-blue-500 p-15 w-150'>
        <h2 className="text-2xl font-bold text-center mb-10 ">login</h2>

        < input type="email" name='email' placeholder='Email ' required className='mb-5 rounded text-blue-900 shadow shadow-blue-500 p-2 ' />


        <input type="password" name='password' placeholder='Password' required className='mb-5 rounded shadow text-blue-900 shadow-blue-500 p-2 ' />

        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email}</p>
        )}

        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password}</p>
        )}


        <SumitButton />
        <p> Don't have account?<a href="/singup" className='text-blue-400'>Sing up</a></p>
      </form>



    </div>
  )
}

export default Login




function SumitButton() {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} type='submit' className='mb-5 bg-blue-600 rounded text-white hover:bg-blue-400'>login</button>
  )
}