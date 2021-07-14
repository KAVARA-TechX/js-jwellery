import React from 'react';
import ProductImage from '../../Images/perfactRing.jpg';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import PinCodeModal from '../Modal/PinCodeModal';
const Cart = () =>{
    return(
        <div>
            <HeaderCard/>
        <Nav/>
        <div className="container mt-5 mb-5">
                    <div className="row">       
                        <div className="col-lg-7" >
                        <p>Total(1 item): &#x20B9; 14,196</p>
                <div class="card cart-card">
                        <img src={ProductImage}
                        className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h6 className="card-title">ROSE GOLD DIAMOND RING PAIR</h6>
                          <label>Size:
                                <select style={{border:'transparent'}}>
                                    <option >1</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >5</option>
                                    <option >10</option>
                                    <option selected>12</option>
                                    <option>24</option>
                                    <option>25</option>
                                </select>
                            </label>
                            <label className="ml-4">
                                Quantity:
                                <select style={{border:'transparent'}}>
                                <option selected>1</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option> 
                                </select>
                            </label>
                    <br/><br/>
                    <button className="button float-right">Remove</button>
                    <PinCodeModal>
                    <input 
        type="number"
        placeholder="Enter your pincode"
        className="form-control"
        />
                    </PinCodeModal>
                    <p><b> ₹16,261 </b>
                    <strike> ₹18,365</strike>
                    <span className="text-danger"> Save ₹2,104 </span>
                    <button className="button float-right">Move to Wishlist</button>
                    </p>
                        </div>
                    </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4" >
                        <div class="new-meows">
        <input type="text" class="form-control"  placeholder="Apply Coupon"/>
        <button type="button" class="button ml-3">Submit</button>    
</div>
                    <br/>
                    <p><b>Order Summary</b></p>
                    <div className="card">
                        <span style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'10px'}}>Subtotal<p className="float-right">₹14,369</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>Coupon Discount<p className="float-right">Apply Coupon</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>You Saved<p className="float-right">₹2,104</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>Delivery Charge (Standard)<p className="float-right">FREE</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>GST<p className="float-right">₹1892.00</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}><b>Total Cost</b><p className="float-right"><b>₹16,261</b></p></span>
                    </div>
                    <br/>
                    <button className="button btn-block">Checkout Securely</button>
                    </div>
                    </div>
                    </div>
        </div>
    );
}

export default Cart;