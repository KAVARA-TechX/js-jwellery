import React from 'react';

const TopProduct = ({product}) =>{
    return(
        <div>
            <div className="card ml-3  top-product-card" >
              <div className="card-body ">
                <img src={product.images && product.images.length ? product.images[0].url :"" } 
                alt="tran" 
                className="p-1"
                width="auto"
                height="150"
                />
              </div>
            </div>
            <h5 className="pl-5 ">{product.title}</h5>
            <p  className="pl-3">{product.description}</p>
            <h6 className="pl-5 ">`Rs.{product.price}`</h6>
        </div>
    );
}

export default TopProduct;