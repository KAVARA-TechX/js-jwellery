import React,{useEffect} from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import Home from './Components/Pages/Auth/Home';
import Nav from "./Components/Nav/Header";
import HeaderCard from './Components/Cards/HeaderCard';
import Footer from './Components/Footer';
import FooterCard from './Components/Cards/FooterCard';
import RegisterComplete from './Components/Pages/Auth/RegisterComplete';

import {auth} from "./firebase";
import { useDispatch } from 'react-redux';
import {currentUser} from '../src/Components/functions/auth';
// import UserRoute from './Components/Routes/UserRoute';
import AdminRoute from './Components/Routes/AdminRoute';
import AdminDashboard from "./Components/Pages/Admin/AdminDashboard";
import ProductCreate from './Components/Pages/Admin/ProductCreate';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Coupon from './Components/Pages/Admin/Coupon';
import AllProducts from './Components/Pages/Admin/AllProducts'
const App = ({history}) => {
  const dispatch = useDispatch();
  //to check firebase with state
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) =>{
      if(user){
        const idTokenResult = await user.getIdTokenResult();
        console.log(user);
        currentUser(idTokenResult.token)
            .then((res)=>{
                dispatch({
                    type:'LOGGED_IN_USER',
                    payload:{
                      name: res.data.name,
                      email: res.data.email,
                      role:res.data.role,
                      _id: res.data._id,
                      token:idTokenResult.token
                    },
                  });
            })
            .catch((err) => console.log(err));
      }
    });
    //
    return unsubscribe;
  },[history,dispatch]);
  return (
    <div >
      
    <ToastContainer/>
    <Switch>
    <Route exact path="/js-jwellery/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route  exact path="/register" component={Register}/>
      <Route  exact path="/register/complete" component={RegisterComplete}/>
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
      <AdminRoute exact path="/admin/product" component={ProductCreate}/>
      <AdminRoute exact path="/admin/products" component={AllProducts}/>
      <AdminRoute exact path="/admin/coupon" component={Coupon}/>
    </Switch>
    
    <Footer/>
    <FooterCard/>
    </div>
  );
};

export default App;
