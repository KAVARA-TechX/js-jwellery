import React, { useState } from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import UserNav from '../../Nav/UserNav';
const ResetPassword = ({history}) =>{
    const [email,setEmail] = useState("");
    // useEffect(()=>{
    //     if(!user){
    //         history.push("/");
    //     }
    // });
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
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
                <div id="page-content-wrapper">
            <i className="fas fa-bars ml-3 mr-3 dHide" id="sidebarToggle" onClick={handleClick}></i> 

                <form className="ml-2" onSubmit={handleSubmit}>
                    <label>Reset Password</label>
                    <input className="form-control"
                    placeholder="Enter your email"
                    onChange={e=> setEmail(e.target.value)}
                    />
                    <button className="button mt-2">Reset</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default ResetPassword;