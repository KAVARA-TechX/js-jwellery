import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
        <footer className="page-footer font-small mt-3 pt-3 pb-2  pt-5" style={{backgroundColor:'#add8e6',color:'#fff'}}>
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 text-center">
                        <h5 className=" text-uppercase mt-3 mb-4">JEWELLERY</h5>
                        <ul className="list-unstyled">
                            <li>
                              <Link style={{color:"#585858"}} to="/shop/search/bracelets">
                                Bracelets
                                </Link>
                            </li>
                            <li>
                            <Link style={{color:"#585858"}} to="/shop/search/earing">
                                Earings
                                </Link>
                            </li>
                            <li>
                            <Link style={{color:"#585858"}} to="/shop/search/neckless">
                                Neckless
                                </Link>
                            </li>
                            <li>
                            <Link style={{color:"#585858"}} to="/shop/search/pendents">
                                Pendents
                                </Link>
                            </li>
                            <li>
                            <Link style={{color:"#585858"}} to="/shop/search/Rings">
                                Rings
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <h5 className=" text-uppercase mt-3 mb-4">About us</h5>
                        <ul className="list-unstyled">
                            <li>
                              Profile
                            </li>
                            <li>
                              Know the brand
                            </li>
                            <li>
                              Blog
                            </li>
                            <li>
                              Press
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
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
                    <div className="col-md-3 text-center">
                        <h5 className=" text-uppercase mt-3 mb-4">Shop With Confidence</h5>
                        <ul className="list-unstyled">
                            <li>
                                Why Buy From Us?
                            </li>
                            <li>
                              Our Certifications
                            </li>
                            <li>
                              Press Room
                            </li>
                            <li>
                              Testimonials
                            </li>
                            <li>
                              Corporate Gifting
                            </li>
                        </ul>
                    </div>
                        
                </div>
            </div>
            <hr/>
        </footer>
    );
}

export default Footer;
