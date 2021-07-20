import React,{useEffect} from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import {useSelector} from 'react-redux';
import {Link}from 'react-router-dom';
const UserDashboard = ({history}) =>{
    const {user} = useSelector((state)=> ({...state}));

    // useEffect(()=>{
    //     if(!user){
    //         history.push("/");
    //     }
    // });
    return(
        <div>
            <HeaderCard/>               
            <Nav/>
            <div className="mb-5 mt-5 container-fluid">
                <div className="row">
                <div class="border-end bg-white" id="sidebar-wrapper">
                    <div class="sidebar-heading ">User Name</div>
                    <div class="list-group list-group-flush">
                <Link to="/admin/dashboard" class="list-group-item list-group-item-action list-group-item-light p-3">My Orders</Link>
                <Link to="/admin/product" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Wishlist</Link>
                <Link to="/admin/products" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Cart</Link>
                <Link to="/admin/dashboard" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Contact Us</Link>
                <Link to="/admin/coupon" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Reset Password</Link>
                <Link class="list-group-item list-group-item-action list-group-item-light p-3">Logout</Link>
            </div>
        </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;