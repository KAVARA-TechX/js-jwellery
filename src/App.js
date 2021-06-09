import React from "react";
import Nav from "./Components/Nav/Header";
import HeaderCard from './Components/Cards/HeaderCard';
import TopProduct from './Components/Cards/TopProductCard';
import Footer from './Components/Footer';
import BootStrapCarsoul from "./Components/Carasoul/BootStrapCarsoul";
import Pjwellery from "./Components/PersonalizedJwellery/Pjwellery";
import SolitaireProcess from "./Components/Pages/SolitaireProcess"; 
import Guarantee from "./Components/Pages/Guarantee";
import Options from "./Components/Pages/Options";
import ReviewSlider from "./Components/Pages/ReviewSlider";
import Growth from './Components/Pages/Growth';
import FooterCard from './Components/Cards/FooterCard';

const App = () => {
  return (
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
    <Footer/>
    <FooterCard/>
    </>
  );
};

export default App;
