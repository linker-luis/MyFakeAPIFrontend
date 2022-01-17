import React from 'react'

function Warning({message}) {
    return (
        <div className = 'bg-rose-100 rounded-md p-5 text-rose-500 my-5'>
            <span className = 'text-lg font-bold'>Advertencia: </span>{message}
        </div>
    )
}

export default Warning
