import React from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Nav from '../Nav/Header';
import ring from '../../Images/diamond-ring3.png';
import {Link} from 'react-router-dom';
const RecentView = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="mt-5 mb-5">
            <h3 className="text-center">Recently Viewed</h3>
            <br/>
            <p className="text-center">You have nothing in Recently Viewed.<Link to="/shop">Continue Shopping</Link></p>
            </div>
        </div>
    );
}

export default RecentView;