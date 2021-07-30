import axios from 'axios';

export const createOrUpdateUser = async(authtoken) =>{
    return await axios.post(
        'https://js-solitaire.herokuapp.com/api/create-or-update-user',
        {},
        {
        headers:{
            authtoken:authtoken,
        },
    }
    );
};

export const currentUser = async(authtoken) =>{
    return await axios.post(
        'https://js-solitaire.herokuapp.com/api/current-user',
        {},
        {
        headers:{
            authtoken:authtoken,
        },
    }
    );
};

export const currentAdmin = async(authtoken) =>{
    return await axios.post(
        'https://js-solitaire.herokuapp.com/api/current-admin',
        {},
        {
        headers:{
            authtoken:authtoken,
        },
    }
    );
};

export const createCoupon = async(percentage,description,code,authtoken) =>{
    return await axios.post(
        'https://js-solitaire.herokuapp.com/api/coupon',
        {percentage,description,code},
        {
        headers:{
            authtoken:authtoken,
        },
    }
    );
};

export const getCouponsByCount = async(count)=>{
    return await axios.get(`http://localhost:8000/api/coupons/${count}`);
}

export const createConsulatation = async(name,email,phone)=>{
    return await axios.post(`http://localhost:8000/api/consult`,{name,email,phone});
}

export const createQuery = async(name,email,phone,purpose_of_enquiry,description)=>{
    return await axios.post(`http://localhost:8000/api/query`,{name,email,phone,purpose_of_enquiry,description});
}
