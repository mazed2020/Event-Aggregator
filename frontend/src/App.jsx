import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login.page.jsx'
import SignUp from './pages/SignUp.page.jsx'
 

const App = () => {
  return (
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/Login' element={<Login/>} />
     <Route path='/Register' element={<SignUp/>} />

     

     </Routes>
     </BrowserRouter>
    
  )
}

export default App
