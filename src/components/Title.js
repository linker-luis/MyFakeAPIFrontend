import React from 'react'

function Title({title}) {
    return (
        <div className = 'text-center mt-7 mb-5'>
            <h2 className = 'text-4xl text-blue-800 md:text-5xl font-medium capitalize'>
                {title}            
            </h2>
            <div className = 'w-20 h-1 bg-rose-500 inline-block rounded-full mt-4'/>
        </div>
        
    )
}

export default Title
