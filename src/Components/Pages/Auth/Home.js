import React from "react";

import TopProduct from '../../Cards/TopProductCard';
import BootStrapCarsoul from "../../Carasoul/BootStrapCarsoul";
import Pjwellery from "../../PersonalizedJwellery/Pjwellery";
import SolitaireProcess from "../../Pages/SolitaireProcess"; 
import Guarantee from "../../Pages/Guarantee";
import Options from "../../Pages/Options";
import ReviewSlider from "../../Pages/ReviewSlider";
import Growth from '../../Pages/Growth';
import Social from '../../Cards/Social';

const Home = () =>{
    return(
        <div>
        
    <div>
    <BootStrapCarsoul/>
      <TopProduct />
      <SolitaireProcess/>
      <ReviewSlider/>
      <Options />
      <Social/>
      <Guarantee />
    </div>
        </div>
    );
}

export default Home;