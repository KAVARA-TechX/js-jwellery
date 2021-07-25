import React,{useEffect,useState} from 'react';
import bannerImg from '../../Images/ring.jpg';
import {Link} from 'react-router-dom';
import { getCouponsByCount } from '../functions/auth';

const OfferBanner = () =>{
    const [description,setDescription] = useState("");
    useEffect(()=>{
        getCouponsByCount(1).then((res)=>{
            setDescription(res.data[0].description);
        }).catch(err=>console.log(err));
    },[]);
    return(
        <div className="banner-container mt-5 pt-5">
  <img src={bannerImg} alt="Banner" className="banner-img"/>
  <div className="centered">
      <h4>{description}</h4>
      <p>Explore the world's most iconic engagement rings.</p>
      <Link className="button p-1 rounded" to="/shop/collections">Explore Collections</Link>
  </div>
</div>
    );
}

export default OfferBanner;