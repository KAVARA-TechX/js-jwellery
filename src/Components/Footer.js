import React from 'react';
import {Input } from 'antd';
import PAY from '../Images/pay.png';

const Footer = () =>{
    return(
        <footer className="page-footer font-small mt-3" >
            <div className="container">
                <div className="row ">
                    <div className="col-md-2">
                        <h5 className=" text-uppercase mt-3 mb-4">JEWELLERY</h5>
                        <ul className="list-unstyled">
                            <li>
                                Bracelets
                            </li>
                            <li>
                              Earings
                            </li>
                            <li>
                              Neckless
                            </li>
                            <li>
                              Pendents
                            </li>
                            <li>
                              Rings
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className=" text-uppercase mt-3 mb-4">About us</h5>
                        <ul className="list-unstyled">
                            <li>
                              Profile
                            </li>
                            <li>
                              Know the brand
                            </li>
                            <li>
                              Invest with us
                            </li>
                            <li>
                              Blog
                            </li>
                            <li>
                              Press
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className=" text-uppercase mt-3 mb-4">Policies</h5>
                        <ul className="list-unstyled">
                            <li>
                                Shipping policy
                            </li>
                            <li>
                              Return policy
                            </li>
                            <li>
                              Terms and conditions
                            </li>
                            <li>
                              Privacy policy
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5 className=" text-uppercase mt-3 mb-4">We Accept following payments</h5>
                        <span>
                        <img src={PAY} width="50px"></img>
                        <img src={PAY} width="50px"></img>
                        <img src={PAY} width="50px"></img>
                        <img src={PAY} width="50px"></img>
                        <img src={PAY} width="50px"></img>
                        </span>
                        <div className="mt-2">

                        <button type="button" class="btn btn-outline-primary btn-sm" 
                        style={{float : 'right',marginLeft:'15px',borderRadius:"25px"}} 
                        >
                          Subscribe to our letter
                          </button>
                        <div style={{overflow: "hidden"}}>
                        <Input placeholder="Enter email address" style={{borderRadius:"25px"}}/>
                        </div>
                        </div>
                    </div>    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
