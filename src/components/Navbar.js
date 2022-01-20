import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    console.log(toggle)
    return (
        <nav className = 'relative w-full  h-16 bg-blue-700 shadow-md'>
            <div className = 'h-full z-50 m-auto flex justify-between items-center w-11/12 sm:w-10/12'>
                <div onClick = {() => router.push('/')} className = ' relative cursor-pointer'>
                    <h2 className = 'text-3xl text-blue-100'>My<span className = 'font-bold'>Fake</span>API</h2>
                </div>
                <ul className = {`absolute trans z-50 right-0 overflow-hidden ${toggle === true ? 'w-full' : 'w-[0px]'} top-16 h-[50vh] w-screen bg-blue-700 flex flex-col justify-center items-center sm:static sm:space-x-20 sm:bg-transparent sm:w-auto sm:h-auto sm:flex-row`}>
                    <li onClick={() => setToggle(false)} className = ' inline-block my-2 sm:my-0'><Link href = '/'><a className = 'links_navbar' >Home</a></Link></li>
                    <li onClick={() => setToggle(false)} className = ' inline-block my-2 sm:my-0'><Link href = '/endPoints'><a className = 'links_navbar' >APIs</a></Link></li>
                </ul>
                <div 
                    onClick={() => setToggle(!toggle)}
                    className={`${toggle ? 'rotate-0': '-rotate-90'} inline-block cursor-pointer text-white text-xl font-bold transition sm:hidden`}>
                    |||
                </div>
            </div>
        </nav>
    )
}

export default Navbar
