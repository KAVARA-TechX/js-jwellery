import React from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import ring from '../../Images/diamond-ring3.png';
const WishList = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <p className="text-center">_____________Your Wishlist____________</p>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={ring} alt="product"/>
                            </div>
                            <div className="card-body">
                                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                                <p>Modern diamond ring</p>
                                <button className="button btn-block">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={ring} alt="product"/>
                            </div>
                            <div className="card-body">
                                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                                <p>Modern diamond ring</p>
                                <button className="button btn-block">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={ring} alt="product"/>
                            </div>
                            <div className="card-body">
                                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                                <p>Modern diamond ring</p>
                                <button className="button btn-block">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishList;