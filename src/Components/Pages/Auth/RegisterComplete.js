import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import HeaderCard from '../../Cards/HeaderCard';
import Header from '../../Nav/Header';
import axios from "axios";
import { useDispatch } from "react-redux";
const RegisterComplete = ({ history }) => {
  const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState();
    const [dob,setDob] = useState(new Date());
    const [password,setPassword] = useState("");

    let dispatch = useDispatch();
  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    // console.log(window.location.href);
    // console.log(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
      "http://localhost:8000/api/create-or-update-user",
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validation
    if (!email || !password) {
      toast.error("Email and password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      //   console.log("RESULT", result);
      if (result.user.emailVerified) {
        // remove user email fom local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
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
        history.push("/");

                  }
                )
                .catch();
        // console.log("user", user, "idTokenResult", idTokenResult);
        // redirect
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
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
  );

  return (
    <div>
    <HeaderCard/>
    <Header/>
    <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Complete Registeration </h4>
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegisterComplete;
