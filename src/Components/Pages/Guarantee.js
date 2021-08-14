import React from 'react';
import Garantee from "../../Images/gur1.png";
import Life from "../../Images/upgrade.png";
import  Buy from "../../Images/moneyback.png";
import Laser from "../../Images/laser-icon.png";
import Diamond from "../../Images/conflictfree.png";
const Guarantee = () =>{
return(
<div style={{backgroundColor: '#add8e6'}} className="container-fluid mt-5 mb-5" id="#buyfromus">
        <h3 className="text-center pt-4 mt-2 ">We Guarantee</h3>
        <div className="row pt-5 text-medium pb-5 tc">
            <div className="col-sm">
                <img src={Garantee} alt="guarantee" className="center-block icon-size"></img>
                <p  className="text-center">100% Certified</p>
            </div>
            <div className="col-sm">
            <img src={Life} alt="life" className="center-block icon-size"></img>
                <p  className="text-center">Lifetime upgrade</p>
            </div>
            <div className="col-sm">
            <img src={Buy} alt="buy" className="center-block icon-size"></img>
                <p  className="text-center">Lifetime buy back</p>
            </div>
            <div className="col-sm">
            <img src={Laser} alt="laser" className="center-block icon-size"></img>
                <p  className="text-center">Laser inscribed</p>
            </div>
            <div className="col-sm">
            <img src={Diamond} alt="diamond" className="center-block icon-size"></img>
                <p  className="text-center">Confilct free <br/> diamonds</p>
            </div>
        </div>
    </div>
);
}

export default Guarantee;