import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link}from 'react-router-dom';
import UserNav from '../../Nav/UserNav';
const UserDashboard = ({history}) =>{

    // useEffect(()=>{
    //     if(!user){
    //         history.push("/");
    //     }
    // });
    
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    return(
        <div>
            <HeaderCard/>               
            <Nav/>
            <div className="d-flex mt-5 mb-5" id="wrapper">
                <UserNav/>
                <div className="page-content-wrapper">
            <i className="fas fa-bars ml-3 mr-3 dHide" id="sidebarToggle" onClick={handleClick}></i> 

                    User Profile Form
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;