import React from 'react';
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';
import {Link} from 'react-router-dom';
import education from '../../../Images/diamondEducation.jpg';
import color from '../../../Images/diamondColor.jpg';
import clarity from '../../../Images/diamondClarity.jpg';
import Carat from '../../../Images/diamondCarat.jpg';
const Education = () =>{
return(
<div>
    <HeaderCard/>
    <Nav/>
    <div class="navigation">
        <Link to="/education"className="active" style={{marginLeft:"15%"}} >Loose Diamond</Link>
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
                <h4 className="text-center">Diamond Cut</h4>
                <div className="row">
                    <div className="col-md-6">
                        <img src={education} style={{marginTop:'60px'}} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                        <p>
                            A well-cut diamond is not just about its shape but also the effectiveness of the diamond 
                            to reflect the light back into the eyes of a person viewing it. A poorly-cut diamond appears
                            lifeless whereas a well-cut one has a brilliant, fiery, and scintillating appearance. Diamond 
                            cuts determine the quality of a diamond to a great extent. An excellent cut of diamonds also 
                            makes them appear larger than other diamonds of the same carat weight. An ideal cu diamond is 
                            cut to ideal proportions, angles, and has excellent polish and symmetry ratings. Its ideal 
                            proportions make sure that it refracts light to produce the required fire and brilliance. Facets 
                            with perfect symmetry only come with immense expertise in diamond cuts, which is what 
                            Divine Solitaires assures! All the diamonds from Divine Solitaires are Ex.Ex.Ex. 
                            Plus cut diamonds which refer to excellent cut, excellent polis and excellent symmetry.
                        </p>
                    </div>
                </div>
                <h4 className="text-center">Diamond Cut</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                        Diamonds can be colourless or may have a slight yellow tint. However, the diamonds with the least 
                        amount of colour is preferred while shopping for diamonds. A diamond colour is graded on a scale 
                        of D to Z, however Divine Solitaires provides diamonds that are graded on a diamond color grade 
                        D to K and are divided into five broad categories- colourless, nearly colourless, faint, very light,
                        and light. Diamonds that lie between D-F on the colour scale display no colour and is the best diamond
                        color the colourless diamonds D to F are the rarest and the most valuable diamonds than the others on
                        the scale. Diamonds lying between the range G to H appear nearly colourless when observed from the 
                        face-up position but display a little amount of colour when observed from the face-down position 
                        against a perfectly white background. Diamonds in the faint yellow K category display a slight hint 
                        of colour when viewed from the face-up position. The K category diamonds are a great option for those 
                        who are not sensitive to colour.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={color} style={{marginTop:'60px'}} alt="diamond_color"/> 
                    </div>
                </div>
                <h4 className="text-center">Diamond Clarity</h4>
                <div className="row">
                <div className="col-md-6">
                        <img src={clarity} style={{marginTop:'20px'}} alt="diamond_color"/> 
                    </div>
                    <div className="col-md-6">
                        <p>
                        Since diamonds are formed inside the earth under extreme pressure and heat, they have small 
                        imperfections (called ‘birthmarks’), which doesn’t come as a surprise. Every diamond comes 
                        with inclusions (imperfections on the inside) and blemishes (imperfections on the surface). 
                        The degree to which these imperfections are present on or inside the diamond refers to diamond 
                        clarity.The diamonds that are devoid of such flaws are considered to be of high quality, which 
                        ranges from F (Flawless) to I (Included). Diamonds from Divine Solitaires are superior-quality 
                        diamonds laying the range IF to S12.
                        </p>
                    </div>
                </div>
                <h4 className="text-center">Diamond Carat</h4>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                        Carat is a term that refers to the weight of a diamond. The word carat originates from the word 
                        ‘carob seeds’, a term that was used to measure the weight of the diamonds prior to the twentieth 
                        century. Today, a carat weighs just about 0.2 grams which is just about the weight of a single 
                        paper clip. A carat is completely unrelated to the word ‘Karat’ which sounds quite similar to it 
                        and refers to the purity of gold. The size of a diamond is directly proportional to the diamond 
                        carat weight. However, the weight of a solitaire diamond increases at a greater rate than its size.
                        For example, a one-carat diamond measures approximately 6.5 mm in width, a diamond that weighs twice 
                        as it measures only 8.2 mm wide. Since a diamond that is big in size is rare, it is expected to be 
                        expensive. A single two-carat diamond is more expensive than two one-carat diamonds together. 
                        This implies that the cost of a diamond increases with its size. So as the carat weight increases, you 
                        typically pay more not only in total but also on a pay-per-carat basis. When you buy diamonds you 
                        should choose the carat weight not just on the basis of the size but also the cut grade, as it 
                        majorly affects the diamond quality. The cost and quality of diamonds depend on these 4Cs. One should 
                        consider all these factors before judging the right value of any diamond.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={Carat} alt="diamond_color"/> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
);
}

export default Education;
