import React from 'react';
import Showroom from '../../Images/PJ2.jpg';
import Consultant from '../../Images/Consult.jpg';
import {Link} from 'react-router-dom';
const Covered = () =>{
    return(
        <div className="container-fluid pb-3 mt-5 mb-5 pt-5">
            <h3 className="text-center">We've got you Covered</h3>
            <div className="row">
            <div className='col-sm-6 mt-5'>
                <img src={Showroom} alt="cover"/>
                <div className="covered-div">
                <p className="text-center pt-3">Ever wonder what a 1.50 carat might look like on your hand?
                <br className="mHide"/>
                Test out different jwelleries, styles,diamond shapes/sizes.
                </p>
                <button
                    className="center-block button p-2"
                    ><Link to="/virtual-try-on" style={{color:"#fff"}}>
                    VIRTUAL TRY ON
                    </Link></button>
                </div>
            </div>
            <div className='col-sm-6 mt-5'>
                <img src={Consultant} alt="cover"/>
                <div className="covered-div">
                <p className="text-center pt-3">Remotely connect with our design consultants who can 
                <br className="mHide"/>
                offer guidance and insight from the comfort of your home.</p>
                <button
                    className="center-block button p-2"
                    ><Link to="/virtual-consultation" style={{color:"#fff"}}>
                    BOOK A VIRTUAL CONSULATATION
                    </Link></button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Covered;