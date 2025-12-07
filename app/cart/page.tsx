"use client"
import React, { useEffect, useState } from 'react'


import { usecartcontext } from '../../contect/context';
import CartItem from "../../component/CartItem";
import axios from 'axios';

import { IJD } from '../types/types';

function cart() {
  const { item} = usecartcontext()

  
  

  const [data, setdata] = useState<IJD[]>([])
  useEffect(() => {
    axios(`http://localhost:3001/posts`).then(result => {
      const { data } = result
      setdata(data)
    })
  }, [])

  return (
    <div className='mx-10  mt-25'>
      {
        item.map(item => 
          <CartItem key={item.id} {...item} />
        )
      }
      <div className='h-auto my-10 w-full rounded text-white bg-blue-900'>


        <div className='mx-10 mt-5'>
          total price: {item.reduce((total, item) => {
            let selected = data.find((proitem) => parseInt(proitem.id) == item.id)
            return total + (selected?.price || 0) * item.qty
          }, 0)}$
          <br />
          <button className='my-2  shadow shadow-white p-2  cursor-pointer '  >pay </button> 
        </div>

      </div>

    </div>
  )
}

export default cart
