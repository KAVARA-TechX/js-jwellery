import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/create-or-update-user`,
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};

export const currentUser = async (authtoken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/current-user`,
        {},
        {
            headers: {
                authtoken,
            },
        }
    );
};
export const currentAdmin = async (authtoken) => {
    return await axios.post(
        `${process.env.REACT_APP_API}/current-admin`,
        {},
        {
            headers: {
                authtoken: authtoken,
            },
        }
    );
};


export const createCoupon = async (percentage, description, code, authtoken) => {
    return await axios.post(
        'https://js-solitaire.herokuapp.com/api/coupon',
        { percentage, description, code },
        {
            headers: {
                authtoken: authtoken,
            },
        }
    );
};

export const getCouponsByCount = async (count) => {
    return await axios.get(`https://js-solitaire.herokuapp.com/api/coupons/${count}`);
}

export const createConsulatation = async (name, email, phone) => {
    return await axios.post(`https://js-solitaire.herokuapp.com/api/consult`, { name, email, phone });
}

export const createQuery = async (name, email, phone, purpose_of_enquiry, description) => {
    return await axios.post(`https://js-solitaire.herokuapp.com/api/query`, { name, email, phone, purpose_of_enquiry, description });
}

export const getConsultation = async (count) => {
    return await axios.get(`https://js-solitaire.herokuapp.com/api/consult/${count}`);
}

export const getQuery = async (count) => {
    return await axios.get(`https://js-solitaire.herokuapp.com/api/query/${count}`);
}

export const userCart = async (cart, authtoken) => {
    return await axios.post(`https://js-solitaire.herokuapp.com/api/user/cart`, { cart }, {
        headers: {
            authtoken: authtoken,
        },
    });
}


export const getUserCart = async (authtoken) => {
    return await axios.get(`https://js-solitaire.herokuapp.com/api/user/cart`, {
        headers: {
            authtoken: authtoken,
        },
    });
}

export const getWishList = async (authtoken) => {
    return await axios.get(`https://js-solitaire.herokuapp.com/api/user/wishlist`, {
        headers: {
            authtoken: authtoken,
        },
    });
}

export const removeWishList = async (productId, authtoken) => {
    return await axios.put(`https://js-solitaire.herokuapp.com/api/user/wishlist/${productId}`,{}, {
        headers: {
            authtoken: authtoken,
        },
    });
}


export const addToWishList = async (productId, authtoken) => {
    return await axios.post(`https://js-solitaire.herokuapp.com/api/user/wishlist`, { productId }, {
        headers: {
            authtoken: authtoken,
        },
    });
}



