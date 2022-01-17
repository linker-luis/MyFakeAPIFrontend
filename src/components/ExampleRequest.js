import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import Prism from 'prismjs'
import ReactHtmlParser from 'react-html-parser'
import Warning from './Warning'

function ExampleRequest({api_request, api_response, message}) {
    const [check, setCheck] = useState(false)
    useEffect(() => {
        Prism.highlightAll()
    })
    return (
        <>
            <div >
                {ReactHtmlParser(api_request)}                
            </div>
            <button className = 'bg-rose-600 text-gray-50 py-2 px-5 rounded-full shadow-md hover:bg-rose-700 active:scale-95 transition' onClick = {() => setCheck(!check)}>
                Ver Respuesta
            </button>

            {
                check && (
                    <div >
                        {ReactHtmlParser(api_response)}                        
                    </div>
                )
            }

            {
                message ? <Warning message = {message}/> : null
            }
            
        </>
    )
}

export default dynamic(() => Promise.resolve(ExampleRequest), {
    ssr: false
  })