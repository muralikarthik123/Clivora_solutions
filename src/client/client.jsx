import React from 'react'
import './client.css'
export default function client() {
  return (
    <div className='clients'>
      <h1>Clients Who Trust Us</h1>
      <p>Our company remains at the forefront of innovation within our industry, driven by an entrepreneurial culture that continually challenges the status quo. We are dedicated to pushing boundaries, both for ourselves and for our clients, seeking out new opportunities and solutions to drive growth and success. This unwavering commitment to innovation fuels our drive for excellence, ensuring that we continuously strive for improvement and never settle for mediocrity.</p>
      {/* main box1 */}
      <div className='box1'>
        {/* box1 */}
        <div className='boxes'>
            <img src='./img8.jpeg' alt=''/>
        </div>
        {/* box2 */}
        <div className='boxes'>
            <img src='./img9.png' alt=''/>
        </div>
        {/* box3 */}
        <div className='boxes'>
            <img src='./img10.png' alt=''/>
        </div>
      </div>

      {/* main box2 */}
      <div className='box2'>
        {/* box1 */}
        <div className='boxes'>
            <img src='./img11.jpeg' alt=''/>
        </div>
        {/* box2 */}
        <div className='boxes'>
            <img src='./img12.png' alt=''/>
        </div>
        {/* box3 */}
        <div className='boxes'>
            <img src='./img13.jpeg' alt=''/>
        </div>
      </div>

      <div className='box2'>
        <p></p>
      </div>
    </div>
  )
}
