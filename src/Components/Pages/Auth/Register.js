import React,{useState,useEffect} from 'react';
import {auth} from '../../../firebase';
import {useSelector } from "react-redux";
import {toast} from 'react-toastify';
const Register = ({history}) => {
    const [email,setEmail] = useState("");

    const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/js-jwellery");
  }, [user]);
    const handleSubmit  = async(e) =>{
        e.preventDefault();
        // console.log("USER EMAIL:- ",email);
        
        //redirecting user after sending the registration link
        const config = {
            url:'http://localhost:3000/register/complete',
            handleCodeInApp:true
        }

        await auth.sendSignInLinkToEmail(email,config);
        toast.success(`Email is sent to ${email}.Cilck the link to complete your registration.`);
        console.log(`Email is sent to ${email}.Cilck the link to complete your registration.`);
        //save email in localStorage
        window.localStorage.setItem('emailForRegistration',email);
        //clear state
        setEmail("");
    }
    const registerForm = () => <form onSubmit={handleSubmit}>
        <input 
        type="email" 
        className="form-control" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email" 
        ></input><br></br>
        <button type="submit" className="btn btn-primary">
            Register 
            </button>
    </form>   
return (<div className="container p-5 m-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>)}

export default Register;