import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dlogo from "../../Images/logo.png";
import mlogo from "../../Images/favicon.png";
import {SearchOutlined,
    ShoppingCartOutlined,HeartOutlined,ClockCircleOutlined} from '@ant-design/icons';
import {Badge,Input} from 'antd';
import { getCouponsByCount } from '../functions/auth';
const HeaderCard = () =>{
    const {user,cart} = useSelector((state)=>({...state}));

    const [description,setDescription] = useState("");
    const [code,setCode] = useState("");

    
    useEffect(()=>{
        getCouponsByCount(1).then((res)=>{
            setDescription(res.data[0].description);
            setCode(res.data[0].code);
        }).catch(err=>console.log(err));
    },[]);
    return(
        <div>
            <div className="container-fluid mHide">
            <div className="row pt-3 pb-3 header-card">
                <div className="tc col-md-4">Free shipping all over india</div>
                <div className="tc col-md-3"><b>{code}</b>,{description}</div>
                <div className="tc col-md-5"><Link to="/virtual-consultation"><span>Book your consultation</span></Link> 
                    {user ? ` Hello ${user.name}`
                    :  <span><span className="ml-3">|</span><Link to="/login" className="ml-3 mr-3"><span>Login</span></Link>
                    </span>}
                    {user ? "": <span>|<Link to="/register" className=" ml-3"><span>SignUp</span></Link></span>} 
                </div>
            </div>
        </div>

        <div className="container-fluid  mt-1 mb-1 pt-1">
            <div className="row ">
                <div className="col-md-3">
                   <Link to="/"> 
                   <img src={Dlogo} alt="JS SOLITAIRE" style={{height:'72px'}} className="w-68 Logo mHide"></img>
                   <img src={mlogo} alt="JS SOLITAIRE" style={{height:'200px'}} className="w-80 Logo dHide"></img></Link>
                </div>
                <div className="col-md-5 mt-4">
                
					<Input 
					type="text"
					className="form-control header-Input"
					placeholder="Search for"
					style={{borderRadius:'20px'}}
                    suffix={<SearchOutlined  />}
					>
					</Input>
				</div>
                <div className="col-md-4 mt-4 feature-section"   >
                <Link to="/Recently-Viewed" style={{color:'#585858'}} >
                    <ClockCircleOutlined className="ml-3"
                    style={{fontSize: '22px'}}/><span style={{color:'#585858'}} className="ml-1 mr-3">Recently 
                    <Link to="/wishlist" className="ml-3 mr-3"><span className="mr-3">|</span><HeartOutlined 
                    style={{fontSize: '22px'}}/></Link>
                    | <Link to="/cart" className="ml-3"><Badge 
                    count={cart.length} 
                    showZero 
                    offset={[9,2]}
                        style={{
                            color:'#000',
                            backgroundColor:'#fff',
                            boxShadow: '0 0 0 1px #000 inset'
                        }}
                    ><ShoppingCartOutlined style={{fontSize: '22px'}}/></Badge></Link>
                    <br/><span className="ml-5 ">Viewed</span></span>
                    </Link>
                  
                </div>
            </div>
        </div>
        </div>
    );
}

export default HeaderCard;