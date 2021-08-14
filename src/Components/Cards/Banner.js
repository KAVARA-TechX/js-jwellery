import React from 'react';
import bannerImg from '../../Images/ring.jpg';
import {Link} from 'react-router-dom';
const Banner = () =>{
    return(
        <div className="banner-container mt-5 pt-5">
  <img src={bannerImg} alt="Banner" className="banner-img"/>
  <div className="centered">
      <h4>Love &#38; Engagement</h4>
      <p>Explore the world's most iconic engagement rings.</p>
      <Link className="button p-1 rounded" to="/shop">Learn more</Link>
  </div>
</div>
    );
}

export default Banner;