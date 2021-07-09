import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import conflictFree from '../../../Images/diamondConflict.jpg';
const Sourcing = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div class="navigation">
                <Link to="/education"className="live" style={{marginLeft:"15%"}} >Loose Diamond</Link>
                <Link to="/education/ring-type">Diamond Rings</Link>
                <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
                <Link to="/education/diamond-care" >Diamond Care</Link>
            </div>
            <div class="main">
                <div className="container">
                    <div className="row">       
                        <div className=" col-md-3" >
                        <ul className="sideNav">
                            <li><Link to="/education">4C's</Link></li>
                            <li><Link to="/education/shapes">Shapes</Link></li>
                            <li><Link to="/education/anatomy">Anatomy</Link></li>
                            <li><Link to="/education/certification">Certification</Link></li>
                            <li><Link to="/education/perfect-diamond">Perfact Diamond</Link></li>
                            <li><Link to="/education/sourcing">Ethical Sorucing Diamonds</Link></li>
                            <li><Link to="/education/conflict-free">Conflict Free Diamonds</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-9">
                            <img src={conflictFree} alt="Diamond Sourcing"/>
                            <br/>
                            <p>
                            Diamonds that are sold to finance a war and create conflict against the legitimate governments 
                            are called blood or conflict diamonds. These conflicts also include inhumane practices such as 
                            torture and slavery to extract diamonds. Conflict-free diamonds, however, are those that are in 
                            no way related to the terror and malpractices by the opposite groups. These diamonds are ethically 
                            sourced and mined.
                            </p>
                            <p>
                            In response to this malpractice, the diamond industry along with the United Nations created 
                            the World Diamond Council which created the Kimberley process for the ethical sourcing of 
                            diamonds. It brought to attention the destructive effects of unethical sourcing of diamonds 
                            worldwide.
                            </p>
                            <p>
                            The Kimberley Process Certification Scheme (KPCS) was established in 2003 to prevent conflict 
                            diamonds from entering the diamond market. The Kimberley Process made it possible for the 
                            conflict-free solitaire diamonds to make up the majority of the diamond market and to be 
                            available to various designers for use.
                            </p>
                            <p>
                            Divine Solitaires along with the global diamond industry is intolerant towards conflict 
                            diamonds. In keeping with the Kimberley process which tracks diamonds from the mine to 
                            the market, Divine Solitaires purchases diamonds from the largest and the most respected 
                            suppliers. The business is strictly limited to those who adhere and enforce the standards 
                            established by the Kimberley process. All the Divine Solitaires diamonds are warranted to 
                            be conflict-free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Sourcing;