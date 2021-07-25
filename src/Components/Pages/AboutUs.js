import React from 'react';
import AboutUS from '../../Images/AboutUs.jpg';
import Nav from '../Nav/Header';
import HeaderCard from '../Cards/HeaderCard';
const AboutUs = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="banner-container">
            <img src={AboutUS} alt="banner"/>
            <div class="inCenter">
                <h2>Know The Brand</h2>
            </div>
            </div>
            <p>THIS SECTION WILL CONTAIN INFORMATION ABOUT JS SOLITAIRE</p>
            <br/>
            <iframe title="information" src="https://www.youtube.com/embed/tZFXPnyh2VQ" className="w-100"/>
            <br/>
            <p>THIS WILL CONTAIN OTHER INFO</p>
        </div>
    );
}

export default AboutUs;