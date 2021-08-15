import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Header from '../../Nav/Header';
import UserNav from '../../Nav/UserNav';
const Orders = () =>{
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    return(
        <div>
        <HeaderCard/>
        <Header/>
        <div className="d-flex mt-5 mb-5" id="wrapper">
            <UserNav/>
            <div id="page-content-wrapper ">
            <i className="fas fa-bars ml-3 mr-3 dHide" id="sidebarToggle" onClick={handleClick}></i> 
                You don't have any previous orders yet. 
            </div>
        </div>
        </div>
    )
}

export default Orders;