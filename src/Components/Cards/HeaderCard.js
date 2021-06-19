import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from "../../Images/logo.png";
import {SearchOutlined,
    ShoppingCartOutlined,HeartOutlined,ClockCircleOutlined} from '@ant-design/icons';
import {Badge,Input} from 'antd'
const HeaderCard = () =>{
    const {user} = useSelector((state)=>({...state}));
    const count = 0;
    return(
        <div>
            <div className="container-fluid mHide">
            <div className="row pt-3 pb-3 header-card">
                <div className="tc col-md-4">Free shipping all over india</div>
                <div className="tc col-md-3">6% off Use Code 30OFF, Ends in EXPIRED</div>
                <div className="tc col-md-5">Book your consultation 
                    {user ? ` Hello ${user.email}`
                    :  <span><span className="ml-3">|</span><Link to="/login" className="user-auths ml-3 mr-3">Login</Link>
                    </span>}
                    {user ? "": <span>|<Link to="/register" className=" ml-3 user-auths">SignUp</Link></span>} 
                </div>
            </div>
        </div>

        <div className="container-fluid  mt-1 mb-1 pt-1">
            <div className="row ">
                <div className="col-md-3">
                   <Link to="/"> <img src={logo} alt="JS SOLITAIRE" style={{height:'90px'}} className="w-80 Logo"></img></Link>
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
                <div className="col-md-4 mt-4"  >
                <Link to="/cart" style={{color:'#000'}} >
                    <ClockCircleOutlined className="ml-3"
                    style={{fontSize: '22px'}}/><span style={{color:'#4A689F'}} className="ml-1 mr-3">Recently Viewed</span>
                    </Link>
                |<Link to="/cart" className="ml-3 mr-3"><HeartOutlined style={{ color: '#08c',fontSize: '22px'}}/></Link>
                | <Link to="/cart" className="ml-3"><Badge 
                count={0} 
                showZero 
                offset={[9,2]}
                    style={{
                        color:'#000',
                        backgroundColor:'#fff',
                        boxShadow: '0 0 0 1px #000 inset'
                    }}
                ><ShoppingCartOutlined style={{fontSize: '22px'}}/></Badge></Link>
                  
                </div>
            </div>
        </div>
        </div>
    );
}

export default HeaderCard;