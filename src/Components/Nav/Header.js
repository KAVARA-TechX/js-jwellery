import React from 'react';
import Ring from "../../Images/ring2.png";
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
	<nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor : '#fff'}}>
	<div class="container">
		  <button class="navbar-toggler" type="button" 
			 data-bs-toggle="collapse" 
			 data-bs-target="#main_nav"  
			 aria-expanded="false" 
			 aria-label="Toggle navigation"
		  >
			<span className="fas fa-bars" style={{color:"#add8e6"}}>
			</span>
		  </button>
		  <div class="collapse navbar-collapse" id="main_nav">
			  <ul class="navbar-nav nav-center">
				  <li class="nav-item dropdown has-megamenu" >
					  <div class="nav-link dropdown-toggle" style={{cursor:'pointer'}} data-bs-toggle="dropdown">JEWELLERY </div>
					  <div class="dropdown-menu megamenu" role="menu" style={{backgroundColor:"#fff",marginTop:'-10px'}}>
						  <div class="row g-3">
							  <div class="col-lg-3 col-6">
								  <div class="col-megamenu">
									  <h6 class="title header">Category</h6>
									  <div class="row g-3">
									  <div class="col-lg-6">
									  <ul class="list-unstyled nav-lis">
										  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/single-product" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Ring</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Bracelet</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Chain</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Earings</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Gold Coins</span></Link></li>
									  	  </div>
									  </ul>
									  </div>
									  <div class="col-lg-6">
									  <ul class="list-unstyled">
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Mangalsutra</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Neckless</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Neckwear</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">	  
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Nose pin</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Pendents</span></Link></li>
									  </div>
									  </ul>
									  </div>
									  </div>
								  </div> 
							  </div>
							  <div class="col-lg-3 col-6">
								  <div class="col-megamenu text-center">
										<h6 class="title header">Price Band</h6>
										<ul class="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>&lt;3000</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>5k-10k</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>10k-20k</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>20k-30k</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>30k-30k</span></Link></li>
										</div>
											<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>30k-30k</span></Link></li>
										</div>
											<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>&gt;30k</span></Link></li>
										</div>
										</ul>
									</div> 
							  </div>
							  <div class="col-lg-3 col-6">
									<div class="col-megamenu">
										<h6 class="title title header">Delivery time</h6>
										<ul class="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="" ><span>1-7 DAYS</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>7-14 DAYS</span></Link></li>
										</div>	
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>14-28 DAYS</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>ABOVE 10 DAYS</span></Link></li>
										</div>
										</ul>
									</div> 
							  </div>
							  <div class="col-lg-3 col-6">
									<div class="col-megamenu">
										<h6 class="title header">Expert Guidance</h6>
										<ul class="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>Metals</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>Ring size guide</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>Design basics</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>What is bespoke</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className=""><span>The crafting process</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>How ring are priced</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className=""><span>Ethical soursing</span></Link></li>
										</div>
										</ul>
									</div> 
							  </div>
						  </div>
					  </div>
				  </li>
				  <li class="nav-item"><Link class="nav-link" to="/shop/solitaires"> <span>SOLITAIRES</span> </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/shop/coins"> <span>COINS</span> </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/shop/collections"> <span>COLLECTIONS</span> </Link></li>
				  <li class="nav-item"> <Link class="nav-link" to="/education"><span>EDUCATION</span> </Link> </li>
				  <li class="nav-item"><Link class="nav-link" to="/About-us"> <span>KNOW THE BRAND</span> </Link></li>
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
								<span>OFFERS</span>
						  </div>
						  <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenu" >
							  <Link class="dropdown-item" to="/">0% Making Charges on Diamond Jewellery</Link>
								<Link class="dropdown-item" to="/">Upto 20% off on Platinum JEWELLERY</Link>
								<Link to="/admin/dashboard" class="dropdown-item">Flat 5% off on Solitaire Jewellery USE CODE-JSO05</Link>
								<div class="dropdown-divider"></div>
								<Link class="dropdown-item">Additional 50% off on your 1st installment</Link>
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