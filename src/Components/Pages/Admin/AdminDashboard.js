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
                <i className="fas fa-bars ml-2" id="sidebarToggle" onClick={handleClick}></i>
                <h4 className="mt-4 ml-2">Orders</h4>        
                <div class="container-fluid">
                    User Orders Table
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;