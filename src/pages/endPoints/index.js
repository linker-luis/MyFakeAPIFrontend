import React from 'react'
import CardMain from '../../components/CardMain'
import Title from '../../components/Title'
import { getDocList } from '../../services/docServices'

function index({docs}) {
    return (
        <div className = 'w-10/12 m-auto '>
            <Title title = {'Lista de APIs'}/>
            <p className = 'text-center text-lg text-gray-600'>Encuentra varios tipos de APIs y elige la que mas se acomode a tu necesidad, ingresa a la guia de la API y aprende a usar sus difetentes endpoints.</p>

            <div className = 'flex justify-center flex-wrap mt-5'>
              
                {
                    docs.map(doc => (
                        <CardMain 
                            key = {doc.id}
                            title = {doc.title}
                            description = {doc.description}
                            slug = {doc.slug}
                            img = {doc.imgURL}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default index

export async function getStaticProps(){
    const res = await getDocList()

    return {
        props: {
            docs: res.data
        }
    }
}
