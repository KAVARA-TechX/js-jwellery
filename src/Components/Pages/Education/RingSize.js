import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import ringSize1 from '../../../Images/ring-size1.png';
import ringSize2 from '../../../Images/ring-size2.png';
const RingSize = () =>{
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
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={ringSize1} alt="ring-size-chart"/>
                                </div>
                                <div className="col-md-6">
                                    <img src={ringSize2} alt="ring-chart-size"/>
                                </div>
                            </div>
                            <p>
                                Comfort is the most basic requirement of any commodity. Similarly, your wedding ring 
                                should perfectly fit your finger as it is going to be on your finger for most of the time. 
                                The diamond ring design will lose its charm completely if the ring sizing is not perfect. 
                                Hence, here are some tips on ring sizing. A perfectly fitting wedding ring or engagement 
                                rin is one that slides over the knuckle easily but won’t fall off your finger. Considering 
                                how precious a diamond wedding ring is, it is extremely important to choose a ring that fits 
                                perfectly well. However, tips on ring sizes for men are different from tips on ring sizes for 
                                women. Ring sizing is not a cumbersome process as one might expect it to be. To do so you could 
                                either measure your ring size online or get a plastic mould made which is equivalent to the actual 
                                engagement ring or wedding ring to ensure that your ring fits you well.
                            </p>
                            <p>
                                Before you begin taking the measurement of your ring, pick the finger that you want to 
                                wear your diamond ring on. It is possible that the fingers on your dominant hand might be 
                                larger than those on your non-dominant hand. Cold weather might cause your fingers to shrink, 
                                while heat or water retention might cause swelling of fingers. Hence, these precautions should 
                                be taken care of before you measure your solitaire ring size. It is suggested that you measure 
                                your fingers at the end of the day as the size of your finger changes due to the weather and the 
                                time of the day. It is also essential to measure your fingers more than 5 times to get an accurate 
                                result. If in case, your finger size falls between two sizes that are available, choose the diamond 
                                ring of larger size. You can also refer to certain size charts that are available on the internet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RingSize;