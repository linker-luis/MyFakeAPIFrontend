import React from 'react'

function SidebarMenu({names}) {
    
    return (
        <div className = 'sticky top-10'>
            <h3 className = 'text-2xl text-blue-800 mb-5'>En esta pagina</h3>
            <ul className='sticky top-0'>
                {
                    names.map((name, i) => (
                        <li 
                            key = {i} 
                            className = 'text-gray-700 text-md mb-2 font-medium hover:text-blue-800 transition '
                        >
                            <a  href={`#${name.slug}`}>{name.name}</a>
                        </li>
                    ))
                }
              
            </ul>
            
        </div>
    )
}

export default SidebarMenu
