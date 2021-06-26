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
