import React from "react";
import ProductImage from '../../Images/perfactRing.jpg';
import PinCodeModal from '../Modal/PinCodeModal';
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
const ProductCardInCheckOut = ({p}) =>{
    let dispatch = useDispatch();

    const handleQuantityChange = (e)=>{
        //   console.log("Available Quantity ",p.quantity);
          let count = e.target.value < 1 ? 1 : e.target.value;
          if(count > p.quantity){
         toast.error(`Max Available quantity is ${p.quantity}`);
         return;  
        }
          console.log(count);
          let cart = [];
          if (typeof window !== "undefined") {
            if (localStorage.getItem("cart")) {
              cart = JSON.parse(localStorage.getItem("cart"));
            }
      
            cart.map((product, i) => {
              if (product._id === p._id) {
                cart[i].count = count;
              }
            });
      
            //  console.log('cart udpate color', cart)
            localStorage.setItem("cart", JSON.stringify(cart));
            dispatch({
              type: "ADD_TO_CART",
              payload: cart,
            });
          }
      }

    const handleRemove = () =>{
        //   console.log("you clicked",p._id);
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i,1);
        }
      });

      //  console.log('cart udpate color', cart)
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
    }
    return(
        <div class="card cart-card">
                        <img src={ProductImage}
                        className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h6 className="card-title">{p.title}</h6>
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
                                <select style={{border:'transparent'}}
                                value={p.count}
                                onChange={handleQuantityChange}
                                >
                                    <option selected>1</option>
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
                            <button className="button float-right" onClick={handleRemove}>Remove</button>
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
                            <button className="button float-right"><Link style={{color:'white'}} to="/wishlist">Move to Wishlist</Link></button>
                            </p>
                        </div>
                    </div>
    )
}
export default ProductCardInCheckOut;