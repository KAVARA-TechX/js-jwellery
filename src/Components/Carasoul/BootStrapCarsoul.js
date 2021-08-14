import React from 'react';
import './BootStrapCarsoul.css';
import Image1 from "../../Images/slider1.jpg";
import Image2 from "../../Images/slider2.jpg";
import Image4 from "../../Images/slider3.jpg";
import indicator from "../../Images/conflictfree.png";
import {Link} from 'react-router-dom';
const BootStrapCarsoul=()=>{
    return(
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" 
        className="active" ><img  src={indicator} alt="."/></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" 
        ><img  src={indicator} alt="."/></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" 
        ><img  src={indicator} alt="."/></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block carousel-Img w-100" src={Image1} alt="First slide"/>
          <div className="carousel-caption textLoc">
          <div className="container">
              <div className="row Row">
                <div className="col-sm-4 btnLeft">
                <Link className="btn mb-5 btn-outline-light btn-block pt-1 pb-1  btn-top" to="/design">DESIGN YOUR JEWELLERY</Link>
                </div><div className="col-sm-4 btnLeft">
                <Link className="btn btn-outline-light btn-block pt-1 pb-1  btn-top1" to="/shop/collections">BROWSE THE COLLECTION</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-Img" src={Image2} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-Img" src={Image4} alt="Third slide"/>
        </div>
      </div>
    </div>
    )
}

export default BootStrapCarsoul;