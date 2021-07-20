import React from 'react';
const ProductCard = ({ring}) =>{
    return(
        <div className="card">
            <div className="card-img-top">
                <img src={ring} alt="product"/>
            </div>
            <div className="card-body">
                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                <p>Modern diamond ring</p>
                {/* <button className="button btn-block">Buy Now</button> */}
            </div>
        </div>
    );
}

export default ProductCard;