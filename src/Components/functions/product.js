import axios from "axios";

export const createProduct =async (product,authtoken)=>{
    return await axios.post(`https://js-solitaire.herokuapp.com/api/product`,product,{
        headers:{
            authtoken,
        },
    });
}

export const getProductByCount =async (count)=>{
    return await axios.get(`https://js-solitaire.herokuapp.com/api/product/${count}`);
}