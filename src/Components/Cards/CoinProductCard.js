import React from 'react';

const CoinProductCard = ({coin}) =>{
    return(
        <div className="card mb-5">
            <div className="card-img-top">
                <img src={coin} alt="product"/>
            </div>
            <div className="card-body">
                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                <p>Gold Coin</p>
                {/* <button className="button btn-block">Buy Now</button> */}
            </div>
        </div>
    );
}

export default CoinProductCard;