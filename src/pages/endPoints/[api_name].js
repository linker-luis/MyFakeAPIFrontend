import React from 'react'
// import Prism from 'prismjs'

import { getDocDetails, getDocList } from '../../services/docServices';
import ExampleRequest from '../../components/ExampleRequest';
// import SyntaxHighlighter from 'react-syntax-highlighter'

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs' ----> enves del esm  ponemos cjs
// import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Title from '../../components/Title'
import SidebarMenu from '../../components/SidebarMenu';

function ApiDetail({title, description, img, sections}) {
  
    // const codeString = `function $initHighlight(block, cls) {       
    //       if (cls.search(/bno\-highlight/) != -1)
    //         return process(block, true, 0x0F) +
    //         `

    const to_slug = (text) => {
      return text.replace(/ /g, '-').toLowerCase()                 
    }
    const api_names = sections.map(sect => {
      return(
        {
          name: sect.api_name,
          slug: to_slug(sect.api_name)
        }
      )
    })
    
     
    return (
     
        
        <div className = 'w-10/12 m-auto flex space-x-10 relative'>
          <div className = 'w-full sm:w-10/12'>
            <Title title = {title}/>

            <p className = 'text-center text-lg text-gray-600 '>{description}</p>  
            {/* <p className = 'text-center text-lg text-gray-600'>Aqui encontraras datos de simulacion de una tieneda electronica tales como productos, categorias, carritos de compra y usuarios en formato Json servidas desde una API rest. Tanbien encontraras ejemplos de como hacer las peticiones para cada uno de los endpoints.</p>              */}

            <div className='mt-5'>
              {
                sections.map(sect => {
                  return(
                    <div key = {sect.id} id = {`${to_slug(sect.api_name)}`} className = 'mb-10'>
                      <h3 className = 'text-blue-800 text-2xl '>
                        {sect.api_name}
                      </h3>
                      <ExampleRequest  
                        api_request = {sect.api_request} 
                        api_response = {sect.api_response}
                        message = {sect.message}
                      />           
                      
                    </div>
                      
                      //<SyntaxHighlighter language="javascript" style={nightOwl}>
                      //  {codeString}
                      //</SyntaxHighlighter>
                  
                  )
                })
              }   
            </div>           
          </div>
          
          <div className = 'hidden sm:inline-block sm:w-2/12 sm:mt-10'>

            <SidebarMenu names = {api_names}/>
          </div>
        </div>
     
    )
}

export default ApiDetail

export async function getStaticPaths(){
  const docsRoute = await getDocList()
  // const paths = docsRoute.data.map(doc => (
  //   {params: {api_name: doc.slug}}
  // ))

  
  return{
    paths: docsRoute.data.map(doc => (
      {params: {api_name: doc.slug}}
    )),
    fallback: false
  }
}

export async function getStaticProps(ctx){
  const res = await getDocDetails(ctx.params.api_name)
  
  return{
    props: {
      title: res.data.title,
      img: res.data.imgURL,
      description: res.data.description,
      sections: res.data.sections
    }
  }
}
