import axios from "axios";

export const createProduct =async (product,authtoken)=>{
    return await axios.post(`https://js-solitaire.herokuapp.com/api/product`,product,{
        headers:{
            authtoken,
        },
    });
}
export const getSingleProduct = async (slug)=>{
    return await axios.get(`http://localhost:8000/api/product/${slug}`);
}

export const getProductByCount =async (count)=>{
    return await axios.get(`https://js-solitaire.herokuapp.com/api/product/${count}`);
}