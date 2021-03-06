import React,{useEffect,useState} from 'react';
import Ring from "../../Images/ring2.png";
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import firebase from 'firebase';
import {useHistory} from 'react-router-dom';
import { getCouponsByCount } from '../functions/auth';
const Header = () =>{
    const dispatch = useDispatch();
	let history = useHistory();
	const {user} = useSelector((state)=>({...state}));
	const [offers,setOffers] = useState([]);
	useEffect(()=>{
		getCouponsByCount(5).then((res)=>{
            console.log(res.data);
			setOffers(res.data);
		}).catch(err=>console.log(err));
	},[]);

	const logOut = () =>{
		firebase.auth().signOut();
		dispatch({
		  type: 'LOGOUT',
		  payload:null
		}); 
		history.push('/login');
	  }
return (
	<nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor : '#fff'}}>
	<div className="container">
		  <button className="navbar-toggler" type="button" 
			 data-bs-toggle="collapse" 
			 data-bs-target="#main_nav"  
			 aria-expanded="false" 
			 aria-label="Toggle navigation"
		  >
			<span style={{color:"#add8e6"}}>
			<i class="fas fa-bars"></i>
			</span>
		  </button>
		  <div className="collapse navbar-collapse" id="main_nav">
			  <ul className="navbar-nav nav-center">
				  <li className="nav-item dropdown has-megamenu" >
					  <div className="nav-link dropdown-toggle" style={{cursor:'pointer'}} data-bs-toggle="dropdown">JEWELLERY </div>
					  <div className="dropdown-menu megamenu" role="menu" style={{backgroundColor:"#fff",marginTop:'-10px'}}>
						  <div className="row g-3">
							  <div className="col-lg-3 col-6">
								  <div className="col-megamenu">
									  <h6 className="title header"><b>Category</b></h6>
									  <div className="row g-3">
									  <div className="col-lg-6">
									  <ul className="list-unstyled nav-lis">
										  <div className="Drop-Down-Cate">
										  <li><Link to="/shop" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Ring</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/bracelet" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Bracelet</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/chain" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Chain</span></Link></li>
										  </div>
										  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/earings" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Earings</span></Link></li>
										  </div>
									  </ul>
									  </div>
									  <div className="col-lg-6">
									  <ul className="list-unstyled">
									  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/mangalsutra" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Mangalsutra</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/neckless" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Neckless</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/neckwear" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Neckwear</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">	  
										  <li><Link to="/shop/search/nose-pin" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Nose pin</span></Link></li>
									  </div>
									  <div className="Drop-Down-Cate">
										  <li><Link to="/shop/search/pendents" className=""><span><img src={Ring} alt="JS SOLITAIRE" style={{width:'30%'}} />Pendents</span></Link></li>
									  </div>
									  </ul>
									  </div>
									  </div>
								  </div> 
							  </div>
							  <div className="col-lg-3 col-6">
								  <div className="col-megamenu text-center">
										<h6 className="title header"><b>Price Band</b></h6>
										<ul className="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/3000" className=""><span>&lt;3000</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/shop/search/5k-10k" className=""><span>5k-10k</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/shop/search/10k-20k" className=""><span>10k-20k</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/shop/search/20k-30k" className=""><span>20k-30k</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">	
											<li><Link to="/shop/search/30k-40k" className=""><span>30k-40k</span></Link></li>
										</div>
											<div className="Drop-Down-Cate">	
											<li><Link to="/40k-50k" className=""><span>40k-50k</span></Link></li>
										</div>
											<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/50k" className=""><span>&gt;50k</span></Link></li>
										</div>
										</ul>
									</div> 
							  </div>
							  <div className="col-lg-3 col-6">
									<div className="col-megamenu">
										<h6 className="title title header"><b>Delivery time</b></h6>
										<ul className="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/1-7 DAYS" className="" ><span>1-7 DAYS</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/7-14 DAYS" className=""><span>7-14 DAYS</span></Link></li>
										</div>	
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/14-28 DAYS" className=""><span>14-28 DAYS</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/Above" className=""><span>ABOVE 10 DAYS</span></Link></li>
										</div>
										</ul>
									</div> 
							  </div>
							  <div className="col-lg-3 col-6">
									<div className="col-megamenu">
										<h6 className="title header"><b>Gender</b></h6>
										<ul className="list-unstyled">
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/kids" className=""><span>Kids</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/men" className=""><span>Men</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/women" className=""><span>Women</span></Link></li>
										</div>
										<div className="Drop-Down-Cate">
											<li><Link to="/shop/search/unisex" className=""><span>Unisex</span></Link></li>
										</div>
										</ul>
									</div> 
							  </div>
						  </div>
					  </div>
				  </li>
				  <li className="nav-item"><Link className="nav-link" to="/shop/solitaires"> <span>SOLITAIRES</span> </Link></li>
				  <li className="nav-item"><Link className="nav-link" to="/shop/coins"> <span>COINS</span> </Link></li>
				  <li className="nav-item"><Link className="nav-link" to="/shop/collections"> <span>COLLECTIONS</span> </Link></li>
				  <li className="nav-item"> <Link className="nav-link" to="/education"><span>EDUCATION</span> </Link> </li>
				  <li className="nav-item"><Link className="nav-link" to="/About-us"> <span>KNOW THE BRAND</span> </Link></li>
				  {user && 
				  <div>
					  <li className="nav-item dropdown">
						  <div className="nav-link dropdown-toggle" 
							id="navbarDropdown" 
							role="button"
							data-toggle="dropdown" 
							aria-haspopup="true" 
							aria-expanded="false"
							>
								{user.name != null ? user.name : ""}
						  </div>
						  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
							  <Link className="dropdown-item" to="/">Favourites</Link>
								<Link className="dropdown-item" to="/">Recently Viewed</Link>
								<Link to="/admin/dashboard" className="dropdown-item">Dashboard</Link>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" onClick={logOut}>Logout</a>
						  </div>
						</li>
				  </div>}
				  <div className="offer">
					  <li className="nav-item dropdown">
						  <div className="nav-link dropdown-toggle" 
							id="dropdownMenu" 
							role="button" 
							data-toggle="dropdown" 
							aria-haspopup="true" 
							aria-expanded="false"
							>
								<span>OFFERS</span>
						  </div>
						  <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenu" >
							  {offers.map((offer)=>(
								  <div key={offer._id}>
									  <Link className="dropdown-item" to="/"><b>{offer.code}</b>,{offer.description}</Link></div>
							  ))}
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