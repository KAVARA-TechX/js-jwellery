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

const Home = () =>{
    return(
        <div>
        
    <div>
    <BootStrapCarsoul/>
      <TopProduct />
      <Covered/>
      <SolitaireProcess/>
      <ReviewSlider />
      {/* <Options /> */}
      <Guarantee />
      <Social/>
    </div>
        </div>
    );
}

export default Home;