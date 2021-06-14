import React,{useState,useEffect} from 'react';
import {auth} from '../../../firebase';
const RegisterComplete = ({history}) =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   
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
            console.log("Email and password is required");
            return;
        } 
        if(password.length < 6){
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

                //redirect
                history.push("/");
            }
        }catch (error) {
            console.log(error);
    }
}
    const CompleteregisterationForm = () => <form onSubmit={onHandleSubmit}>
        <input type="email" className="form-control " value={email} disabled  
        />
        <br/>
        <input 
        type="password" 
        className="form-control " 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        autoFocus
        placeholder="Enter your password"  
        />
        <br/>
        
        <button type="submit" className="btn btn-primary">
            Complete Registeration 
            </button>
    </form>
    return(
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register </h4>
                    {CompleteregisterationForm()}
                </div>
            </div>
        </div>
    );
}

export default RegisterComplete;