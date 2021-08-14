import React from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Header from '../Nav/Header';
import {Link} from 'react-router-dom';
import AboutUS from "../../Images/investwithus.jpg";
import ringImg from "../../Images/diamond-ring6.png";
const Design = () =>{
return(
    
<div>
<HeaderCard/>
    <Header/>
    <div style={{position:'relative',textAlign:'center'}}>
        <img src={AboutUS} alt="banner" style={{width:'100%',height:"600px"}}/>
            <div style={{position:'absolute',top:'5%',left:'0%'}}>
                <div className="row" style={{width:"90%"}}>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-10">
                    <h1 style={{fontWeight:'100',fontSize:'50px'}}>
                        A CUSTOM JEWELLERY THAT BRINGS YOUR DESIGN IDEAS TO LIFE
                    </h1>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{marginTop:'20%',fontSize:"18px"}}>
                <button
                    className="center-block button p-2"
                    ><Link to="/design/now" style={{color:"#fff"}}>
                    Start now
                    </Link>
                </button>
                </div>
            </div>  
    </div>
    <div className="container-fluid mt-4">
        <div className="row">
            <div className="col-md-4">
                 
            </div>
            <div className="col-md-4 text-center">
            <h3>Custom Engagement Ring Gallery</h3>
        <p>Get inspired by our custom made engagement rings, individually designed with love and crafted by us</p>
            </div>
            <div className="col-md-4">

            </div>

        </div>
        <h4>Customization Process</h4>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
        <div className="d-flex justify-content-center">
        <button
                    className="center-block button p-2"
                    ><Link to="/design/now" style={{color:"#fff"}}>
                    Start now
                    </Link>
                </button>
        </div>
    </div>
</div>

);
}

export default Design;