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
	<nav class="navbar navbar-expand-lg navbar-dark pt-2 pb-2 mt-1 mb-1" style={{backgroundColor : '#fff'}}>
	<div class="container">
		  <button class="navbar-toggler" type="button" 
			 data-bs-toggle="collapse" 
			 data-bs-target="#main_nav"  
			 aria-expanded="false" 
			 aria-label="Toggle navigation"
		  >
			<span class="navbar-toggler-icon" style={{backgroundColor:'#add8e6'}}>
			</span>
		  </button>
		  <div class="collapse navbar-collapse" id="main_nav">
			  <ul class="navbar-nav " >
				  <li class="nav-item dropdown has-megamenu" >
					  <div class="nav-link dropdown-toggle" style={{cursor:'pointer'}} data-bs-toggle="dropdown">JEWELLERY </div>
					  <div class="dropdown-menu megamenu" role="menu" style={{backgroundColor:"#fff"}}>
						  <div class="row g-3">
							  <div class="col-lg-3 col-6">
								  <div class="col-megamenu">
									  <h6 class="title header">Category</h6>
									  <div class="row g-3">
									  <div class="col-lg-6">
									  <ul class="list-unstyled nav-lis">
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Ring</Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Bracelet</Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Chain</Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Earings</Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Gold Coins</Link></li>
									  	  </div>
									  </ul>
									  </div>
									  <div class="col-lg-6">
									  <ul class="list-unstyled">
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Mangalsutra</Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckless</Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Neckwear</Link></li>
									  </div>
									  <div className="Drop-Down-Cate">	  
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Nose pin</Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/" className=""><img src={Ring} alt="JS SOLITAIRE" style={{width:'40%'}} />Pendents</Link></li>
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
											<li><Link to="/" className="">&lt;4000</Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">5k-10k</Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">10k-20k</Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">20k-30k</Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">30k-40k</Link></li>
										</div>
											<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">40k-40k</Link></li>
										</div>
											<div className="Drop-Down-Cate">
											<li><Link to="/" className="">&gt;40k</Link></li>
										</div>
										</ul>
									</div> 
							  </div>
							  <div class="col-lg-3 col-6">
									<div class="col-megamenu">
										<h6 class="title title header">Delivery time</h6>
										<ul class="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="" >1-7 DAYS</Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">7-14 DAYS</Link></li>
										</div>	
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">14-28 DAYS</Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">ABOVE 10 DAYS</Link></li>
										</div>
										</ul>
									</div> 
							  </div>
							  <div class="col-lg-3 col-6">
									<div class="col-megamenu">
										<h6 class="title header">Expert Guidance</h6>
										<ul class="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">Metals</Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">Ring size guide</Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">Design basics</Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">What is bespoke</Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/" className="">The crafting process</Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">How ring are priced</Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/" className="">Ethical soursing</Link></li>
										</div>
										</ul>
									</div> 
							  </div>
						  </div>
					  </div>
				  </li>
				  <li class="nav-item"> <Link class="nav-link" to="/">EDUCATION </Link> </li>
				  <li class="nav-item"><Link class="nav-link" to="/"> SOLITAIRES </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/"> GOLD COINS </Link></li>
				  <li class="nav-item"><Link class="nav-link" to="/"> COLLECTIONS </Link></li>
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
								OFFERS
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