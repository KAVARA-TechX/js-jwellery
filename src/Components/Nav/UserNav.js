import React from 'react';
import {Link} from 'react-router-dom';

const UserNav = () =>{
    const handleClick = () =>{
        
    }
    return(
        <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading ">User Name</div>
                <div class="list-group list-group-flush">
                    <Link to="/user/orders" class="list-group-item list-group-item-action list-group-item-light p-3">My Orders</Link>
                    <Link to="/user/profile" class="list-group-item list-group-item-action list-group-item-light p-3">Edit profie</Link>
                    <Link to="/wishlist" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Wishlist</Link>
                    <Link to="/cart" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Cart</Link>
                    <Link to="/virtual-consultation" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Contact Us</Link>
                    <Link to="/password/reset" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Reset Password</Link>
                    <Link class="list-group-item list-group-item-action list-group-item-light p-3" onClick={handleClick()}>Logout</Link>
                </div>    
            </div>
    )
}

export default UserNav;