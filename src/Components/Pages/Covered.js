import React from 'react';
import Showroom from '../../Images/Showroom.jpg';
import Consultant from '../../Images/Consult.jpg';
const Covered = () =>{
    return(
        <div className="container-fluid pb-3">
            <h5 className="text-center font-weight-bold">We've got you Covered</h5>
            <div className="row">
            <div className='col-sm-6 mt-5'>
                <img src={Showroom} alt="cover"/>
                <div style={{color:"#115093",width:'90%',height:'100px',backgroundColor:'pink',marginLeft:'5%'}}>
                <p className="text-center pt-5">Join us for a socially-distanced consultation with your <br/>
                personal design expert to discuss your ideas</p>
                <button 
                    className="center-block button p-2"
                    style={{marginTop:'3%'}} 
                    >VISIT OUR SHOWROOM</button>
                </div>
            </div>
            <div className='col-sm-6 mt-5'>
                <img src={Consultant} alt="cover"/>
                <div style={{color:"#115093",width:'90%',height:'100px',backgroundColor:'pink',marginLeft:'4.5%'}}>
                <p className="text-center pt-5">Remotely connect with our design consultants who can <br/>offer guidance and insight from the comfort of your home</p>
                <button 
                    className="center-block button p-2"
                    style={{marginTop:'3%'}} 
                    >BOOK A VIRTUAL CONSULATATION</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Covered;