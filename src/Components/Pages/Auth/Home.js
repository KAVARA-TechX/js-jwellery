import React from "react";

import TopProduct from '../../Cards/TopProductCard';
import BootStrapCarsoul from "../../Carasoul/BootStrapCarsoul";
import Pjwellery from "../../PersonalizedJwellery/Pjwellery";
import SolitaireProcess from "../../Pages/SolitaireProcess"; 
import Guarantee from "../../Pages/Guarantee";
import Options from "../../Pages/Options";
import ReviewSlider from "../../Pages/ReviewSlider";
import Covered from '../Covered';
import Social from '../../Cards/Social';
import Banner from '../../Cards/Banner';
import OfferBanner from '../../Cards/OfferBanner';

import HeaderCard from '../../Cards/HeaderCard';

import Nav from "../../Nav/Header";
const Home = () =>{
    return(
        <div>
        
    <HeaderCard/>
    
    <Nav />
      <BootStrapCarsoul/>
      <h3 className="text-center ">Top products</h3>
      <TopProduct />
      <Covered/>
      <SolitaireProcess/>
      <OfferBanner/>
      <ReviewSlider />
      {/* <Options /> */}
      <Guarantee />
      <Banner/>
      <Social/>
      
        </div>
    );
}

export default Home;