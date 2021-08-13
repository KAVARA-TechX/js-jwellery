import React, {useEffect,useState}from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Header from '../Nav/Header';
import {useSelector,useDispatch} from 'react-redux';
import {getUserCart} from '../functions/auth';
const Checkout = () =>{
    const dispatch = useDispatch();
    const {user} = useSelector((state) => ({...state}));
    const [products,setProducts] = useState([]);    
    useEffect(()=>{
        getUserCart(user.token).then((res)=>{
            console.log(JSON.stringify(res.data,null,4));
        }).catch(err => console.log(err));
    },[]);

return(
    <div>
        <HeaderCard/>
    <Header/>
    <h3 className="text-center mt-5 mb-5">Checkout</h3>
    </div>
);
}

export default Checkout;