import React from 'react';
import Message from "../../Images/icon1.png";
import Accountant from "../../Images/icon2.png";
import  Diamond from "../../Images/icon3.png";
import Ring from "../../Images/icon4.png";
import Shop from "../../Images/icon5.png";
const SolitaireProcess = () =>{
return (
    <div style={{backgroundColor: '#add8e6'}} className="container-fluid mt-5">
        <h3 className="text-center pt-4">The JS Experience</h3>
        <div className="row pt-5 text-medium">
            <div className="col-sm ">
                <img src={Message} alt="message" className="center-block icon-size" ></img>
                <p  className="text-center">Contact us to <br/>Share your ideas</p>
            </div>
            <div className="col-sm  ">
            <img src={Accountant} alt="accountant" className="center-block icon-size"></img>
                <p  className="text-center">Receive a quote from <br/>a personal accountant</p>
            </div>
            <div className="col-sm ">
            <img src={Diamond} alt="diamond" className="center-block icon-size"></img>
                <p  className="text-center">Choose your <br/>stone/jewellery</p>
            </div>
            <div className="col-sm ">
            <img src={Ring} alt="ring" className="center-block icon-size"></img>
                <p  className="text-center">Review and finalize <br/>your design</p>
            </div>
            <div className="col-sm ">
            <img src={Shop} alt="shop" className="center-block icon-size"></img>
                <p  className="text-center">Order your ring</p>
            </div>
        </div>
        
    </div>
);
}

export default SolitaireProcess;