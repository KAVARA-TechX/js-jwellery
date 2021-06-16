import React from 'react';
import Message from "../../Images/msg.png";
import Accountant from "../../Images/acc.png";
import  Diamond from "../../Images/dia.png";
import Ring from "../../Images/Dring.png";
import Shop from "../../Images/shop.png";
const SolitaireProcess = () =>{
return (
    <div style={{backgroundColor: '#114063'}} className="container-fluid mt-5 mb-5 ">
        <h3 className="text-center text-white pt-4">JS Solitaire Process</h3>
        <div className="row pt-5 pb-5 text-medium">
            <div className="col-sm ">
                <img src={Message} alt="message" className="center-block"></img>
                <p  className="text-center">Contact us to <br/>Share your ideas</p>
            </div>
            <div className="col-sm  ">
            <img src={Accountant} alt="accountant" className="center-block"></img>
                <p  className="text-center">Receive a quote from <br/>a personal accountant</p>
            </div>
            <div className="col-sm ">
            <img src={Diamond} alt="diamond" className="center-block"></img>
                <p  className="text-center">Choose your <br/>stone/jewellery</p>
            </div>
            <div className="col-sm ">
            <img src={Ring} alt="ring" className="center-block"></img>
                <p  className="text-center">Review and finalize <br/>your design</p>
            </div>
            <div className="col-sm ">
            <img src={Shop} alt="shop" className="center-block"></img>
                <p  className="text-center">Order your ring</p>
            </div>
        </div>
        
    </div>
);
}

export default SolitaireProcess;