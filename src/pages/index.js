import Head from 'next/head'
import Card from '../components/Card'
import Landing from '../components/Landing'
import Title from '../components/Title'

import { getDocList } from '../services/docServices'

export default function Home({docs}) {
  return (
    <div className = 'bg-gray-50'>
      <Head>
        <title>MyFakeAPI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className = 'min-h-auto mb-10 md:mb-15 '>        
        <Landing/>
      </header>

      <main className = ' w-11/12 m-auto'>
        <div className = 'text-center mb-5'>
          <Title title = {'APIs Disponibles'}/>
          {/* <h3 className = 'text-4xl text-blue-800 md:text-5xl'>APIs Disponibles</h3>
          <div className = 'w-20 h-1 bg-rose-500 inline-block rounded-full my-4'></div> */}
          <p className = 'text-gray-600 text-lg'>En My Fake Api encontraras varios tipos de APIs que podras usar segun tu conveniencia</p>
        </div>

        <div className = 'flex justify-center flex-wrap'>
          {
            docs 
              ? (
                  docs.map(doc => {
                    return(
                      <Card key = {doc.id}
                      title = {doc.title}
                      // description = {doc.description}
                      slug = {doc.slug}
                      img = {doc.imgURL}
                      />
                    )
                  })
                )
              : <p>error</p>
          }
        </div>
      </main>
      
    </div>
  )
}

export async function getStaticProps(){
  
  try {
    const res = await getDocList()

    return {
      props: {
        docs: res.data
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }

}

// export async function getStaticProps() {
//      //get data form any API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 3
//     }
// }


// export const getStaticPaths = async () => {
//   return {
//       fallback: false,
//       paths: [
//           {
//               params: {
//                   meetupId: 'm1'
//               }
//           },
//           {
//               params: {
//                   meetupId: 'm2'
//               }
//           },
//           {
//               params: {
//                   meetupId: 'm3'
//               }
//           }
//       ]
//   }
// }

// export const getStaticProps = (context) => {
//   const meetupId = context.params.meetupId
//   return {
//       props: {
//           meetupData: {
//               image: 'https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg',
//               id: meetupId,
//               title: 'first meetup',
//               address: 'some place 4, some city',
//               description: 'This is a first meetup'
//           }
//       }
//   }
// }