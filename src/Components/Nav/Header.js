import React ,{useState}from 'react'
import {Menu} from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import { Row, Col,Input } from 'antd';
import logo from "../../Images/logo.png";
const {SubMenu,Item} = Menu;

const Header = () =>{
    const [current,setCurrent] = useState('home');
    const handleClick = (e) =>{
      setCurrent(e.key);
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10"> 
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{alignItems:'center', fontFamily:'Ubuntu'}}>
          <Item><img src={logo} alt="logo" style={{width:'150px',height:'90px'}} ></img></Item>
        
        <SubMenu key="SubMenu"  title="JEWELLERY" style={{fontSize:'15px'}} >
          <Row gutter={150} style={{backgroundColor : '#F8F8F8'}}>
            <Col className="gutter-row" span={6}>
              <div style={{padding:'15px',marginLeft: "20px"}}><h6>Category</h6>
              <Row gutter={20}>
                <Col span={12}>l</Col>
                <Col span={8}>lo</Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{padding:'15px',marginLeft:'-20px'}}><h6>Price band</h6>
            </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{padding:'15px',marginLeft:"-50px"}}><h6>Delivery Time</h6></div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{padding:'15px',marginLeft:"-90px"}}><h6>Expert Guidance</h6>
            <p>Metals</p>
            <p>Ring Size guide</p>
            <p>Design Basics </p>
            <p>What is bespoke</p>
            <p>The crafting process</p>
            <p>How ring are priced</p>
            <p>Ethical sourcing</p>
            </div>
            </Col>
          </Row>
        </SubMenu>

        <Item key="education" >
          <span style={{fontSize:'15px'}}>EDUCATION</span>
        </Item>
        <Item key="Solitaires" >
          <span style={{fontSize:'15px'}}>SOLITAIRES</span>
        </Item>
        <Item key="goldCoins" >
          <span style={{fontSize:'15px'}}>GOLD COINS</span>
        </Item>
        <Item key="Collection" >
          <span style={{fontSize:'15px'}}>COLLECTION</span>
        </Item>
        <Item key="invest" >
          <span style={{fontSize:'15px'}}>INVEST WITH US</span>
        </Item>
        <Item key="about" >
          <span style={{fontSize:'15px'}}>ABOUT</span>
        </Item>
      </Menu>
          </div>
          <div className="col-md-2" >
            <Input placeholder="Search for..." style={{marginTop:"15% ",borderRadius:"25px"}} prefix={<SearchOutlined/>}/>
          </div>
        </div>
      </div>
        
    );
}

export default Header;