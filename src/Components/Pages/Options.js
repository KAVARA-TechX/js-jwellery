import React from 'react';
import Invest from "../../Images/investwithus.jpg";
import Track from "../../Images/trackdiamond.jpg";
const style={
    
}
const Options = () =>{
    return(
        <div className="container-fluid  mt-5 mb-5 pt-3" style={{backgroundColor:'#114063'}}>
            <div className="row pt-5 pb-5">
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                <img src={Invest} 
                alt="invest" 
                className="center-block mt-3 w-100" 
                style={{height:"230px",borderRadius:'10px'}}>
                </img>
                    <br/>
                    <h6 className="text-center text-white">Invest With Us</h6>
                    <button 
                    className="center-block button p-2" 
                    >Read More</button>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                <img src={Track} 
                alt="track" 
                className="center-block mt-3 w-100" 
                style={{height:"230px",borderRadius:'10px'}}>
                </img>
                    <br/>
                <h6 className="text-center text-white">Track Your Diamond</h6>
                <button className="center-block button p-2" 
                >Read More</button>
                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
    )
}

export default Options;