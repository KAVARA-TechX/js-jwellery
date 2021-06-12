import React ,{useState}from 'react'
import {Menu} from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import { Row, Col,Input } from 'antd';
import logo from "../../Images/logo.png";
import Ring from "../../Images/ring.png";
const {SubMenu,Item} = Menu;

const Header = () =>{
    const [current,setCurrent] = useState('home');
    
  
    return (
      <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid" >
    	<a class="navbar-brand" href="#"><img src={logo} alt="JS SOLITAIRE"></img></a>
    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
    		<span class="navbar-toggler-icon" style={{color:'#3B99DA',backgroundColor:"#000"}}></span>
    	</button>
    	<div class="collapse navbar-collapse" id="main_nav">
    		<ul class="navbar-nav">
    			<li class="nav-item dropdown has-megamenu" >
    				<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">JEWELLERY </a>
    				<div class="dropdown-menu megamenu" role="menu" style={{backgroundColor:"#F8F8F8"}}>
    					<div class="row g-3">
    						<div class="col-lg-3 col-6">
    							<div class="col-megamenu">
    								<h6 class="title header">Category</h6>
    								<div class="row g-3">
    								<div class="col-lg-6">
    								<ul class="list-unstyled">
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Ring</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Bracelet</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Chain</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Earings</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Gold Coins</a></li>
    								</ul>
    								</div>
    								<div class="col-lg-6">
    								<ul class="list-unstyled">
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Magalsutra</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckless</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckwear</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Nose pin</a></li>
    									<li><a href="#"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Pendents</a></li>
    								</ul>
    								</div>
    								</div>
    							</div> 
                            </div>
                            <div class="col-lg-3 col-6">
    							<div class="col-megamenu">
    			          			<h6 class="title">Price Band</h6>
    			          			<ul class="list-unstyled">
    			          				<li><a href="#">&lt;4000</a></li>
    			          				<li><a href="#">5k-10k</a></li>
    			          				<li><a href="#">10k-20k</a></li>
    			          				<li><a href="#">20k-30k</a></li>
    			          				<li><a href="#">30k-40k</a></li>
    			          				<li><a href="#">40k-40k</a></li>
    			          				<li><a href="#">&gt;40k</a></li>
    			          			</ul>
    			          		</div> 
                            </div>
                            <div class="col-lg-3 col-6">
    			          	    <div class="col-megamenu">
    			          	    	<h6 class="title">Delivery time</h6>
    			          	    	<ul class="list-unstyled">
    			          	    		<li><a href="#">1-7 DAYS</a></li>
    			          	    		<li><a href="#">7-14 DAYS</a></li>
    			          	    		<li><a href="#">14-28 DAYS</a></li>
    			          	    		<li><a href="#">ABOVE 10 DAYS</a></li>
    			          	    	</ul>
    			          	    </div> 
                            </div>
                            <div class="col-lg-3 col-6">
    			          		<div class="col-megamenu">
    			          			<h6 class="title">Expert Guidance</h6>
    			          			<ul class="list-unstyled">
    			          				<li><a href="#">Metals</a></li>
    			          				<li><a href="#">Ring size guide</a></li>
    			          				<li><a href="#">Design basics</a></li>
    			          				<li><a href="#">What is bespoke</a></li>
    			          				<li><a href="#">The crafting process</a></li>
    			          				<li><a href="#">How ring are priced</a></li>
    			          				<li><a>Ethical soursing</a></li>
    			          			</ul>
    			          		</div> 
                            </div>
                        </div>
						<div class="row g-3">
							<div className="col-lg-5">

							</div>
							<div className="col-lg-3">
								<li><a>+Create Your own category</a></li>
							</div>
							<div className="col-lg-4">

							</div>
						</div>
                    </div>
                </li>
				<li class="nav-item active"> <a class="nav-link" href="#">EDUCATION </a> </li>
			    <li class="nav-item"><a class="nav-link" href="#"> SOLITAIRES </a></li>
			    <li class="nav-item"><a class="nav-link" href="#"> GOLD COINS </a></li>
				<li class="nav-item"><a class="nav-link" href="#"> COLLECTIONS </a></li>
				<li class="nav-item"><a class="nav-link" href="#"> INVEST WITH US </a></li>
				<li class="nav-item"><a class="nav-link" href="#"> ABOUT </a></li>
				<li><SearchOutlined  className="mr-2 ml-5 mt-3"/></li>
				<li class="nav-item">
					<input 
					type="text"
					className="form-control"
					placeholder="Search for"
					style={{borderRadius:'25px'}}
					>
					</input>
				</li>
            </ul>
        </div>
    </div>
</nav>
    );
}

export default Header;