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
            <div className="container-fluid mHide" style={{backgroundColor : '#114063',color:'white',fontSize: "14px",fontFamily:"sans-serif"}}>
            <div className="row pt-3 pb-3 mt-1 mb-1">
                <div className="tc col-md-4">Free shipping all over india</div>
                <div className="tc col-md-3">6% off Use Code 30OFF, Ends in EXPIRED</div>
                <div className="tc col-md-5">Book your consultation| 
                    {user ? ` Hello ${user.email}`:<Link to="/login">Login</Link>}
                    {user ? "": <span>| <Link to="/register">signUp</Link></span>} 
                </div>
            </div>
        </div>

        <div className="container  mt-1 mb-1 pt-1 p-1">
            <div className="row">
                <div className="col-md-4">
                    <img src={logo} alt="JS SOLITAIRE" style={{height:'90px'}} className="w-80"></img>
                </div>
                <div className="col-md-3 mt-4">
                
					<Input 
					type="text"
					className="form-control"
					placeholder="Search for"
					style={{borderRadius:'15px'}}
                    suffix={<SearchOutlined  />}
					>
					</Input>
				</div>
                <div className="col-md-4 mt-4 " style={{marginLeft:'8%'}}  >
                <Link to="/cart" style={{color:'#000'}} className="mr-3"><ClockCircleOutlined className="iconSize"/><span style={{color:'#999'}}>Recently Viewd</span></Link>
                |<Link to="/cart" className="ml-3 mr-3"><HeartOutlined className="iconSize " style={{ color: '#08c'}}/></Link>
                | <Link to="/cart" className="ml-3 mr-3"><Badge 
                count={0} 
                showZero 
                offset={[9,2]}
                    style={{
                        color:'#000',
                        backgroundColor:'#fff',
                        boxShadow: '0 0 0 1px #000 inset'
                    }}
                ><ShoppingCartOutlined className="iconSize "/></Badge></Link>
                  
                </div>
            </div>
        </div>
        </div>
    );
}

export default HeaderCard;