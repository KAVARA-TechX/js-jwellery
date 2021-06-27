import React,{useEffect,useState} from 'react';
import AdminNav from '../../Nav/AdminNav';
import { getProductByCount } from '../../functions/product';
const AdminDashboard =  () =>{
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(()=>{
        getProductByCount(100)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err));
    },[]);
    return (
        <div className="container-fluid mb-5 pb-5">
        <div className="row">
        <div className="col-md-2"><AdminNav/></div>
        <div className="col-md-9">
        
        <h4>Admin Dashboard</h4>
        </div>
        </div>
    </div>
    )
}

export default AdminDashboard;