import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import GoldDiamondRing from '../../../Images/goldring1.png';
import GoldDiamondRing1 from '../../../Images/goldring2.png';
import GoldDiamondRing2 from '../../../Images/goldring3.png';
import GoldDiamondRing3 from '../../../Images/goldring4.png';
const RingMetal = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="navigation">
                <Link to="/education" style={{marginLeft:"15%"}} className="centered-item">Loose Diamond</Link>
                <Link to="/education/ring-type" className="live centered-item">Diamond Rings</Link>
                <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
                <Link to="/education/diamond-care" className="centered-item">Diamond Care</Link>
            </div>
            <div className="main">
                <div className="container">
                    <div className="row">       
                        <div className=" col-md-3" >
                            <ul className="sideNav">
                                <li><Link to="/education/ring-type">Ring Types</Link></li>
                                <li><Link to="/education/setting-type">Setting Type</Link></li>
                                <li><Link to="/education/ring-size">Ring Sizing</Link></li>
                                <li><Link to="/education/metal">Metal</Link></li>
                                <li><Link to="/education/budget">Budget</Link></li>
                                <li><Link to="/education/perfact-diamond-ring">Perfact Diamond</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <h4 className="text-center">Metal</h4>
                            <p>
                                Metals can be considered as the soul of the engagement ring as they form the base for the 
                                entire engagement ring. Choosing the right metal is very crucial as it holds the diamond and 
                                forms the base of your engagement ring. Deciding the metal you want for your diamond is quite 
                                easy once you know about the basic ring metals. Varied over ranges of white gold, yellow gold, 
                                and platinum, one can choose any metal as preferred or whatever fits the budget. The various types 
                                xof metals available for engagement rings are:
                            </p>
                            <div className="row">
                            <p className="text-center"><b>YELLOW GOLD ENGAGEMENT RINGS</b></p>
                                <div className="col-md-8">
                                    Everyone is familiar with the traditional yellow gold engagement rings. The most 
                                    common, yet a very lavish and appealing metal, yellow is the naturally occurring colour 
                                    of gold and is typically alloyed with silver and copper in fine jewellery. Flexible and 
                                    enduring, yellow gold is highly used in engagement rings due to its lasting beauty as it 
                                    does not corrode, tarnish or rust. The higher the karat of the gold, the softer the yellow 
                                    gold engagement ring is. One can easily identify authentic gold as it carries a ‘k’ or ‘karat’ 
                                    mark on it. To keep the luster of gold everlasting, the ring should be cleaned with mild soap 
                                    and warm water.
                                </div>
                                <div className="col-md-4">
                                    <img src={GoldDiamondRing} alt="golden ring"/>
                                </div>
                            </div>
                            <div className="row">
                            <p className="text-center"><b>WHITE GOLD ENGAGEMENT RINGS</b></p>
                                <div className="col-md-4">
                                    <img src={GoldDiamondRing1} alt="white golden ring"/>
                                </div>
                                <div className="col-md-8">
                                    Bearing similarity to platinum diamond engagement rings in its looks, white gold is 
                                    the most preferred option as the metal for engagement rings. White gold engagement 
                                    rings are available in two variations; 1) 14K which consists of 55% gold and the rest 
                                    is composed of other metals (zinc, nickel etc.) and 2) 18K white gold which consists of 
                                    75% gold. Cheaper than platinum, white gold is more preferred in engagement rings as it 
                                    complements the sparkle of solitaire ring designs perfectly. Made with an alloy of nickel 
                                    and zinc, white gold is coated with rhodium to keep the shine intact. However, radiant white 
                                    gold requires thorough care to maintain the sparkle of your single diamond ring. The ring should 
                                    be kept in a cushioned and scratch-proof box. It is also recommended keeping the ring away from 
                                    harmful corrosives like bleach, ammonia, and chlorine.
                                </div>
                            </div>
                            <div className="row">
                            <p className="text-center"><b>PLATINUM ENGAGEMENT RINGS</b></p>
                                <div className="col-md-8">
                                    The most valuable and finest piece of metal that complements diamond ring designs perfectly, platinum is 
                                    found in limited quantities. Almost the similar tint as diamonds, platinum helps increase the brilliance 
                                    and sparkle of the diamond engagement ring. ar tint as diamonds, platinum helps increase the brilliance 
                                    and sparkle of the diamond engagement ring. The metal comes with numerous advantages like resilience and 
                                    strength, it can withstand stress and platinum of purity grade between 90-95% and does not cause any allergic 
                                    reactions. Due to its durability and magnificence, platinum has become a popular choice fo engagement rings in 
                                    recent times. Metals such as white gold which are alloyed to get a platinum diamond ring colour turn yellow after 
                                    a certain period. However, platinum is mostly made of 95% pure platinum which makes it more preferable. Platinum 
                                    rings are also preferred as wedding bands.
                                </div>
                                <div className="col-md-4">
                                    <img src={GoldDiamondRing2} alt="platinum ring"/>
                                </div>
                            </div>
                            <div className="row">
                            <p className="text-center"><b>WHITE GOLD ENGAGEMENT RINGS</b></p>
                                <div className="col-md-4">
                                    <img src={GoldDiamondRing3} alt="white golden ring"/>
                                </div>
                                <div className="col-md-8">
                                Some people prefer a pinkish colour to go with their solitaires. Hence, they prefer an 
                                alloy of copper and gold which gives the metal a warm red colour and is known as rose gold. 
                                The shade depends upon the amount of copper used in the alloy. Preferred more by women, common 
                                rose gold diamond rings for women are composed of 75% gold and 25% copper.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RingMetal;