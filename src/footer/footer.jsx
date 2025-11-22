
import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export default function footer() {
  return (
    <div className='footer'>
      {/*container 1*/}
      <div className='c1'>
        <ul>
            <h1>Links</h1>
            <Link to='/' style={{textDecoration:'none',color:'white'}}><li>Home</li></Link>
            <Link to='/about' style={{textDecoration:'none',color:'white'}}><li>About</li></Link>
            <Link to='/cont' style={{textDecoration:'none',color:'white'}}><li>Contact</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Services</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Clients</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Why ARVAT</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Careers</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Contact us</li></Link>
        </ul>
      </div>

      {/*contanier 2*/}
      <div className='c1'>  
        <ul>
            <h1>Services</h1>
            <Link to='/' style={{textDecoration:'none',color:'white'}}><li>Home</li></Link>
            <Link to='/about' style={{textDecoration:'none',color:'white'}}><li>About</li></Link>
            <Link to='/cont' style={{textDecoration:'none',color:'white'}}><li>Contact</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Services</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Clients</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Why ARVAT</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Careers</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Contact us</li></Link>
        </ul>
      </div>

      {/*address*/}
      <div className='c1'>
        <ul>
            <h1>Address-1</h1>
        <p><a  style={{textDecoration:'none',color:'white'}} href='https://maps.app.goo.gl/7YSSR65GNK5xzp928'>#1-3/3J-5 , Macherla Road, Opposite market yard, Piduguralla, Andhra Pradesh-522413.</a></p>
        </ul>
      </div>

      {/*social*/}
      <div className='c1'>
        <ul>
            <h1>Address-2</h1>
            <p><a  style={{textDecoration:'none',color:'white'}} href='https://maps.app.goo.gl/7YSSR65GNK5xzp928'>Office #409, 4th Floor, Jain sadguru image's capital park, Ayyappa Society, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081.</a></p>
        </ul>
      </div>
    </div>
  )
}
