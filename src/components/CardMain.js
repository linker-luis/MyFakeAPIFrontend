import React from 'react'
import { useRouter } from 'next/dist/client/router'

function CardMain({title, slug, description, img}) {

    const router = useRouter()

    const styles = {
        'background': `url(${img})`, 
        'backgroundSize': 'cover', 
        'backgroundPosition': 'center'
    }
    return (
        <div className="shadow-p group relative overflow-hidden w-72 h-96 mx-2 my-3 rounded-md transition hover:shadow-ph"
            style={styles}
            onClick={() => router.push(`/endPoints/${slug}`)}
        >
            <div className='w-full h-full bg-transparent p-4 transition duration-300 text-center cursor-pointer opacity-0 group-hover:bg-[rgba(3,21,31,0.7)] group-hover:opacity-100'>
                <h3 className='text-gray-200 font-bold text-xl underline mb-3'>{title}</h3>
                <p className='text-gray-200 text-lg'>{description}</p>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-16 text-gray-100 bg-[rgba(3,21,31,0.7)] p-2 font-semibold text-lg flex justify-center items-center opacity-100 transition duration-200 group-hover:opacity-0'>
                {title}
            </div>
        </div>
    )
}

export default CardMain
