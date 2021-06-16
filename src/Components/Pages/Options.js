import React from 'react';
import Invest from "../../Images/Invest.png";
import Track from "../../Images/Track.png";
const Options = () =>{
    return(
        <div className="container-fluid  mt-5 mb-5" style={{backgroundColor:'#114063'}}>
            <div className="row pt-5 pb-5">
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                    <div className="card center-block" >
                        <div className="card-body">
                            <img src={Invest} alt="invest" className="center-block mt-0" style={{height:"160px"}}></img>
                        </div>
                    </div>
                    <br/>
                    <h6 className="text-center text-white">Invest with us</h6>
                    <button className="btn btn-outline-light  center-block" style={{borderRadius:'25px'}}>Read more</button>
                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-4">
                    <div className="card center-block ">
                        <div className="card-body">
                            <img src={Track} alt="track" className="center-block mt-0" style={{height:"160px"}}></img>
                        </div>
                    </div>
                    <br/>
                <h6 className="text-center text-white">Track Your Diamond</h6>
                <button className="btn btn-outline-light  center-block" style={{borderRadius:'25px'}}>Read more</button>
                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
    )
}

export default Options;