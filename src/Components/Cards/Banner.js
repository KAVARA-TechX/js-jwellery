import React from 'react';
import bannerImg from '../../Images/ring.jpg';
const Banner = () =>{
    return(
        <div class="banner-container ">
  <img src={bannerImg} alt="Banner" className="banner-img"/>
  <div class="centered">
      <h4>Love &#38; Engagement</h4>
      <p>Explore the world's most iconic engagement rings.</p>
      <button className="button">Learn more</button>
  </div>
</div>
    );
}

export default Banner;