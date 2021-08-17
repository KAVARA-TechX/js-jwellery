import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import HeaderCard from '../../Cards/HeaderCard';
import Header from '../../Nav/Header';
import register from "../../../Images/lookbok.jpg";
const Register = ({ history }) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );

  return (
    <div>
    <HeaderCard/>
    <Header/>
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
};

export default Register;
