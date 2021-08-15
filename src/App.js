import React,{useEffect} from 'react';
import {Switch,Route} from 'react-router-dom';

import Login from './Components/Pages/Auth/Login';
import Register from './Components/Pages/Auth/Register';
import Home from './Components/Pages/Auth/Home';
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
import AllProducts from './Components/Pages/Admin/AllProducts';
import VirtualConsultation from './Components/Pages/virtualConsultation';
import Education from './Components/Pages/Education/Education';
import Shapes from './Components/Pages/Education/Shapes';
import Anatomy from './Components/Pages/Education/Anatomy';
import Certification from './Components/Pages/Education/Certification';
import PerfactDiamond from './Components/Pages/Education/PerfactDiamond';
import Sourcing from './Components/Pages/Education/Sourcing';
import ConflictFree from './Components/Pages/Education/ConflictFree'
import PerfactJewellery from './Components/Pages/Education/PerfactJewellery';
import DiamondCare from './Components/Pages/Education/DiamondCare';
import RingType from './Components/Pages/Education/RingType';
import SettingType from './Components/Pages/Education/SettingType';
import RingSize from './Components/Pages/Education/RingSize';
import RingMetal from './Components/Pages/Education/RingMetal';
import RingBudget from './Components/Pages/Education/RingBudget';
import PerfactJewel from './Components/Pages/Education/PerfactRing';
import SingleProductCard from "./Components/Cards/SingleProductCard";
import Cart from './Components/Pages/Cart';
import AboutUs from './Components/Pages/AboutUs';
import WishList from './Components/Pages/Wishlist';
import RecentView from './Components/Pages/RecentView';
import Shop from './Components/Pages/Shop/Jewellery';
import Coins from './Components/Pages/Shop/Coins';
import Collections from './Components/Pages/Shop/Collections';
import Solitaires from './Components/Pages/Shop/Solitaires';
import UserDashboard from './Components/Pages/User/UserDashboard';
import Product from './Components/Pages/Product';
import Query from './Components/Pages/Admin/Query';
import Consultation from './Components/Pages/Admin/Consultation';
import SingleCollections from './Components/Cards/SingleCollections';
import SingleCoinsCard from './Components/Cards/SingleCoinsCard';
import SingleRingsCard from './Components/Cards/SingleRingsCard';
import SingleSolitaires from './Components/Cards/SingleSolitaires';
import DesignForm from './Components/Pages/DesignForm';
import Design from './Components/Pages/Desgin';
import Search from './Components/Pages/Shop/Search';
import Checkout from './Components/Pages/Checkout';
import VirtualTryOn from './Components/Pages/VirtualTryOn';
import ShippingPolicy from './Components/Pages/Policies/ShippingPolicy';
import ReturnPolicy from './Components/Pages/Policies/ReturnPolicy';
import Terms from './Components/Pages/Policies/Terms';
import PrivacyPolicy from './Components/Pages/Policies/PrivacyPolicy';
import Blog from './Components/Pages/Blog';
import Press from './Components/Pages/Press';
import Orders from './Components/Pages/User/Orders';
import Profile from './Components/Pages/User/Profile';
import ResetPassword from './Components/Pages/User/ResetPassword';
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
      {/* Auth Routes */}
      <Route exact path="/" component={Home}/>
      <Route exact path="/product/:slug" component={Product}/>
      <Route exact path="/login" component={Login}/>
      <Route  exact path="/register" component={Register}/>
      <Route  exact path="/register/complete" component={RegisterComplete}/>
      
      {/* Education page routes */}
      
      <Route exact path="/education" component={Education} />
      <Route exact path="/education/shapes" component={Shapes} />
      <Route exact path="/education/anatomy" component={Anatomy} />
      <Route exact path="/education/certification" component={Certification} />
      <Route exact path="/education/perfect-diamond" component={PerfactDiamond} />
      <Route exact path="/education/sourcing" component={Sourcing}/>
      <Route exact path="/education/conflict-free" component={ConflictFree}/>
      <Route exact path="/education/choose-perfect-diamond" component={PerfactJewellery}/>
      <Route exact path="/education/diamond-care" component={DiamondCare}/>
      <Route exact path="/education/ring-type" component={RingType}/>
      <Route exact path="/education/setting-type" component={SettingType}/>
      <Route exact path="/education/ring-size" component={RingSize}/>
      <Route exact path="/education/metal" component={RingMetal}/>
      <Route exact path="/education/budget" component={RingBudget}/>
      <Route exact path="/education/perfact-diamond-ring" component={PerfactJewel}/>
      
      
      {/* Shop page routes */}

      <Route exact path="/shop" component={Shop}/>
      <Route exact path="/shop/coins" component={Coins}/>
      <Route exact path="/shop/collections" component={Collections}/>
      <Route exact path="/shop/solitaires" component={Solitaires}/>
      <Route exact path="/shop/single-product" component={SingleProductCard}/>
      <Route exact path="/shop/collections/single-collection" component={SingleCollections}/>
      <Route exact path="/shop/solitaires/single-Solitaire" component={SingleSolitaires}/>
      <Route exact path="/shop/coins/single-coin" component={SingleCoinsCard}/>
      <Route exact path="/shop/rings/single-ring" component={SingleRingsCard}/>
      <Route exact path="/shop/search/:slug" component={Search}/>

      
      {/* Admin Routes */}
      
      <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
      <AdminRoute exact path="/admin/product" component={ProductCreate}/>
      <AdminRoute exact path="/admin/products" component={AllProducts}/>
      <AdminRoute exact path="/admin/coupon" component={Coupon}/>
      <AdminRoute exact path="/admin/query" component={Query}/>
      <AdminRoute exact path="/admin/consultation" component={Consultation}/>

      {/* User Routes */}
      <Route exact path="/user/dashboard" component={UserDashboard} />
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/wishlist" component={WishList}/>
      <Route exact path="/About-us" component={AboutUs}/>
      <Route exact path="/Recently-Viewed" component={RecentView}/>
      <Route exact path="/user/orders" component={Orders}/>
      <Route exact path="/user/profile" component={Profile}/>
      <Route exact path="/password/reset" component={ResetPassword}/>



      {/* Others */}
      <Route exact path="/virtual-try-on" component={VirtualTryOn}/>
      <Route exact path="/virtual-consultation" component={VirtualConsultation}/>
      <Route exact path="/design" component={Design}/>
      <Route exact path="/design/now" component={DesignForm}/>
      <Route exact path="/design/now" component={DesignForm}/>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/press" component={Press} />


      
      {/* Policies */}
      <Route exact path="/shipping-policy" component={ShippingPolicy} />
      <Route exact path="/return-policy" component={ReturnPolicy} />
      <Route exact path="/terms-and-conditions" component={Terms} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />

    </Switch>
    
    <Footer/>
    <FooterCard/>
    </div>
  );
};

export default App;
