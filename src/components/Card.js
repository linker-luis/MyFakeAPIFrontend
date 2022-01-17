import React from 'react'
import Link from 'next/link'

function Card({title, slug, img}) {
    
    return (
        <div className = 'w-56 h-72 m-2 bg-white shadow-md border border-solid border-gray-100 rounded-md text-center flex flex-col justify-between hover:-translate-y-1 transition hover:shadow-lg'>
            <div className = 'w-full h-auto overflow-hidden'>
                <img src= {img} alt="" className = 'w-full ' />
            </div>
            <div className = 'w-full h-px bg-blue-700 '></div>
            <div className = 'px-2'>
                <h4 className = 'text-xl text-blue-900 tracking-wide'>{title}</h4>
                {/* <p className = 'text-sm text-gray-600 tracking-wide'>{description}</p> */}
            </div>
            
            <div className = 'py-3'>
                <button className = 'bg-rose-500 text-gray-50 text-sm px-3 py-1 rounded-full hover:bg-rose-600 scale active:scale-90 transition tracking-wide'>
                    <Link href = {`/endPoints/${slug}`}>
                        <a>
                            Ver Guia
                        </a>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Card
