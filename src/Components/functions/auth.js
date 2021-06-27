import axios from 'axios';

export const createOrUpdateUser = async(authtoken) =>{
    return await axios.post(
        'http://localhost:8000/api/create-or-update-user',
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
        'http://localhost:8000/api/current-user',
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
        'http://localhost:8000/api/current-admin',
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
        'http://localhost:8000/api/coupon',
        {percentage,description,code},
        {
        headers:{
            authtoken:authtoken,
        },
    }
    );
};
