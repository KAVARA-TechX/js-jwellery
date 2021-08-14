import React from 'react';
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';
import {Link} from 'react-router-dom';
import shapes from '../../../Images/diamonShapes.jpg';
import brilliantCut from '../../../Images/diamondBrialiant.jpg';
import ovalCut from '../../../Images/diamondOval.jpg';
import princessCut from '../../../Images/diamondPrincess.jpg';
import pearCut from '../../../Images/diamondPear.jpg';
import emeraldCut from '../../../Images/diamondEmerald.jpg';
import asscherCut from '../../../Images/diamondAsscher.jpg';
import cushionCut from '../../../Images/diamondCusion.jpg';
import heartDiamondCut from '../../../Images/diamondHeart.jpg';
import marquiseCut from '../../../Images/diamondMarquise.jpg';
import radiantCut from '../../../Images/diamondMarquise.jpg';
const Shapes = () =>{
return(
<div>
    <HeaderCard/>
    <Nav/>
    <div class="navigation">
        <Link to="/education"className="live centered-item" style={{marginLeft:"15%"}} >Loose Diamond</Link>
        <Link to="/education/ring-type" className="centered-item">Diamond Rings</Link>
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
                <h4 className="text-center">Diamond Cut</h4>
                <div className="row">
                    <div className="col-md-6">
                        <img src={shapes} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                        <p>
                        A diamond’s shape refers to its physical form. It is clearly not a part of the 4Cs but is one of 
                        the most important factors when choosing a diamond. The distinction between the diamond cut and 
                        the diamond shape might be confusing at first. The shape of the diamond is its physical appearance 
                        but its cut refers to its ability to reflect light, its facets, and angles. The most common shapes 
                        of diamond include asscher, brilliant, cushion cut, emerald cut, heart, marquise, oval, pear, 
                        princess cut, and radiant cut.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={brilliantCut} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                    <img src={ovalCut} alt="diamond_education"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Brilliant Cut</h4> 
                        <p>
                        A brilliant cut diamond is a round cut diamond and is by far the most popular diamond shape. 
                        It is superior to other shapes in terms of proper reflection of light, maximising the brightness 
                        potential, etc. due to its cone shape.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center">Oval</h4>
                        <p>
                        The oval cut is a modified version of the round-cut diamond and is made for those who want the 
                        brilliance of the round-shaped diamond in an unusual shape. Oval cut diamonds create an illusion 
                        of length and elongation.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={princessCut} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                    <img src={pearCut} alt="diamond_education"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Princess Cut</h4> 
                        <p>
                        The princess cut is the fanciest and the most popular diamond shape amongst all others. Like 
                        round shape diamonds, princess cut diamonds are compatible with any style of rings. The princess 
                        cut diamonds are exquisitely shaped in order to get top brilliance.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center">Pear Diamonds Cut</h4>
                        <p>
                        A pear-shaped diamond is a combination of the round and marquise cut diamond with a tapered point 
                        at one end. A pear-shaped diamond should be perfect in terms of symmetry. The point of the tapered 
                        end should match with the apex of the rounded end. The diamond contains 58 facets, allowing light 
                        to pass through it in the same way as the round shaped diamond.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={emeraldCut} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                    <img src={asscherCut} alt="diamond_education"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Emerald Cut</h4> 
                        <p>
                        This is a popular style known for its precision and beauty. The emerald cut is named so because 
                        it is cut in a shape that was originally a style for emeralds. It might not possess the brilliance 
                        of the diamonds cut in a kite or triangular shape but its pure ice-like clarity makes up for the 
                        brilliance. This style of cut is also called the step-cut.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center">The Asscher Cut</h4>
                        <p>
                        The asscher cut is also called the “Square Emerald-Cut”. It has cropped corners because of which 
                        it appears to be octagonal at first glance. Asscher cut diamonds are bright, shiny and clear in 
                        appearance but allow the inclusions to be visible to the naked eye, if there are any.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={cushionCut} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                    <img src={heartDiamondCut} alt="diamond_education"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Cushion Cut</h4> 
                        <p>
                        The cushion cut is a combination of two shapes, square and the round cut. It is called a cushion 
                        cut because of its rounded corners and its resemblance to a pillow. It gives the diamond an 
                        antique look and a romantic appeal. The cushion cut diamond contains 58 facets.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center">Heart diamonds</h4>
                        <p>
                        It is a modified version of a brilliant cut diamond only with a cleft at the top. A heart-shaped 
                        diamond is unique and a symbol of love, popular in forms of solitaire pendants and diamond rings. 
                        Symmetry is an essential factor while selecting a heart-shaped diamond. The division between the 
                        two lobes should be evident. If you want a bigger stone, avoid going for heart-shaped diamonds that 
                        weigh less than 0.50 carat as they appear small and even smaller when set in prongs.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={marquiseCut} alt="diamond_education"/> 
                    </div>
                    <div className="col-md-6">
                    <img src={radiantCut} alt="diamond_education"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="text-center">Marquise Shape</h4> 
                        <p>
                        It is a modified brilliant cut diamond, long and narrow in shape considered ideal for engagement 
                        rings. Its long and narrow boat-like shape creates an illusion of it being greater in size. 
                        Marquise-shaped diamonds have one of the largest surface areas, which is a great option when one 
                        wants to magnify the appearance of a diamond.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-center">Radiant Cut</h4>
                        <p>
                        A radiant-cut diamond is square shaped but still has a complete brilliant cut facet pattern on 
                        its crown and pavilion.It combines the round cut and the emerald cut to create an uconventional 
                        and brilliant diamond shape.
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

export default Shapes;
