import React from "react";
import ProductImage from '../../Images/perfactRing.jpg';
import PinCodeModal from '../Modal/PinCodeModal';


const ProductCardInCheckOut = ({p}) =>{
    return(
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
    )
}
export default ProductCardInCheckOut;