import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider, facebookProvider } from "../../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderCard from '../../Cards/HeaderCard';
import Header from '../../Nav/Header';
import login from "../../../Images/feedbackuser3.jpg";




const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const roleBasedRedirect = (res) => {
    if (res.data.role === "admin") {
      history.push("/admin/dashboard");
    } else {
      history.push("/");
    }
  };



  const createOrUpdateUser = async (authtoken) => {
    return await axios.post(
      "https://js-solitaire.herokuapp.com/api/create-or-update-user",
      {},
      {
        headers: {
          authtoken,
        },
      }
    );
  };

  const createUser = async (name, email) => {
    return await axios.post(
      "https://js-solitaire.herokuapp.com/api/create-user",
      { name, email },
    );
  }
  const responseFacebook = (response) => {
    click(response);
  }

  const componentClicked = (data) => {
    console.log("Facebook data", data);
  }

  const click = (fb) => {
    console.log(fb);
    createUser(fb.name, fb.email).then((res) => {
      console.log("CREATE OR UPDATE RES", res);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          name: res.data.name,
          email: res.data.email,
          token: fb.token,
          role: res.data.role,
          _id: res.data._id,
        },
      });
    }).catch(err => console.log(err));
  }
  // useEffect(() => {
  //   if (user && user.token){
  //     history.push('/');
  //   }
  // }, [user]);

  let dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          console.log("CREATE OR UPDATE RES", res);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          roleBasedRedirect(res);
        })
        .catch();


      // history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
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
          .then((res) => {
            console.log("CREATE OR UPDATE RES", res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch();
        // history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
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
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/Password
      </Button>
    </form>
  );

  const fbLogin = async () => {
    auth
      .signInWithPopup(facebookProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            console.log("CREATE OR UPDATE RES", res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch();
      })
      .catch(err => console.log(err));
    // history.push("/");
  };

  return (
    <div>
      <HeaderCard />
      <Header />
      <div className="container-fluid mt-5 mb-5 pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <img src={login} alt="Login" />
          </div>
          <div className="col-md-6">
            {loading ? <h4 className="text-danger">Loading</h4> : <h4>Login</h4>}
            {loginForm()}
            <i class="fab fa-google-plus"
              style={{ color: 'red', cursor: 'pointer', marginRight: '10px', fontSize: '34px' }}
              onClick={googleLogin} >
            </i>
            {/* <FacebookLogin 
                  appId="110509031211492"
                  autoLoad={false}
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={responseFacebook} 
                  icon="fa-facebook fbBtn"
                  className="ml-2"/> 
              */}
            <i class="fab fa-facebook"
              onClick={fbLogin}
              style={{ color: "blue", cursor: 'pointer', fontSize: '34px' }}>
            </i>
            <Link to="/password-reset" className="ml-4" style={{ textDecoration: 'underline' }}>Forgot password?</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
