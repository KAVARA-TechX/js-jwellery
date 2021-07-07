import React, { useState,useEffect } from "react";
import { auth,googleAuthProvider } from "../../../firebase";
import { Button } from "antd";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { GoogleOutlined } from "@ant-design/icons";
import {createOrUpdateUser} from "../../functions/auth";
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';


const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token){
      if(user.role === "admin"){
        history.push("/admin/dashboard");
      }else{
        history.push("/");
      }
    }
  }, [user]);

  const dispatch = useDispatch();

  


  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // console.table(email, password);
    try {
        const result = await auth.signInWithEmailAndPassword(email, password);
        // console.log(result);
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
  
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
        .catch((err)=>console.log(err));

        
        // history.push("/js-jwellery");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        
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
        // history.push("/js-jwellery");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
      </div>

      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  return (
    <div>
      <HeaderCard/>
      <Nav/>
      <div  className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          {loginForm()}
          <Button
            onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Login with Google
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
