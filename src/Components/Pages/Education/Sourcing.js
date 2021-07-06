import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import sourcing from '../../../Images/diamondSourcing.jpg';
const Sourcing = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div class="navigation">
            <Link to="/education"className="active" style={{marginLeft:"15%"}} >Loose Diamond</Link>
                <Link to="/education">Diamond Rings</Link>
                <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
                <Link to="/education/diamond-care" >Diamond Care</Link>
            </div>
            <div class="main">
                <div className="container">
                    <div className="row">       
                        <div className=" col-md-3" >
                            <ul className="sideNav">
                                <li><Link>4C's</Link></li>
                                <li><Link>Shapes</Link></li>
                                <li><Link>Anatomy</Link></li>
                                <li><Link>Certification</Link></li>
                                <li><Link>Perfact Diamond</Link></li>
                                <li><Link>Ethical Sorucing Diamonds</Link></li>
                                <li><Link>Conflict Free Diamonds</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <img src={sourcing} alt="Diamond Sourcing"/>
                            <p>
                            While selecting your favourite diamond shape, the ideal cut with excellent clarity, etc., 
                            it is also important for you to know that the diamonds you choose are ethically sourced. 
                            But before understanding what the term means, let’s have a look at what conflict-free 
                            diamonds are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Sourcing;