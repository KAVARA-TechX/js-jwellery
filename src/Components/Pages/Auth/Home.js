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

import HeaderCard from '../../Cards/HeaderCard';

const Home = () =>{
    return(
        <div>
        
    <HeaderCard/>
      <BootStrapCarsoul/>
      <TopProduct />
      <Covered/>
      <SolitaireProcess/>
      <Banner/>
      <ReviewSlider />
      {/* <Options /> */}
      <Guarantee />
      <Social/>
      
        </div>
    );
}

export default Home;