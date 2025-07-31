import React from 'react'
import Navbar from './appNavbar.jsx'
import Footer from './footer.jsx'
import { Toaster } from 'react-hot-toast'
const layout = (props) => {
  return (
    <>
     <Navbar/>
      {props.children}
      <Toaster position='boottom-center' />
      <Footer  />
      
    </>
  )
}

export default layout
