// import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/prism.css'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className = 'relative min-h-screen'>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
