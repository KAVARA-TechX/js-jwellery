import React, { useState } from "react";
import { createCoupon } from "../../functions/auth";
import AdminNav from "../../Nav/AdminNav";
import { useSelector } from "react-redux";
const Coupon = () =>{
    const [perc,setPerc] = useState(0);
    const [desc,setDesc] = useState("");
    const [code,setCode] = useState("");

    const {user} = useSelector((state)=>({...state}));
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("perc "+perc);
        createCoupon(perc,desc,code,user.token).then((res)=>{
            console.log(res);
            setCode("");
            setDesc("");
            setPerc(0);
        });
    }

    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    return(
        <div className="d-flex" id="wrapper">
            <AdminNav/>
            <div id="page-content-wrapper">
                <i className="fas fa-bars ml-2" id="sidebarToggle" onClick={handleClick}></i>
                <h4 className="mt-4 ml-2">Coupons</h4>        
                <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label>Percentage</label>
                        <input
                        type="number"
                        className="form-control"
                        value={perc}
                        onChange={e=>setPerc(e.target.value)}
                        />
                        <label>Description</label>
                        <input
                        type="text"
                        className="form-control"
                        value={desc}
                        onChange={e=>setDesc(e.target.value)}
                        />
                        <label>CODE</label>
                        <input
                        type="text"
                        className="form-control"
                        value={code}
                        onChange={e=>setCode(e.target.value)}
                        />
                        
                        </div>
                        <button className="btn btn-outline-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Coupon;