import React from 'react';
import AboutUS from '../../Images/AboutUs.jpg';
import Nav from '../Nav/Header';
import HeaderCard from '../Cards/HeaderCard';
import TopProductCard from '../Cards/TopProductCard';
const AboutUs = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="banner-container">
            <img src={AboutUS} alt="banner"/>
            <div class="inCenter">
            <label style={{fontSize: '28px', color: 'white'}}>Know The Brand</label>
            </div>
            </div>
            <h3 className="mt-5 mb-5 text-center">About us</h3>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <iframe title="information" src="https://www.youtube.com/embed/tZFXPnyh2VQ" className="w-100"/>
                        <br/>
                    </div>
                    <div className="col-md-6">
                        <p>THIS SECTION WILL CONTAIN INFORMATION ABOUT JS SOLITAIRE</p>
                        <br/>
                        <p>THIS WILL CONTAIN OTHER INFO</p>
                    </div>
                </div>
            </div>
            <div className="mt-5" style={{marginBottom:'6rem'}}>
              <h3 className="text-center">Our Products</h3>
              <TopProductCard/>
            </div>
        </div>
    );
}

export default AboutUs;