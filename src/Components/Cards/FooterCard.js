import React from 'react';
import {Input } from 'antd';
const FooterCard = () =>{
    return(
        <div className="container-fluid" 
        style={{backgroundColor:'#add8e6'}}>
            <div className="row tc">
            <div className="col-md-4 text-center">
                <button type="button" class="btn btn-outline-primary btn-sm" 
                style={{float : 'right',marginLeft:'15px',borderRadius:"5px"}} 
                >
                  Subscribe to our letter
                </button>
                <div style={{overflow: "hidden"}}>
                    <Input placeholder="Enter email address" />
                </div>
            </div>
                <div className="col-md-2">
                    <span>
                    <span className="mr-2">Join Our channels</span>
                    <i class="fab fa-facebook-f" style={{fontSize: '2em', color: '#'}}></i>
                    <i class="fab fa-instagram ml-2" style={{fontSize: '2em', color: '#'}}></i>
                    </span>
                </div>
                <div className="col-md-3">
                    <span>
                    <i class="fab fa-cc-mastercard" style={{fontSize: '2em', color: '#'}}></i>
                    <i class="fab fa-cc-visa ml-2" style={{fontSize: '2em', color: '#'}} ></i>
                    <i class="fab fa-cc-paypal ml-2" style={{fontSize: '2em', color: '#'}}></i>
                    <i class="fab fa-google-pay ml-2" style={{fontSize: '2em', color: '#'}}></i>
                    </span>
                </div>
                <div className="col-md-3">
                    <p>Copyright © 2021 All rights reserved JS Solitaire | Site designed by CITEC</p>
                </div>
            </div>
        </div>
    );
}
export default FooterCard;