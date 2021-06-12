import React from "react";
import Nav from "../../Nav/Header";
import HeaderCard from '../../Cards/HeaderCard';
import TopProduct from '../../Cards/TopProductCard';
import Footer from '../../Footer';
import BootStrapCarsoul from "../../Carasoul/BootStrapCarsoul";
import Pjwellery from "../../PersonalizedJwellery/Pjwellery";
import SolitaireProcess from "../../Pages/SolitaireProcess"; 
import Guarantee from "../../Pages/Guarantee";
import Options from "../../Pages/Options";
import ReviewSlider from "../../Pages/ReviewSlider";
import Growth from '../../Pages/Growth';
import FooterCard from '../../Cards/FooterCard';
import Social from '../../Cards/Social';

const Home = () =>{
    return(
        <>
        <HeaderCard/>
    <Nav />
    <div>
    <BootStrapCarsoul/>
    <h4 className="text-center mt-4" >Top Products</h4>
      <TopProduct />
      <Pjwellery/>
      <SolitaireProcess/>
      <ReviewSlider/>
      <Options />
      <Growth/>
      <Guarantee />
    </div>
    <Social/>
    <Footer/>
    <FooterCard/>
        </>
    )
}

export default Home;