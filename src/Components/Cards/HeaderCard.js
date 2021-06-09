import React from 'react';
const HeaderCard = () =>{
    return(
        <div className="container-fluid" style={{backgroundColor : '#114063',color:'white',fontSize: "14px",fontFamily:"sans-serif"}}>
            <div className="row">
                <div className="tc col-4">Free shipping all over india</div>
                <div className="tc col-5">6% off Use Code 30OFF, Ends in EXPIRED</div>
                <div className="tc col-3">Book your consultation| Login | Contact</div>
            </div>
        </div>
    );
}

export default HeaderCard;