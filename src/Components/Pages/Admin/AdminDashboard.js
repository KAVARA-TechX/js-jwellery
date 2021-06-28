import React,{useEffect} from 'react';
import AdminNav from '../../Nav/AdminNav';
const AdminDashboard =  () =>{
    useEffect(()=>{
    },[]);
  
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
  
    return (
        <div class="d-flex" id="wrapper">
            <AdminNav/>
            <div id="page-content-wrapper ">
                <i class="fas fa-bars" id="sidebarToggle" onClick={handleClick}></i>
                <h4 class="mt-4">Orders</h4>        
                <div class="container-fluid">
                    User Orders Table
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;