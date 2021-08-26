import React,{useState,useEffect} from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import ring from '../../Images/diamond-ring3.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWishList, removeWishList } from '../functions/auth';
import { Badge } from 'antd';
const WishList = () =>{
    const [wishlist,setWishlist] = useState([]);

    const {user}  = useSelector((state)=>({...state}));

    useEffect(()=>{
        loadWishlist();
    },[user.token]);

    const loadWishlist = () => {
        getWishList(user.token).then(res=>setWishlist(res.data.wishlist)).catch(err=>console.log(err));
    }

    const handleRemove = (productId)=>{
        removeWishList(productId,user.token).then(res => {
            loadWishlist();
        }).catch(err=> console.log(err));
    }
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <h3 className="text-center mt-5">Your Wishlist</h3>
            <br/>
            <div className="container">
                <div className="row">
                    {wishlist.map( (p) => (
                            <div key={p._id} className="col-md-4">
                                <Badge count="x" 
            onClick={() => handleRemove(p._id)}
            style={{cursor:'pointer'}}>
                                <Link to={`/product/${p.slug}`}>
                                <div className="card">
                                    <div className="card-img-top">
                                        <img src={p.images[0].url} alt="product"/>
                                    </div>
                                    <div className="card-body">
                                        <span>₹ 21,393  <strike>₹{p.price}</strike></span> 
                                        <p>{p.title}</p>
                                        <button class="button btn-block" style={{padding:'7px 0px'}}>Buy Now</button>
                                    </div>
                                </div>
                                </Link>
                                </Badge>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WishList;