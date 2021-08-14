import React from 'react';

const TopProduct = ({product}) =>{
    return(
        <div>
            <div className="card top-product-card w-100" >
              <div className="card-body" style={{display:'flex',justifyContent:'center'}}>
                <img src={product.images && product.images.length ? product.images[0].url :"" } 
                alt="tran" 
                className="p-1 ml-5 ml-4"
                height="150"
                />
              </div>
            </div>
            <h5 className="text-center">{product.title}</h5>
            <p  className="text-center">{product.description}</p>
            <h6 className="text-center">Rs.{product.price}</h6>
        </div>
    );
}

export default TopProduct;