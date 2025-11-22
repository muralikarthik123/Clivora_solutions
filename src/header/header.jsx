import React,{useState} from 'react'
import './header.css'
import {Link} from 'react-router-dom'
// import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Header() {
  const [data,setData]=useState(false)

  const menu=()=>{
    setData(!data)
  }
  const close =()=>{
    if (data===true)
      setData(!data)
  }
  return (
    <div className='header'>
        <div className='box1'>
            <div>
                <p>Contact : +91 95812 36238</p>
            </div>
            <ul>
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagramSquare/></li>
            </ul>
        </div>
        <div className='c1'>
            <div className='side'>
            {/*solar heading*/}
            <div className='logos'>
                <img className='logo' src='./logo.jpeg' alt=''/>
            </div>
            {/*hamburg menu*/}
            <div className='ham'>
              <GiHamburgerMenu onClick={menu} className='icon1'/>
            </div>
            </div>
            
            {/*all heading*/}
            <ul className={data ?'mob':'lap'}>
            
            {/* <li> 
                <div className='close'>
                <MdClose onClick={menu} className='icon2'/>
                </div>
            </li> */}
            <li><Link to='/' onClick={close}  className='linking'>Home</Link></li>
            <li><Link to='/about' onClick={close}   className='linking'>About</Link></li>
            <li><Link to='/services' onClick={close}  className='linking'>Services</Link></li>
            <li><Link to='/clients' onClick={close} className='linking'>Clients</Link></li>
            <li><Link to='/products' onClick={close} className='linking'>Careers</Link></li>
            <li><Link to='/contactus' onClick={close} className='linking'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}