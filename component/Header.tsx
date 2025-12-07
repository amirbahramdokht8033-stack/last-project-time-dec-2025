'use client'
import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo/icon.png"
import { CircleUserRound, ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import { usecartcontext } from '@/contect/context'
function Header() {
   const {cartallqty} =usecartcontext()
   
  return (
    <div className='flex items-center justify-between bg-white shadow shadow-gray-950 h-10'>

      <div className='mx-8 flex'>
        <Link href={'/cart'}>
        <div className='flex'>
          <ShoppingBasket />   
          <span className='h-4 w-4  rounded-full -mx-2 -my-1'>{cartallqty}</span>
        </div>
        </Link>
      </div>

      <div className='flex justify-center items-center'>
        <Link href={'/'}><Image src={logo} alt='logo of fast food' /></Link>

      </div>

      <div className='mx-8 flex'>
        <Link href={'/user'} className='flex'>
          {/* name of the user */}
          <CircleUserRound />
        </Link>
      </div>
    </div>
  )
}

export default Header
