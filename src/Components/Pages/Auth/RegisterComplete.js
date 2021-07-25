import React,{useState,useEffect} from 'react';
import {auth} from '../../../firebase';
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from '../../functions/auth';
import { toast } from 'react-toastify';
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';
const RegisterComplete = ({history}) =>{
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState();
    const [dob,setDob] = useState(new Date());
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    //const {user} = useSelector((state) =>({...state}));
    useEffect(() =>{
        setEmail(window.localStorage.getItem('emailForRegistration'));
        // console.log(window.localStorage.getItem('emailForRegistration'));
        // console.log(window.location.href);
    },[history])
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
    const CompleteregisterationForm = () => <form onSubmit={onHandleSubmit}>
        <div className="form-group">
            <label>Email</label>
        <input type="email" className="form-control " value={email} disabled  
        />
        </div>
        <div className="form-group">
        <label>Enter Your Name:-</label>
        <input 
        type="text" 
        className="form-control"
        value={name}
        placeholder="Enter Your name"
        onChange={e => setName(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label>Enter Your Mobile Number:-</label>
        <input 
        type="num" 
        className="form-control"
        value={mobile}
        placeholder="Enter Your Number"
        onChange={e => setMobile(e.target.value)}
        />
        </div> 
        <div className="form-group">
            <label>Enter your date of birth:-</label>
        <input 
        type="date" 
        className="form-control"
        value={dob}
        placeholder="Enter Your Date of birth"
        onChange={e => setDob(e.target.value)}
        />
        </div>       
        <div className="form-group">
        <label>Enter Your Password:-</label>
        <input 
        type="password" 
        className="form-control" 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter your password"  
        />
        </div>      
        <div className="form-group">
        <button type="submit" className="btn btn-primary">
            Complete Registeration 
        </button>
        </div>
    </form>
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Complete Registeration </h4>
                    {CompleteregisterationForm()}
                </div>
            </div>
        </div>
        </div>
    );
}

export default RegisterComplete;