import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import rings from '../../../Images/ring-type.jpg';
import diamondring1 from '../../../Images/diamond-ring1.png';
import diamondring2 from '../../../Images/diamond-ring2.png';
import diamondring3 from '../../../Images/diamond-ring3.png';
import diamondring4 from '../../../Images/diamond-ring4.png';
import diamondring5 from '../../../Images/diamond-ring5.png';
import diamondring6 from '../../../Images/diamond-ring6.png';
import diamondring7 from '../../../Images/diamond-ring7.png';
import diamondring8 from '../../../Images/diamond-ring8.png';
import diamondring9 from '../../../Images/diamond-ring9.png';

const RingType = () =>{
    return(
        
<div>
    <HeaderCard/>
    <Nav/>
    <div className="navigation">
        <Link to="/education" style={{marginLeft:"15%"}} >Loose Diamond</Link>
        <Link to="/education/ring-type" className="active">Diamond Rings</Link>
        <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
        <Link to="/education/diamond-care" >Diamond Care</Link>
    </div>
    <div className="main">
        <div className="container">
                <div className="row">       
                    <div className=" col-md-3" >
                        <ul className="sideNav">
                            <li><Link>Ring Types</Link></li>
                            <li><Link>Setting Type</Link></li>
                            <li><Link>Ring Sizing</Link></li>
                            <li><Link>Metal</Link></li>
                            <li><Link>Budget</Link></li>
                            <li><Link>Perfact Diamond</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h4 className="text-center">Diamond Ring Type</h4>
                        <img src={rings} alt="dimond ring types"/>
                        “A diamond is forever.” The hardest rock on earth and undoubtedly the most beautiful stones too, 
                        it is not just another piece of jewellery to be worn at occasions. Diamonds are precious stones that 
                        add elegance to your persona with utter grace. Personifying sheer magnificence and adding charm to your 
                        personality, diamonds leave everyone awestruck. The hardest rock symbolizes the everlasting bond as the 
                        gem lasts almost forever. Divine Solitaires offers a varied range, right from engagement rings to wedding 
                        rings to choose from that are made just for you and fit your diamond ring budget as well.
                        <div className="row">
                            <div className="col-md-4">
                                <img src={diamondring1} alt="diamond ring 1"/>
                                <b>Solitaire Engagement Rings</b>
                                <p>
                                The most traditional type of engagement ring, this couple band is for those who like to 
                                keep it simple and elegant. Solitaire engagement rings consist of a single diamond mounted 
                                on the top of the ring. The solitaire ring is shaped in such a way so that the centre stone 
                                receives the entire attention. This timeless classic is generally made with narrower bands 
                                to make the diamond look large. Other variations include having thicker bands or ring guards 
                                which frame the centrepiece to make it look more prominent and distinguished.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={diamondring2} alt="diamond ring 1"/>
                                <b>Pavé Engagement Rings</b>
                                <p>
                                    Pavé engagement rings are more of diamonds and reveal less metal. These types of 
                                    engagement rings are encrusted with tiny diamonds along the metal band such that it 
                                    seems as if the entire ring is made of diamonds. The metal part is mostly not visible 
                                    as the diamonds use just beads or prongs to hold them in place. The centre stone of 
                                    this fashion ring is generally round cut or princess cut.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={diamondring3} alt="diamond ring 1"/>
                                <b>Channel Set Engagement Rings</b>
                                <p>                                    
                                    No prongs are used in channel set engagement rings. The diamonds are embedded into 
                                    channel-like grooves between two strips of metal. Available in a variety of cuts 
                                    and shapes, these embedded diamonds on the side help give the centre stone a much 
                                    more bolder look.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={diamondring4} alt="diamond ring 1"/>
                                <b>Sidestone Engagement Rings</b>
                                <p>
                                    Just like you perfectly complement your partner, the sidestone also perfectly complements 
                                    the diamond in the centre. Sidestone solitaire rings are generally flanked by two or more 
                                    smaller diamonds on either side of the central gem. The sidestones help in adding more 
                                    brilliance, make the ring more radiant and also add some extra cost to your engagement ring 
                                    budget.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={diamondring5} alt="diamond ring 1"/>
                                <b>Three Stone Engagement Rings</b>
                                <p>
                                The Three Stone Engagement or Wedding Rings is for those who like some extra bling on 
                                their hands. The centre gem is flanked by two other diamonds on each side in this type 
                                of engagement ring. The centre stone is elevated a bit higher than the other two diamonds 
                                to attract more attention. A higher quality center stone affects the couple band budget. 
                                Round cut or princess cut diamonds are preferred for the centre diamond and are also 
                                available in couple bands.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={diamondring6} alt="diamond ring 1"/>
                                <b>Tension Set Engagement Rings</b>
                                <p>                                    
                                    It is a modern and unique type of ring setting without any prongs in which the centre 
                                    diamond is held in place by physical force of the setting in such a way that the diamond 
                                    appears to be suspended or floating in the air. Just as the name suggests, it uses force 
                                    and tension of the ring to keep the diamond in place. Popular choices of diamond cuts for 
                                    these types of rings are round, princess and emerald cut.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <img src={diamondring7} alt="diamond ring 1"/>
                                <b>Halo Engagement Rings</b>
                                <p>
                                    Halo engagement rings are a type of pavé engagement rings as they involve a similar 
                                    craft. This setting features a micro-pavé setting in a halo formation around the 
                                    central gemstone. The ring’s sparkle is enhanced by the smaller diamonds around 
                                    which give it a radiant and bright look. Asscher-cut diamonds, pear-shaped and 
                                    oval diamonds are popular choices.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={diamondring8} alt="diamond ring 1"/>
                                <b>Vintage Engagement Rings</b>
                                <p>
                                    There is nothing that can ever beat a classic. Vintage rings are an epitome of 
                                    elegant artisanship and are the most desired form of engagement rings. These designs 
                                    draw inspiration from classic timeless pieces of jewellery and boast of maximum fire, 
                                    brilliance, and scintillation. In vintage rings, the centre stones are usually prong-set, 
                                    basket-set or bezel-set.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src={diamondring9} alt="diamond ring 1"/>
                                <b>Wedding Sets</b>
                                <p>                                    
                                Wedding sets usually include a matching set of engagement rings and wedding rings. 
                                The rings of the bride and groom are also coordinated to ensure a perfect and complimenting 
                                combination of the rings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
    );
}

export default RingType;
