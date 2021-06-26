import axios from "axios";

export const createProduct =async (product,authtoken)=>{
    await axios.post(`https://js-solitaire.herokuapp.com/api/product`,product,{
        headers:{
            authtoken,
        },
    });
}