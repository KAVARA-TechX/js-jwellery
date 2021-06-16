import React from 'react';

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
	<nav class="navbar navbar-expand-lg navbar-dark pt-2 pb-2 mt-1 mb-1" style={{backgroundColor : '#114063'}}>
	<div class="container">
		  <button class="navbar-toggler" type="button" 
			 data-bs-toggle="collapse" 
			 data-bs-target="#main_nav"  
			 aria-expanded="false" 
			 aria-label="Toggle navigation"
		  >
			<span class="navbar-toggler-icon float-right" 
			style={{color:'#3B99DA',backgroundColor:"#000"}}>
			</span>
		  </button>
		  <div class="collapse navbar-collapse" id="main_nav">
			  <ul class="navbar-nav " >
				  <li class="nav-item dropdown has-megamenu" >
					  <div class="nav-link dropdown-toggle" style={{cursor:'pointer'}} data-bs-toggle="dropdown">JEWELLERY </div>
					  <div class="dropdown-menu megamenu" role="menu" style={{backgroundColor:"#d4d4d4"}}>
						  <div class="row g-3">
							  <div class="col-lg-3 col-6">
								  <div class="col-megamenu">
									  <h6 class="title header">Category</h6>
									  <div class="row g-3">
									  <div class="col-lg-6">
									  <ul class="list-unstyled">
										  <li><Link to="/" className="sayen" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Ring</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Bracelet</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Chain</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Earings</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Gold Coins</Link></li>
									  </ul>
									  </div>
									  <div class="col-lg-6">
									  <ul class="list-unstyled">
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Mangalsutra</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckless</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckwear</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Nose pin</Link></li>
										  <li><Link to="/" className="sayen"><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Pendents</Link></li>
									  </ul>
									  </div>
									  </div>
								  </div> 
							  </div>
							  <div class="col-lg-3 col-6">
								  <div class="col-megamenu text-center">
										<h6 class="title header">Price Band</h6>
										<ul class="list-unstyled">
											<li><Link to="/" className="sayen">&lt;4000</Link></li>
											<li><Link to="/" className="sayen">5k-10k</Link></li>
											<li><Link to="/" className="sayen">10k-20k</Link></li>
											<li><Link to="/" className="sayen">20k-30k</Link></li>
											<li><Link to="/" className="sayen">30k-40k</Link></li>
											<li><Link to="/" className="sayen">40k-40k</Link></li>
											<li><Link to="/" className="sayen">&gt;40k</Link></li>
										</ul>
									</div> 
							  </div>
							  <div class="col-lg-3 col-6">
									<div class="col-megamenu">
										<h6 class="title title header">Delivery time</h6>
										<hr/>
										<ul class="list-unstyled">
											<li><Link to="/" className="sayen">1-7 DAYS</Link></li>
											<li><Link to="/" className="sayen">7-14 DAYS</Link></li>
											<li><Link to="/" className="sayen">14-28 DAYS</Link></li>
											<li><Link to="/" className="sayen">ABOVE 10 DAYS</Link></li>
										</ul>
									</div> 
							  </div>
							  <div class="col-lg-3 col-6">
									<div class="col-megamenu">
										<h6 class="title header">Expert Guidance</h6>
										<ul class="list-unstyled">
											<li><Link to="/" className="sayen">Metals</Link></li>
											<li><Link to="/" className="sayen">Ring size guide</Link></li>
											<li><Link to="/" className="sayen">Design basics</Link></li>
											<li><Link to="/" className="sayen">What is bespoke</Link></li>
											<li><Link to="/" className="sayen">The crafting process</Link></li>
											<li><Link to="/" className="sayen">How ring are priced</Link></li>
											<li><Link to="/" className="sayen">Ethical soursing</Link></li>
										</ul>
									</div> 
							  </div>
						  </div>
						  <div class="row g-3">
							  <div className="col-lg-5">
							  </div>
							  <div className="col-lg-3">
								  <li><Link to="/" className="sayen">+Create Your own category</Link></li>
							  </div>
							  <div className="col-lg-4">
							  </div>
						  </div>
					  </div>
				  </li>
				  <li class="nav-item"> <Link class="nav-link" to="/">EDUCATION </Link> </li>
				  <li class="nav-item"><Link class="nav-link" to="/"> SOLITAIRES </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/"> GOLD COINS </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/"> COLLECTIONS </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/"> INVEST WITH US </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/"> ABOUT </Link></li>
				  {user && 
				  <div>
					  <li class="nav-item dropdown">
						  <div class="nav-link dropdown-toggle" 
							id="navbarDropdown" 
							role="button" 
							data-toggle="dropdown" 
							aria-haspopup="true" 
							aria-expanded="false"
							>
								{user.email != null ? user.email : ""}
						  </div>
						  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
							  <Link class="dropdown-item" to="/">Favourites</Link>
								<Link class="dropdown-item" to="/">Recently Viewed</Link>
								<Link to="/admin/dashboard" class="dropdown-item">Dashboard</Link>
								<div class="dropdown-divider"></div>
								<Link class="dropdown-item" onClick={logOut}>Logout</Link>
						  </div>
						</li>
				  </div>}
				  <div className="offer">
					  <li class="nav-item dropdown">
						  <div class="nav-link dropdown-toggle" 
							id="dropdownMenu" 
							role="button" 
							data-toggle="dropdown" 
							aria-haspopup="true" 
							aria-expanded="false"
							>
								Offers
						  </div>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenu">
							  <Link class="dropdown-item" to="/">Favourites</Link>
								<Link class="dropdown-item" to="/">Recently Viewed</Link>
								<Link to="/admin/dashboard" class="dropdown-item">Dashboard</Link>
								<div class="dropdown-divider"></div>
								<Link class="dropdown-item" onClick={logOut}>Logout</Link>
						  </div>
						</li>
				  </div>
				  
			  </ul>
		  </div>
	  </div>
  </nav>
);
}

export default Header;