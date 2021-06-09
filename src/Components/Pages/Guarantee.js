import React from 'react';
import Garantee from "../../Images/gur.png";
import Life from "../../Images/life.png";
import  Buy from "../../Images/buyBack.png";
import Laser from "../../Images/Laser.png";
import Diamond from "../../Images/bigDiamond.png";
const Guarantee = () =>{
return(
<div style={{backgroundColor: '#15364C'}} className="container-fluid mt-3">
        <h3 className="text-center text-white pt-2 mt-2 ">We Guarantee</h3>
        <div className="row pt-5 text-medium pb-5 tc">
            <div className="col-sm">
                <img src={Garantee} alt="guarantee" className="center-block"></img>
                <p  className="text-center">100% Certified</p>
            </div>
            <div className="col-sm">
            <img src={Life} alt="life" className="center-block"></img>
                <p  className="text-center">Lifetime upgrade</p>
            </div>
            <div className="col-sm">
            <img src={Buy} alt="buy" className="center-block"></img>
                <p  className="text-center">Lifetime buy back</p>
            </div>
            <div className="col-sm">
            <img src={Laser} alt="laser" className="center-block"></img>
                <p  className="text-center">Laser inscribed</p>
            </div>
            <div className="col-sm">
            <img src={Diamond} alt="diamond" className="center-block"></img>
                <p  className="text-center">Confilct free <br/> diamonds</p>
            </div>
        </div>
    </div>
);
}

export default Guarantee;