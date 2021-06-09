import React from 'react';
import Invest from "../../Images/Invest.png";
import Track from "../../Images/Track.png";
const Options = () =>{
    return(
        <div className="container-fluid pt-5 pb-5 mt-5 mb-5" style={{backgroundColor:'#D7DEE4'}}>
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                    <div className="card center-block" >
                        <div className="card-body">
                            <img src={Invest} alt="invest" className="center-block mt-0" style={{height:"160px"}}></img>
                        </div>
                    </div>
                    <br/>
                    <h6 className="text-center">Invest with us</h6>
                    <button className="btn btn-magenda  center-block" style={{borderRadius:'25px'}}>Read more</button>
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
                <h6 className="text-center">Track Your Diamond</h6>
                <button className="btn btn-magenda  center-block" style={{borderRadius:'25px'}}>Read more</button>
                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
    )
}

export default Options;