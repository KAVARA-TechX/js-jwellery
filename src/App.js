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

const App = ({history}) => {
  const dispatch = useDispatch();
  //to check firebase with state
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) =>{
      if(user){
        const idTokenResult = await user.getIdTokenResult();
        console.log(user);
        dispatch({
          type:'LOGGED_IN_USER',
          payload:{
            email: user.email,
            token:idTokenResult.token,
          },
        });
      }
    });
    //
    return unsubscribe;
  },[history,dispatch]);
  return (
    <div>
    <HeaderCard/>
    <Nav />
    <Switch>
    <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route  exact path="/register" component={Register}/>
      <Route  exact path="/register/complete" component={RegisterComplete}/>
    </Switch>
    
    <Footer/>
    <FooterCard/>
    </div>
  );
};

export default App;
