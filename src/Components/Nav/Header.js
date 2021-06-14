import React from 'react';
import {SearchOutlined} from '@ant-design/icons';
import logo from "../../Images/logo.png";
import Ring from "../../Images/ring.png";
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import firebase from 'firebase';
import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
const Header = () =>{
    const dispatch = useDispatch();
	let history = useHistory();
	const {user} = useSelector((state)=>({...state}));
	
	const logOut = () =>{
		firebase.auth().signOut();
		dispatch({
		  type: 'LOGOUT',
		  payload:null
		}); 
		history.push('/login');
	  }
    return (
      <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid" >
    	<Link class="navbar-brand" to="/"><img src={logo}  className="logoImg" alt="JS SOLITAIRE"></img></Link>
    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
    		<span class="navbar-toggler-icon" style={{color:'#3B99DA',backgroundColor:"#000"}}></span>
    	</button>
    	<div class="collapse navbar-collapse" id="main_nav">
    		<ul class="navbar-nav">
    			<li class="nav-item dropdown has-megamenu" >
    				<p class="nav-link dropdown-toggle cursor-pointer"  data-bs-toggle="dropdown">JEWELLERY </p>
    				<div class="dropdown-menu megamenu" role="menu" style={{backgroundColor:"#F8F8F8"}}>
    					<div class="row g-3">
    						<div class="col-lg-3 col-6">
    							<div class="col-megamenu">
    								<h6 class="title header">Category</h6>
    								<div class="row g-3">
    								<div class="col-lg-6">
    								<ul class="list-unstyled">
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Ring</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Bracelet</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Chain</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Earings</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Gold Coins</Link></li>
    								</ul>
    								</div>
    								<div class="col-lg-6">
    								<ul class="list-unstyled">
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Magalsutra</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckless</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckwear</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Nose pin</Link></li>
    									<li><Link to="/"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Pendents</Link></li>
    								</ul>
    								</div>
    								</div>
    							</div> 
                            </div>
                            <div class="col-lg-3 col-6">
    							<div class="col-megamenu">
    			          			<h6 class="title">Price Band</h6>
    			          			<ul class="list-unstyled">
    			          				<li><Link to="/">&lt;4000</Link></li>
    			          				<li><Link to="/">5k-10k</Link></li>
    			          				<li><Link to="/">10k-20k</Link></li>
    			          				<li><Link to="/">20k-30k</Link></li>
    			          				<li><Link to="/">30k-40k</Link></li>
    			          				<li><Link to="/">40k-40k</Link></li>
    			          				<li><Link to="/">&gt;40k</Link></li>
    			          			</ul>
    			          		</div> 
                            </div>
                            <div class="col-lg-3 col-6">
    			          	    <div class="col-megamenu">
    			          	    	<h6 class="title">Delivery time</h6>
    			          	    	<ul class="list-unstyled">
    			          	    		<li><Link to="/">1-7 DAYS</Link></li>
    			          	    		<li><Link to="/">7-14 DAYS</Link></li>
    			          	    		<li><Link to="/">14-28 DAYS</Link></li>
    			          	    		<li><Link to="/">ABOVE 10 DAYS</Link></li>
    			          	    	</ul>
    			          	    </div> 
                            </div>
                            <div class="col-lg-3 col-6">
    			          		<div class="col-megamenu">
    			          			<h6 class="title">Expert Guidance</h6>
    			          			<ul class="list-unstyled">
    			          				<li><Link to="/">Metals</Link></li>
    			          				<li><Link to="/">Ring size guide</Link></li>
    			          				<li><Link to="/">Design basics</Link></li>
    			          				<li><Link to="/">What is bespoke</Link></li>
    			          				<li><Link to="/">The crafting process</Link></li>
    			          				<li><Link to="/">How ring are priced</Link></li>
    			          				<li><Link>Ethical soursing</Link></li>
    			          			</ul>
    			          		</div> 
                            </div>
                        </div>
						<div class="row g-3">
							<div className="col-lg-5">

							</div>
							<div className="col-lg-3">
								<li><Link>+Create Your own category</Link></li>
							</div>
							<div className="col-lg-4">

							</div>
						</div>
                    </div>
                </li>
				<li class="nav-item active"> <Link class="nav-link" to="/">EDUCATION </Link> </li>
			    <li class="nav-item"><Link class="nav-link" to="/"> SOLITAIRES </Link></li>
			    <li class="nav-item"><Link class="nav-link" to="/"> GOLD COINS </Link></li>
				<li class="nav-item"><Link class="nav-link" to="/"> COLLECTIONS </Link></li>
				<li class="nav-item"><Link class="nav-link" to="/"> INVEST WITH US </Link></li>
				<li class="nav-item"><Link class="nav-link" to="/"> ABOUT </Link></li>
				{user && <div>
					<li class="nav-item dropdown">
					<p class="nav-link dropdown-toggle" 
					 id="navbarDropdown" 
					 role="button" 
					 data-toggle="dropdown" 
					 aria-haspopup="true" 
					 aria-expanded="false">
						{user.email != null ? user.email : ""}
					</p>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#">Favourites</a>
          				<a class="dropdown-item" href="#">Recently Viewed</a>
          				<div class="dropdown-divider"></div>
          				<a class="dropdown-item" onClick={logOut}>Logout</a>
        			</div>
      			</li>
				  </div>}
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