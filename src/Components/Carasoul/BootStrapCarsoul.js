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
            className="carasoulImg"
            src={Image1}
            alt="First slide"
            />
          <Carousel.Caption className="textLoc">
        
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                <button class="btn btn-outline-light btn-block">Design Your Ring</button>
                </div><div className="col-sm-4 btnLeft">
                <button class="btn btn-outline-light btn-block">Browse The Collection</button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}> 
          <img
            className="carasoulImg"
            src={Image2}
            alt="Second slide"

          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="carasoulImg"
            src={Image4}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default BootStrapCarsoul;