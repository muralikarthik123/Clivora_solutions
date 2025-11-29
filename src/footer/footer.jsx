
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
            <Link to='/' style={{textDecoration:'none',color:'white'}}><li>Web development</li></Link>
            <Link to='/about' style={{textDecoration:'none',color:'white'}}><li>Cloud</li></Link>
            <Link to='/cont' style={{textDecoration:'none',color:'white'}}><li>SAP</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>App development</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Website design</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Logo design</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Software testing</li></Link>
            <Link to='/services' style={{textDecoration:'none',color:'white'}}><li>Automation Testing</li></Link>
        </ul>
      </div>

      {/*address*/}
      <div className='c1'>
        <ul>
            <h1>Address-1</h1>
        <p><a  style={{textDecoration:'none',color:'white'}} href='https://maps.app.goo.gl/7YSSR65GNK5xzp928'>Office #409, 4th Floor, Jain sadguru image's capital park, Ayyappa Society, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081</a></p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266714422698!2d78.38363737414267!3d17.44694390108873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1764424765349!5m2!1sen!2sin" title="a" style={{borderradius:'10px'}}></iframe>
        </ul>
      </div>
      
    </div>
  )
}
