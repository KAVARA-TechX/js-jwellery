import React,{useState,useEffect} from 'react';
import { getConsultation } from '../../functions/auth';

import AdminNav from '../../Nav/AdminNav';

const Consultation = () =>{
    const [consults,setConsults] = useState([]);

    useEffect(()=>{
        getConsultation(10).then((res)=>{
            setConsults(res.data);
        }).catch(err => console.log(err));
    },);
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    return(
        <div class="d-flex" id="wrapper">
            <AdminNav/>
            <div id="page-content-wrapper">
            <i className="fas fa-bars ml-2" id="sidebarToggle" onClick={handleClick}></i>
            <div class="container-fluid mt-5">
                {/* {JSON.stringify(consults)} */}
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consults.map((consult)=>(
                            <tr key={consult._id}>
                            <td>{consult.name}</td>
                            <td>{consult.email}</td>
                            <td>{consult.phone}</td>
                            </tr>   
                        ))}  
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Consultation;