import React from 'react'
import Link from 'next/link'

function Landing() {
    return (
        <div className = 'flex flex-col justify-evenly w-11/12 m-auto pt-5 space-y-10 md:flex-row md:items-center'>
            <div className = 'text-center md:w-1/2 '>
                <h1 className = 'text-5xl text-blue-800 font-bold sm:text-7xl'>My<span className = 'text-rose-500'>Fake</span>API</h1>
                <h3 className = 'text-lg text-gray-600  mt-5 tracking-wide'>Usa <span className = 'font-bold'>gratis</span> las diferentes APIs que tenemos para ti.</h3>

                <button className = 'bg-rose-500 mt-5 text-gray-50 px-5 py-2 rounded-full hover:bg-rose-600 scale active:scale-90 transition tracking-wide'>
                    <Link href = {'/endPoints'} >
                        <a>
                            Ver Guia
                        </a>
                    </Link>
                </button>
                
            </div>

            <div className = 'flex justify-center md:w-1/2 '>
                <img src="./main.svg" alt="my fake api" className = 'w-10/12' />
            </div>
        </div>
    )
}

export default Landing
