import React from 'react'
import './services.css'
export default function services() {
  return (
    <div className='services'>
      <h2 className='heading'>Our Services</h2>
      <p className='headingcontent'>Our company provides a wide range of services tailored to meet your unique needs. From cutting-edge technology solutions to exceptional customer support, we're dedicated to delivering excellence at every turn.</p>

      {/* main box1 */}
      <div className='box'>
        {/* sub box 1 */}
        <div className='subox'>
          <h2>Web Development </h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>
        </div>

        {/* sub box 2 */}
        <div className='subox'>
          <h2>Cloud services</h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>
        </div>

        {/* sub box 3 */}
        <div className='subox'>
          <h2>Mobile Development </h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>
        </div>

      </div>

      {/* main box2 */}
      <div className='box'>
        <div className='subox'>
          <h2>QA & testing </h2>
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>           
        </div>
        <div className='subox'>
          <h2>IT support & maintenance </h2>   
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>            
        </div>

        <div className='subox'>
          <h2>Add website design</h2>   
          <p>Our web development team creates user-friendly, responsive websites,Our web development team creates user-friendly, responsive websites.</p>            
        </div>

      </div>  
    </div>
  )
}
