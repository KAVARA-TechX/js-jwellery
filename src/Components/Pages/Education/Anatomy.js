import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import anatomy from '../../../Images/diamondAnatomy.jpg';
import {Link} from 'react-router-dom';
const Anatomy = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div class="navigation">
                <Link to="/education"className="live centered-item" style={{marginLeft:"15%"}} >Loose Diamond</Link>
                <Link to="/education/ring-type">Diamond Rings</Link>
                <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
                <Link to="/education/diamond-care" className="centered-item">Diamond Care</Link>
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
                            <h4 className="text-center">Diamond Anatomy</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={anatomy} alt="diamond-anatomy"/>
                                </div>
                                <div className="col-md-6">
                                    All the diamonds are unique in their own way but share the same basic structure. 
                                    The structural features of a diamond determine its brilliance, proportions, and 
                                    scintillation. Each part of its basic structure has a particular name. Understanding 
                                    how these parts contribute to the diamond as a whole help one to choose the perfect 
                                    stone. The basic structure of a diamond consists of eight main parts namely table, 
                                    diameter, crown, girdle, pavilion, depth, crown, and culet. Here’s a brief 
                                    description of each part.
                                </div>
                            </div>
                            <p>
                            Diameter: If the width of the polished stone is measured from end-to-end, 
                            the diameter of the diamond is obtained.<br/>
                            Table: The table is the largest polished surface on the top of the diamond.<br/>
                            Crown: It is the top part of a diamond that extends from the table to the girdle.<br/>
                            Girdle: Girdle is the part of the diamond where the crown and pavilion of the diamond 
                            meet.<br/>
                            Culet: Culet is the small and pointed facet at the bottom of the diamond.<br/>
                            Pavilion: The bottom part of the diamond that extends from the girdle to the culet.<br/>
                            It is important to understand the anatomy of solitaire diamonds before choosing the right 
                            one to appreciate the intricacies of the diamond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Anatomy;