import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.css';
import ImgSwitch from '../imgswitch.jsx';
export default function home() {
  return (
    <div className='home'>
      
      <div>
        <ImgSwitch/>
      </div>
      {/* box1 */}
      <div className='box'>
        <div className='box1'>
          <h1>Right Partner for Software Innovation</h1>
          <p>Arvat Software Solutions is a full-service Web development and software testing agency that puts its focus on achieving key business objectives, rather than just aesthetics or mere technical implementation. Conversions, transactions, engagement, usability, marketability, revenue, ROI, etc., are some very popular words at Arvat Software Solutions.</p>
        </div>

        {/* box2 */}
        <div className='box2'>
          <img src="./img1.jpg" alt="" className='img1'/>
        </div>
      </div>


      {/* box3 */}
      <div className='box3'>
        {/* sub box1 */}
        <div className='subbox'>
          <h3>Sap</h3>
          <p>Our expertise in crafting responsive and dynamic websites ensures an impactful presence for your business.</p>
        </div>
        {/* sub box2 */}
        <div className='subbox'>
          <h3>Cloud</h3>
          <p>Unleash our software testing prowess to fortify your digital solutions with quality assurance and precision.</p>
        </div>
        {/* sub box3 */}
        <div className='subbox'>
          <h3>App development</h3>
          <p>Our company utilizes cloud technology to boost agility, lower infrastructure expenses, and rapid innovation.</p>
        </div>
        {/* sub box4 */}
        <div className='subbox'>
          <h3>Web development</h3>
          <p>Our web design services blend creativity and functionality to engage and convert online audiences.</p>
        </div>
      </div>


      
    </div>
  )
}
