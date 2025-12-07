'use client'

import { logout } from '@/app/login/action'
import { CircleUserRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    
   <div className='bg-gray-100 min-h-screen my-25 flex justify-center items-center'>
    <div className='bg-white flex flex-col justify-center  w-150 h-150 items-center'>
      

   <div className='bg-gray-950 h-50 w-50 rounded-full mb-3 flex justify-center items-center'>
    <h1 className='text-white '> <CircleUserRound/> </h1>
    </div> 




    <div className='bg-gray-200 h-80 w-100 flex flex-col justify-center items-center'>
    <h1 className='text-2xl font-bold my-3'>name</h1>
     <h2 className='text-gray-600 my-3'> user type</h2>
     <h2 className='text-gray-600 my-3'> age /  something </h2>
     <button className='bg-red-500 rounded p-2 my-3 text-white hover:bg-red-400' onClick={() =>logout()}>log out</button>
      </div>       





    </div>
     
    
   </div>
  )
}

export default page
