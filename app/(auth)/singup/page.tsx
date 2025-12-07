import React from 'react'

function page() {
    return (
        <div id='singup-form' className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">


            <form action="" className='grid grid-cols-1 bg-white shadow shadow-blue-500 p-15 w-150'>
                <h2 className="text-2xl font-bold text-center mb-10 ">sing-up</h2>
                <input type="text" name='Name' placeholder='Name' required className='mb-5 rounded text-blue-900 shadow shadow-blue-500 p-2 ' />

                <input type="email" name='email' placeholder='Email' required className='mb-5 rounded text-blue-900 shadow shadow-blue-500 p-2 ' />

                <input type="password" name='password' placeholder='Password' required className='mb-5 rounded shadow text-blue-900 shadow-blue-500 p-2 ' />

                <select name="role" id="" required className='mb-5 rounded shadow text-blue-900 shadow-blue-500 p-2 '>
                    <option value="">--select role</option>
                    <option value="">user</option>
                    <option value="">admin</option>
                </select>

                <button type='submit' className='mb-5 bg-blue-600 rounded text-white'>sing up</button>


                <p> Already have account?<a href="/login" className='text-blue-400'>login</a></p>
            </form>
        </div>
    )
}

export default page
