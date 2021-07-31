import React,{useState,useEffect} from 'react';
import {auth} from '../../../firebase';
import {useSelector } from "react-redux";
import {toast} from 'react-toastify';
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';
import register from "../../../Images/lookbok.jpg";

const Register = ({history}) => {
    const [email,setEmail] = useState("");

    const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);
    const handleSubmit  = async(e) =>{
        e.preventDefault();
        // console.log("USER EMAIL:- ",email);
        
        //redirecting user after sending the registration link
        const config = {
            url:'https://js-solitaire-7eb96.web.app/register/complete',
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
    const registerForm = () => (<form onSubmit={handleSubmit}>
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
    </form>);   
return (
    <div>
      <HeaderCard/>
      <Nav/>
      <div  className="container-fluid mt-5 mb-5 pt-5 pb-5">
      <div className="row">
        <div className="col-md-6">
          <img src={register} height="400px" className="w-100" alt="Register"/>
        </div>
        <div className="col-md-6">
        <h4>Register</h4>
        {registerForm()}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;