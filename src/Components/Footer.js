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
                              <Link to="/About-us" style={{color:"#585858"}}>
                              Profile
                              </Link>
                            </li>
                            <li>
                              <Link to="/blog" style={{color:"#585858"}}>
                              Blog
                              </Link>
                            </li>
                            <li>
                              <Link to="/press" style={{color:'#585858'}}>
                              Press
                              </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <h5 className=" text-uppercase mt-3 mb-4">Policies</h5>
                        <ul className="list-unstyled">
                            <li>
                              <Link style={{color:"#585858"}} to="/shipping-policy">                          
                                Shipping policy
                              </Link>
                            </li>
                            <li>
                              <Link style={{color:"#585858"}} to="/return-policy">
                              Return policy
                              </Link>
                            </li>
                            <li>
                              <Link style={{color:"#585858"}} to="/terms-and-conditions">
                              Terms and conditions
                              </Link>
                            </li>
                            <li>
                              <Link style={{color:"#585858"}} to="/privacy-policy">
                              Privacy policy
                              </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center">
                        <h5 className=" text-uppercase mt-3 mb-4">Shop With Confidence</h5>
                        <ul className="list-unstyled">
                            <li>
                            <a style={{color:"#585858"}} href="#buyfromus">Why Buy From Us?</a>
                            </li>
                            <li>
                              <Link style={{color:"#585858"}} to="/education/certification">
                              Our Certifications
                              </Link>
                            </li>
                            <li>
                              Testimonials
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
