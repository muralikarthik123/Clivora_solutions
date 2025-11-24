import React from 'react'
import './contact.css'
export default function contact() {
  return (
    <div className='contactus'>
      <div className='box'>
        <div className='box1'>
        <h1>Contact us</h1>
        <h2>Let's Connect With Us</h2>
        <p>We are a dynamic company dedicated to creating bridges between individuals, ideas, and opportunities.</p>
        <p><b>Address:</b> #409, 4th Floor, Jain sadguru image's capital park, Ayyappa Society, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081</p>
        <p><b>Phone:</b> +91 8499959737</p>
        <p><b>Locations:</b> hyderabad, bangalore, USA and UK</p>
      </div>

      {/* box2 */}
      <div className='box2'>
        <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2660525806164!2d78.38360507414265!3d17.446975601087768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873dde7736fdeff1%3A0x88d3af212bf885bc!2sLevitica%20Technologies%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1763963748683!5m2!1sen!2sin"  title="map"></iframe>
      </div>
      <p></p>
      </div>
    </div>
  )
}
