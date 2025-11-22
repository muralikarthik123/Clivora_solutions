import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import Home from './home/home.jsx'
import About from './about/about.jsx'
// import Services from './service/service.jsx'

import {  BrowserRouter, Route,Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/services' element={<Services/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
