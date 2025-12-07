import Addtocart from '@/addtocart/Addtocart'
import { IJD } from '@/app/types/types'
import { Star } from 'lucide-react'
import React from 'react'




async function Productitmeinpage({Name,URL,Ratings ,price}:IJD) {

  return (
    <div className="h-90 shadow shadow-gray-950 bg-white  m-5 hover:bg-gray-400">
    <div className=' h-70'>
      <img src={URL} alt="" className='h-70 w-full' />
    </div>
<hr />
<div className='flex justify-between mx-4'>
  <h1>{Name}</h1>
  <h3>{price}$</h3>
</div> 
<div className='flex mx-4'>
<Star  className=' size-5'/>
{Ratings}

</div>



    </div>
  )
}

export default Productitmeinpage
