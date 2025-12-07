"use client"

import { Iditme } from "@/app/types/types"
import { usecartcontext } from "@/contect/context"  


export default function Addtocart({ id }: Iditme) {

    const { increase, getitemqty, decrease , remove } = usecartcontext()
    return (
        <div >
            <div className='mx-18 ' ><button className="bg-blue-600 h-7 w-7 text-white rounded" onClick={() => increase(parseInt(id))}  >+</button>
                <span className='m-2'>{ getitemqty(parseInt(id)) }
                </span>
                <button onClick={() => decrease(parseInt(id))} className="bg-blue-600 h-7 w-7 text-white rounded"  >-</button>
                <div className=' mt-1'><button onClick={ () =>remove(parseInt(id))} className="bg-red-500 h-6 w-19 text-white " >remove</button></div>

            </div>

        </div>
    )
}