import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import cert from '../../../Images/diamondCertification.jpg';
import cert1 from '../../../Images/diamondCertification1.jpg';
const Certification = () =>{
    return(
        <div>
            <Nav/>
            <HeaderCard />
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
                            <h4 className="text-center">Diamond Certification</h4>
                            <img src={cert} alt="diamond certification"/>
                            <p>
                            A diamond certificate (most commonly from labs GIA, IGI, SGL etc.) is a document you 
                            receive from an objective third-party lab that certifies a diamond with all its 
                            characteristics. A diamond certificate is what should be reviewed when considering 
                            the purchase of loose diamonds.The lab report or the certificate is issued by a grading 
                            body that mentions its main characteristics such as the cut, clarity, length and width, 
                            etc. A body of trained professionals observe, evaluate, and grade the diamonds for approving 
                            the certification. However, each diamond grading entity scrutinises the diamonds in different 
                            ways and a significant difference in the grades is expected. There are several laboratories 
                            that grade diamonds and provide the certification; however, it is necessary to know which ones 
                            are reliable and trustworthy. For utmost excellence and purity, diamonds from Divine Solitaires 
                            are graded and are pre-certified by the top international laboratories such as GIA 
                            (Gemological Institute of America) and IGI (International Gemological Institute). At Divine 
                            Solitaires you can be assured to receive GIA certification for all diamonds that are 0.30 
                            pointer and above. Apart from this, we at Divine Solitaires issue our own Quality Guarantee 
                            Certificate for each diamond purchased. Each solitaire diamond at Divine Solitaires is graded 
                            through stringent Quality Control (QC) measures and checked on 123 parameters, unlike most 
                            international labs that grade diamonds on just 40 parameters.
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={cert1} alt="diamond certifaction by gla" />
                                </div>
                                <div className="col-md-6">
                                GIA : Gemological Institute of America <br/>
                                SGL : Solitaire Gemmological Laboratories
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certification;