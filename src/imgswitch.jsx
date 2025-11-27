import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './imgswitch.css'

export default function ImgSwitch() {
  return (
    <div className="switch">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="images" src="/img2.jpg" alt="I2" />
          <div className='box1'>
            <h2>We Provide the Best IT Services for your need</h2>
            <p>Arvat Software Solutions is a full-service Web development and software testing agency that puts its focus on achieving key business objectives, rather than just aesthetics or mere technical implementation. Conversions, transactions, engagement, usability, marketability, revenue, ROI, etc., are some very popular words at Arvat Software Solutions.</p>
            <button>Contact us</button>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100 images" src="/img3.jpg" alt="I3" />
          <div className='box2'>
            <h2>We Provide the Best IT Services for your need</h2>
            <p>Arvat Software Solutions is a full-service Web development and software testing agency that puts its focus on achieving key business objectives, rather than just aesthetics or mere technical implementation. Conversions, transactions, engagement, usability, marketability, revenue, ROI, etc., are some very popular words at Arvat Software Solutions.</p>
            <button>Contact us</button>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100 images" src="/img4.jpg" alt="I4" />
          <div className='box2'>
            <h2>We Provide the Best IT Services for your need</h2>
            <p>Arvat Software Solutions is a full-service Web development and software testing agency that puts its focus on achieving key business objectives, rather than just aesthetics or mere technical implementation. Conversions, transactions, engagement, usability, marketability, revenue, ROI, etc., are some very popular words at Arvat Software Solutions.</p>
            <button>Contact us</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
