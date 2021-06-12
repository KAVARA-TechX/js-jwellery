import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './BootStrapCarsoul.css';
import Image1 from "../../Images/Image1.jpg";
import Image2 from "../../Images/Image2.jpg";
import Image4 from "../../Images/Image3.jpg";

const BootStrapCarsoul=()=>{
    return(
        <Carousel fade controls={false}>
        <Carousel.Item interval={3000}>
          <img
            className="w-100"
            src={Image1}
            alt="First slide"
            />
          <Carousel.Caption className="textLoc">
            <h3 style={{color:'white'}}>We Believe,</h3>
            <h1 style={{color:'white'}}>love can't wait!</h1>
            <h2 style={{color:'white'}}>Live advice available</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}> 
          <img
            className="w-100"
            src={Image2}
            alt="Second slide"

          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="w-100"
            src={Image4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default BootStrapCarsoul;