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
                    :  <span><span className="ml-3">|</span><Link to="/login" className="ml-3 mr-3">Login</Link>
                    </span>}
                    {user ? "": <span>|<Link to="/register" className=" ml-3">SignUp</Link></span>} 
                </div>
            </div>
        </div>

        <div className="container-fluid  mt-1 mb-1 pt-1">
            <div className="row ">
                <div className="col-md-3">
                   <Link to="/"> <img src={logo} alt="JS SOLITAIRE" style={{height:'80px'}} className="w-50 Logo"></img></Link>
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
                <Link to="/cart" style={{color:'#585858'}} >
                    <ClockCircleOutlined className="ml-3"
                    style={{fontSize: '22px'}}/><span style={{color:'#585858'}} className="ml-1 mr-3">Recently 
                    <Link to="/cart" className="ml-3 mr-3"><span className="mr-3">|</span><HeartOutlined 
                    style={{ color: '#585858',fontSize: '22px'}}/></Link>
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
                    <br/><span className="ml-5 ">Viewed</span></span>
                    </Link>
                  
                </div>
            </div>
        </div>
        </div>
    );
}

export default HeaderCard;