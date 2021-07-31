import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProductImage from '../../Images/perfactRing.jpg';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import PinCodeModal from '../Modal/PinCodeModal';
import {Link} from "react-router-dom";
const Cart = () =>{
    const {user,cart} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    var total = 0;
    var gst = 1892.00;
    var saved = 2104;

    const saveOrderToDb = () =>{

    }

    return(
        <div>
            <HeaderCard/>
            <Nav/>
            {cart.map((c,i)=>{
                        "Hello"
                        })}
            {/* {JSON.stringify(cart)} */}
            <div className="container mt-5 mb-5">
                <div className="row"> 
                      
                <div className="col-lg-7" >
                    <p>Total({cart.length} item): &#x20B9; {cart.map((c,i)=>{
                        total += (c.count * c.price)
                        })} 
                        {total}
                    </p>
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
                        <span style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'10px'}}>Subtotal<p className="float-right">₹{total}</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>Coupon Discount<p className="float-right">Apply Coupon</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>You Saved<p className="float-right">₹{saved}</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>Delivery Charge (Standard)<p className="float-right">FREE</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>GST<p className="float-right">₹{gst}</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}><b>Total Cost</b><p className="float-right"><b>₹{total + gst - saved}</b></p></span>
                    </div>
                    <br/>
                    {
                        user ? <button className="button btn-block" onClick={saveOrderToDb} disabled={!cart.length}>Checkout Securely</button>
                            :<button className="button btn-block"><Link  to={{
                                pathname: '/login',
                                state: {from: 'cart'},
                            }}
                            >
                            Login to checkout</Link></button>
                    }
                </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;