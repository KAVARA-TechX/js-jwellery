import React from 'react';
import bannerImg from '../../Images/ring.jpg';
import {Link} from 'react-router-dom';
const OfferBanner = () =>{
    return(
        <div class="banner-container mt-5 pt-5">
  <img src={bannerImg} alt="Banner" className="banner-img"/>
  <div class="centered">
      <h4>Best Offer</h4>
      <p>Explore the world's most iconic engagement rings.</p>
      <Link className="button p-1 rounded" to="/shop/collections">Explore Collections</Link>
  </div>
</div>
    );
}

export default OfferBanner;