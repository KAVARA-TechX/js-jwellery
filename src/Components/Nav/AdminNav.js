import React from 'react';
import {Link} from 'react-router-dom';
const AdminNav = () =>{
    return(
        <nav>
        <ul className='nav flex-column'>
            <li className="nav-item"><Link to="/admin/dashboard"  className="nav-link">Orders</Link></li>
            <li className="nav-item"><Link to="/admin/product"  className="nav-link">Create Product</Link></li>
            <li className="nav-item"><Link to="/admin/products" className="nav-link" >Products</Link></li>
            <li className="nav-item"><Link to="/admin/coupon" className="nav-link" >Coupons</Link></li>
        </ul>
    </nav>
    );
}

export default AdminNav;