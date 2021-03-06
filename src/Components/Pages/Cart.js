import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ProductImage from '../../Images/perfactRing.jpg';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import PinCodeModal from '../Modal/PinCodeModal';
import {Link} from "react-router-dom";
import ProductCardInCheckOut from '../Cards/ProductCardInCheckOut';
import {userCart} from '../functions/auth';
import {useHistory} from 'react-router-dom';
const Cart = () =>{
    const {user,cart} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    var total = 0;
    var gst = 1892.00;
    var saved = 2104;
    var totalItems=0;
    let history = useHistory();
    const saveOrderToDb = () =>{
        console.log("Cart",JSON.stringify(cart,null,4));
        userCart(cart,user.token).then((res)=>{
            if(res.status === 200){
                history.push("/checkout");
            }
        }).catch(err=> console.log(err));

    }
    

    return(
        <div>
            <HeaderCard/>
            <Nav/>
            
            {/* {JSON.stringify(cart)} */}
            <div className="container mt-5 mb-5">
                <h3 className="text-center">Cart</h3>
                <div className="row"> 
                <div className="col-lg-7" >
                    <p>{cart.map((p)=>{
                        totalItems += parseInt(p.count);
                    })}Total( {totalItems} item): &#x20B9; {cart.map((c,i)=>{
                        total += (c.count * c.price)
                        })} 
                        {total}
                    </p>
                    {cart.map((product)=>
                (
				<ProductCardInCheckOut key={product._id} p={product} />
				))}
                </div>
                <div className="col-lg-1"></div>
                    
                    {cart.length != 0 ? (<div className="col-lg-4">
                        <div class="new-meows">
                        <input type="text" class="form-control"  placeholder="Apply Coupon"/>
                        <button type="button" class="button ml-3">Submit</button>    
                    </div>
                    <br/>
                        <p><b>Order Summary</b></p>
                    <div className="card">
                        <span style={{paddingLeft:'10px',paddingRight:'10px',paddingTop:'10px'}}>Subtotal<p className="float-right">???{cart.length ? total : ""}</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>Coupon Discount<p className="float-right">Apply Coupon</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>You Saved<p className="float-right">???{cart.length? saved : ""}</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>Delivery Charge (Standard)<p className="float-right">FREE</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}>GST<p className="float-right">???{cart.length? gst : ""}</p></span>
                        <span style={{paddingLeft:'10px',paddingRight:'10px'}}><b>Total Cost</b><p className="float-right"><b>???{cart.length? total + gst - saved : ""}</b></p></span>
                    </div>
                    <br/>
                    {
                        user ? <button className="button btn-block" onClick={saveOrderToDb} disabled={!cart.length}>Checkout Securely</button>
                            :<button className="button btn-block"><Link style={{color:'white'}} to={{
                                pathname: '/login',
                                state: {from: 'cart'},
                            }}
                            >
                            Login to checkout</Link></button>
                    }
                    </div>): (<div className="text-center mt-5 mb-5">
                        <h5 className="mt-5 mb-5"><b>Your cart is Empty</b></h5>
                    </div>)}
                    
                </div>
            </div>
        </div>
    );
}

export default Cart;