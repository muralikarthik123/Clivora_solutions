import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './imgswitch.css'

export default function ImgSwitch() {
  return (
    <div className="switch">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="images" src="/img2.avif" alt="I2" />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100 images" src="/img3.avif" alt="I3" />
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="d-block w-100 images" src="/img4.avif" alt="I4" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
