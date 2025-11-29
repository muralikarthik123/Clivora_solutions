import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import Home from './home/home.jsx'
import About from './about/about.jsx'
import Services from './services/services.jsx'
import Contact from './contact/contact.jsx'
import {  BrowserRouter, Route,Routes } from 'react-router-dom'
import Clients from './client/client.jsx'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/clients' element={<Clients/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
