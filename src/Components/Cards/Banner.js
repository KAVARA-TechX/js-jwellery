import React from 'react';
import bannerImg from '../../Images/ring.jpg';
const Banner = () =>{
    return(
        <div class="banner-container mt-5 mb-5 pt-5">
  <img src={bannerImg} alt="Banner" className="banner-img"/>
  <div class="centered">
      <h4>Love and Engagement</h4>
      <p>Explore the world's most iconic engagement rings.</p>
      <button className="button">Learn more</button>
  </div>
</div>
    );
}

export default Banner;