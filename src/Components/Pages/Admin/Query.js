import React,{useState,useEffect} from 'react';
import { getQuery } from '../../functions/auth';
import AdminNav from '../../Nav/AdminNav';

const Query = () =>{
    const [queries,setQueries] = useState([]);

    useEffect(()=>{
        getQuery(10).then((res)=>{
            setQueries(res.data);
        }).catch(err => console.log(err));
    },[]);

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
                {/* {JSON.stringify(queries)} */}
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Purpose</th>
                            <th scope="col">description</th>
                        </tr>
                    </thead>
                    <tbody>
                            {queries.map((query)=>(
                                <tr key={query._id}>
                                    <td>{query.name}</td>
                                    <td>{query.email}</td>
                                    <td>{query.phone}</td>
                                    <td>{query.purpose_of_enquiry}</td>
                                    <td>{query.description}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    )
}

export default Query;