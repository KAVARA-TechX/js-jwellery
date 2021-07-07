import React from 'react';
import {Link} from 'react-router-dom';
import './AdminNav.css';
import firebase from 'firebase';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import logo from '../../Images/logo1.png';
const AdminNav = () =>{
    const dispatch = useDispatch();
    let history = useHistory();
    const logOut = () =>{
		firebase.auth().signOut();
		dispatch({
		  type: 'LOGOUT',
		  payload:null
		}); 
		history.push('/login');
	  }
    return(
        <div class="border-end bg-white" id="sidebar-wrapper">
        <img src={logo} alt="Js-Solitaire" className="ml-4 mt-2"/>
            <div class="sidebar-heading ">Admin</div>
            <div class="list-group list-group-flush">
                <Link to="/admin/dashboard" class="list-group-item list-group-item-action list-group-item-light p-3">User Orders</Link>
                <Link to="/admin/product" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Create Product</Link>
                <Link to="/admin/products" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">All Products</Link>
                <Link to="/admin/dashboard" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User Queries</Link>
                <Link to="/admin/coupon" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Create Offer</Link>
                <Link class="list-group-item list-group-item-action list-group-item-light p-3" onClick={logOut}>Logout</Link>
            </div>
        </div>
    );
}

export default AdminNav;