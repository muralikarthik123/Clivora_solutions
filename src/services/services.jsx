import React from 'react'
import './services.css'
import { GrCloudComputer } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { FaBugSlash } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
export default function services() {
  return (
    <div className='services'>
      <h2 className='heading'>Our Services</h2>
      <p className='headingcontent'>Our company provides a wide range of services tailored to meet your unique needs. From cutting-edge technology solutions to exceptional customer support, we're dedicated to delivering excellence at every turn.</p>

      {/* main box1 */}
      <div className='box'>
        {/* sub box 1 */}
        <div className='subox'>
          <MdOutlineComputer className='icons'/>
          <h2>Web Development </h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>
        </div>

        {/* sub box 2 */}
        <div className='subox'>
          <GrCloudComputer className='icons'/>
          <h2>Cloud services</h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>
        </div>

        {/* sub box 3 */}
        <div className='subox'>
          <MdAppSettingsAlt className='icons'/>
          <h2>Mobile Development </h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>
        </div>

      </div>

      {/* main box2 */}
      <div className='box'>
        <div className='subox'>
          <FaBugSlash className='icons'/>
          <h2>Software & Automachinetesting </h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>           
        </div>
        <div className='subox'>
          <BiSupport className='icons'/>
          <h2>Logo Designing</h2>   
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>            
        </div>

        <div className='subox'>
          <MdAdd className='icons'/>
          <h2>Website design</h2>   
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>            
        </div>
      </div>
      <p></p> 
    </div>
  )
}
