import Adminbar from '@/component/Adminbar';
import React, { Children } from 'react'

interface Ilayout {
    children: React.ReactNode;
}

const Layout = ({ children }: Ilayout) => {
    return (
        <div className="flex flex-col justify-between min-h-screen  ">
            <div className='fixed w-full -mx-8 top-10'>
            <Adminbar />
            </div>
            <div>
                {children}
            </div>


        </div>
    )
}

export default Layout