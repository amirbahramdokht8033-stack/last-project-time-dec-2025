import { CircleUserRound, LayoutDashboard, Notebook } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Adminbar() {
  return (
    <div className='flex bg-white mb-10 justify-between w-full  h-10 shadow  shadow-gray-950 rounded-2xl'>


      <div className='group flex'>
        <Link href={"/dashboard"}>

          <div className='fixed my-2 ml-4'>
            <LayoutDashboard className='fixed' />

            <span className="hidden group-hover:inline p-1 mx-5 bg-gray-300">Dashboard</span>
          </div>
        </Link>
      </div>


      <div className='group flex '>
        <Link href={"/user"}>
          <div className='my-2  mx-6 fixed'>
            <CircleUserRound className='fixed' />
            <span className="hidden group-hover:inline p-1 mx-5 bg-gray-300">User-Panel</span>
          </div>
        </Link>
      </div>


<div className='group  mx-9 flex '>
      <Link href={"/order"}>
        <div className='fixed my-2 mr-4 flex '>
         
          <Notebook className='fixed'  />
           

           <span className="hidden group-hover:inline p-1 mx-5 bg-gray-300">order-Panel</span>
        </div>
        
      </Link>
</div>


    </div>
  )
}

export default Adminbar
