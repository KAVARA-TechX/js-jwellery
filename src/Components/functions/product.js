import axios from "axios";

export const createProduct =async (product,authtoken)=>{
    return await axios.post(`http://localhost:8000/api/product`,product,{
        headers:{
            authtoken,
        },
    });
}

export const getProductByCount =async (count)=>{
    return await axios.get(`http://localhost:8000/api/product/${count}`);
}