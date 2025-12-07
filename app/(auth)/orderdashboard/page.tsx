"use client"


import axios from "axios"
import { ChangeEvent, useState } from "react"
export default function Dashbord() {
    const [newprod, setnewprod] = useState({
        Name: "",
        price: "",
        client: "",
        quantity: ""
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
            url: "http://localhost:3001/order",
            data: {
                id: Math.floor(Math.random() * 1000).toString(),
                client: newprod.client,
                Name: newprod.Name,
                quantity: newprod.quantity,
                price: newprod.price

            }
        })

    }
    return (
        <div className=' mx-10 shadow shadow-gray-600 my-25 h-auto'>


            <form action="" className="mx-10 grid grid-cols-1 gap-4 mt-10 " aria-required>
                <input onChange={newspro} className=" shadow text-blue-700  shadow-blue-700 mt-10 p-4" type="text" name="Name" placeholder='Name' required />


                <input onChange={newspro} className=" text-blue-700 shadow shadow-blue-700 mt-2 p-4" type="text" name="client" placeholder='client' required />



                <input onChange={newspro} className=" shadow text-blue-700  shadow-blue-700 mt-2 p-4" type="text" name="quantity" placeholder='quantity' required />

                <input onChange={newspro} className=" shadow text-blue-700  shadow-blue-700 mt-2 p-4" type="text" name="price" placeholder='price' required />

                <button type="submit" onClick={create} className='shadow text-blue-700  shadow-blue-700 rounded px-5 py-3 mx-100 my-10 ' aria-required>set</button>
            </form>



        </div>
    )
}
