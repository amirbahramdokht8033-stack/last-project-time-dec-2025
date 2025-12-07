import Addtocart from '@/addtocart/Addtocart'
import { Idprop, IJD } from '@/app/types/types'
import { Star } from 'lucide-react'
import React from 'react'


async function page({ params }: Idprop) {
    const { id } = await params
    const resulet = await fetch(`http://localhost:3001/posts/${id}`)
    const data = await resulet.json() as IJD
    return (
        <div className='h-90 flex justify-center items-center shadow shadow-gray-950 my-10'>
            <div className='  w-1/2shadow-2xl h-90'>
                <h1 className='text-4xl font-extrabold m-5 '>{data.Name}</h1>
                <div className='text-2xl font-semibold text-gray-600 my-5 mx-8'>
                    <h2 className='flex'> <Star /> {data.Ratings}</h2>
                    <h2 >ingredient: {data.ingredient}</h2>
                    <h2 >price: {data.price} $</h2>

                </div>
                <Addtocart id={id}/>
            </div>
            <div className='flex justify-center items-center  w-1/2'>
                <img src={data.URL} alt="" className='h-90 w-auto' />
            </div>

        </div>
    )
}

export default page
