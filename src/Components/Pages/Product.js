import React,{useState,useEffect} from 'react';
import {getSingleProduct} from "../functions/product";
import SingleProductCard from "../Cards/SingleProductCard";
const Product = ({match}) =>{
const [product,setProduct] = useState({});
const {slug} = match.params;
useEffect(()=>{
    loadSingleProduct();
},[]);

const loadSingleProduct = () =>{
    getSingleProduct(slug).then((res)=>{
        setProduct(res.data);
    }).catch(err => console.log(err));
}
    return(
           <div> 
               <SingleProductCard product={product}/>
           </div> 

);
}

export default Product;