import axios from "axios";

export const createProduct =async (product,authtoken)=>{
    await axios.post(`https://js-solitaire.herokuapp.com/api/product`,product,{
        headers:{
            authtoken,
        },
    });
}

export const getProductByCount =async (count)=>{
    await axios.get(`http://localhost:8000/api/product/${count}`);
    
}