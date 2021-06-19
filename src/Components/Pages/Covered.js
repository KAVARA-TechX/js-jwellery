import React from 'react';
import Showroom from '../../Images/PJ2.jpg';
import Consultant from '../../Images/Consult.jpg';
const Covered = () =>{
    return(
        <div className="container-fluid pb-3 mt-5 mb-5">
            <h5 className="text-center font-weight-bold">We've got you Covered</h5>
            <div className="row">
            <div className='col-sm-6 mt-5'>
                <img src={Showroom} alt="cover"/>
                <div className="covered-div">
                <p className="text-center pt-3">Join us for a socially-distanced consultation with your <br className="mHide"/>
                personal design expert to discuss your ideas</p>
                <button 
                    className="center-block button p-2"
                     
                    >VIRTUAL TRY ON</button>
                </div>
            </div>
            <div className='col-sm-6 mt-5'>
                <img src={Consultant} alt="cover"/>
                <div className="covered-div">
                <p className="text-center pt-3">Remotely connect with our design consultants who can <br className="mHide"/>
                offer guidance and insight from the comfort of your home</p>
                <button 
                    className="center-block button p-2"
                     
                    >BOOK A VIRTUAL CONSULATATION</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Covered;