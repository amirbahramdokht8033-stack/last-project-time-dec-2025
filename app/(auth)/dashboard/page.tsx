"use client"


import axios from "axios"
import { ChangeEvent, useState } from "react"
export default function Dashbord() {
    const [newprod, setnewprod] = useState({
        Name: "",
        price: "",
        URL: "",
        ingredient: "",
        Ratings: ""
    })
    const newspro = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setnewprod({
            ...newprod,
            [name]: value
        })
    }
    const create = () => {
        axios({
            method: "post",
            url: "http://localhost:3001/posts",
            data: {
                id: Math.floor(Math.random() * 1000).toString(),
                URL: newprod.URL,
                Name: newprod.Name,
                ingredient: newprod.ingredient,
                price: newprod.price,
                Ratings: newprod.Ratings
            }
        })

    }
    return (
        <div className=' mx-10 shadow shadow-gray-600 my-25 h-auto'>


            <form action="" className="mx-10 grid grid-cols-1 gap-4 mt-10 " aria-required>
                <input onChange={newspro} className=" shadow text-blue-700  shadow-blue-700 mt-10 p-4" type="text" name="Name" placeholder='Name' required />


                <input onChange={newspro} className=" text-blue-700 shadow shadow-blue-700 mt-2 p-4" type="text" name="URL" placeholder='URL' required />



                <input onChange={newspro} className=" shadow text-blue-700  shadow-blue-700 mt-2 p-4" type="text" name="Ratings" placeholder='Ratings' required />

                <input onChange={newspro} className=" shadow text-blue-700  shadow-blue-700 mt-2 p-4" type="text" name="price" placeholder='price' required />
                <textarea onChange={newspro} className='w-full mt-10 shadow text-blue-700  shadow-blue-700 ' name="ingredient" placeholder='ingredient' id="" required></textarea>
                <button type="submit" onClick={create} className='shadow text-blue-700  shadow-blue-700 rounded px-5 py-3 mx-100 my-10 ' aria-required>set</button>
            </form>

  

        </div>
    )
}
