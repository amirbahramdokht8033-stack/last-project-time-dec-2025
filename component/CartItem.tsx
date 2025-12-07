
import axios from 'axios'
import { useEffect, useState } from 'react'

import Addtocart from '../addtocart/Addtocart'
import { IJD, Ici } from '@/app/types/types'
import { Star } from 'lucide-react'

function Cartitem({ id, qty }: Ici) {
    const [data, setdata] = useState({} as IJD)
    useEffect(() => {
        axios(`http://localhost:3001/posts/${id}`).then(result => {
            const { data } = result
            setdata(data)
        })
    }, [])
    return (
        <div className='mb-4'>
            <div className='shadow shadow-gray-800'>
                <div className='grid grid-cols-12 '>
                    <div className='flex justify-center items-center mt-5 col-span-2'>
                        <img className=' w-50 mb-4' src={data.URL} alt="" />
                    </div>

                    <div className=' col-span-10 m-2'>
                        <h1 className='font-bold'>{data.Name}</h1>
                        <p>number: {qty}</p>
                        <p  className='flex'><Star/> {data.Ratings}</p>
                        <p className='font-bold'>prise: {data.price * qty}$</p>

                        <br /> <br />  <br /> <br />

                        <Addtocart id={data.id} />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cartitem
