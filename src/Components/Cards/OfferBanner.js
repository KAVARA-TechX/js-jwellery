import React from 'react';
import bannerImg from '../../Images/ring.jpg';
const OfferBanner = () =>{
    return(
        <div class="banner-container mt-5 pt-5">
  <img src={bannerImg} alt="Banner" className="banner-img"/>
  <div class="centered">
      <h4>Best Offer</h4>
      <p>Explore the world's most iconic engagement rings.</p>
      <button className="button">Explore Collection</button>
  </div>
</div>
    );
}

export default OfferBanner;