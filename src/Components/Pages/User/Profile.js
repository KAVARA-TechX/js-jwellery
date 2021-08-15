import React,{useState} from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Header from '../../Nav/Header';
import {Link} from 'react-router-dom';
import UserNav from '../../Nav/UserNav';
import { toast } from 'react-toastify';
import {auth} from '../../../firebase';
import { createOrUpdateUser } from '../../functions/auth';
import { useDispatch } from "react-redux";

const Profile = ({history}) =>{
    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
    }
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState();
    const [dob,setDob] = useState(new Date());
    const [password,setPassword] = useState("");


    const dispatch = useDispatch();
    
    const onHandleSubmit = async(e) =>{
        e.preventDefault(); 
        //validation
        if(!email  || !password){
            toast.error("Email and password is required");
            console.log("Email and password is required");
            return;
        } 
        if(password.length < 6){
            toast.error("password is too short");
            console.log("password is too short");
            return;
        }
        try {
            const result = await auth.signInWithEmailLink(email,window.location.href);
            console.log("Result ",result);

            if(result.user.emailVerified){
                //remove user email from local storage
                window.localStorage.removeItem("emailForRegistration"); //js function
                // get user id token
                let user = auth.currentUser;
                await user.updatePassword(password); // firebase function
                const idTokenResult = await user.getIdTokenResult(); // firebase function

                //redux
                createOrUpdateUser(idTokenResult.token)
                .then((res)=>{
                    dispatch({
                      type: "LOGGED_IN_USER",
                      payload: {
                        name:res.data.name,
                        email: res.data.email,
                        token: idTokenResult.token,
                        role:res.data.role,
                        _id:res.data._id,
                      },
                    });
                  }
                )
                .catch();
                //redirect
                history.push("/js-jwellery");
            }
        }catch (error) {
            console.log(error);
    }
}
    
    return(
        <div>
            <HeaderCard/>
        <Header/>
        <div className="d-flex mt-5 mb-5" id="wrapper">
            <UserNav/>
            <div id="page-content-wrapper">
            <i className="fas fa-bars ml-3 mr-3 dHide" id="sidebarToggle" onClick={handleClick}></i> 

                <form className="ml-2" onSubmit={onHandleSubmit}>
                <label>Email</label>
        <input type="email" className="form-control " value={email} disabled  
        />
                <label>Enter Your Name:-</label>
        <input 
        type="text" 
        className="form-control"
        value={name}
        placeholder="Enter Your name"
        onChange={e => setName(e.target.value)}
        />
                    <label>Enter Your Mobile Number:-</label>
        <input 
        type="num" 
        className="form-control"
        value={mobile}
        placeholder="Enter Your Number"
        onChange={e => setMobile(e.target.value)}
        />
        <label>Enter your date of birth:-</label>
        <input 
        type="date" 
        className="form-control"
        value={dob}
        placeholder="Enter Your Date of birth"
        onChange={e => setDob(e.target.value)}
        />
        <label>Enter Your Password:-</label>
        <input 
        type="password" 
        className="form-control" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"  
        />
                    <button className="button mt-2">Reset</button>
                </form>
            </div>
        </div>
            </div>
    )
}

export default Profile;