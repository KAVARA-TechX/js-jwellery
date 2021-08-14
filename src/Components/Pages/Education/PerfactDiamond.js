import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import perfact from '../../../Images/diamondPerfact.jpg';
const PerfactDiamond = () =>{
    return(
        <div>
            <HeaderCard />
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
                            <h4 className="text-center">Choose Your Perfect Diamond</h4>
                                <div className="row">
                                <div className="col-md-6">
                                    <img src={perfact} alt="4C's " />
                                </div>
                                <div className="col-md-6">
                                <p>
                                With so many unique options in precious stones, finding the perfect solitaire that matches
                                your preferences can be a task. Even though each person’s diamond hunt is unique, here are 
                                a few points to help you understand how to go about it. It is always good to start by 
                                selecting the shape of the diamond. One can always go for the popular one such as the round 
                                cut or the princess cut, in case of confusion. Next, set the carat weight. This is important 
                                as the most beautiful half-carat diamond would be a disappointment if a one-carat diamond is 
                                what the person wishes for.
                                </p>
                                </div>
                            </div>
                            <br/>
                            <h4>The 4 C's</h4>
                            <p>
                            Cut : The cut of a diamond defines the diamond's fire and brilliance, and plays an important 
                            role in the overall appearance of a diamond. A poorly cut diamond will look dull even with 
                            the excellent colour and clarity. An ideal cut is a round shaped diamond or a princess cut 
                            diamond that is cut to perfection and has excellent symmetry and excellent polish. Diamonds 
                            at Divine Solitaires are of Ex.Ex.Ex Plus cut which signifies that the solitaires possess 
                            excellent cut, excellent symmetry and excellent polish.If the selected cut is outside the set 
                            budget, one can consider making slight changes to the carat weight. A change of up to 10% is not 
                            visually detectable. <br/><br/>
                            Clarity : It is fine to make some concessions in the clarity of a diamond. Each diamond has 
                            a few blemishes and inclusions because of the condition in which they are formed. Many people 
                            opt for diamonds with a few inclusions if they are invisible to the naked eye. People who are 
                            intolerant to inclusions despite them being invisible to the naked eye can go for Very Slightly 
                            Included 2 (VSI2) stones. The most popular range is the Very Slightly Included 1 (VSI1) diamonds 
                            to Very Slightly included 2 diamonds which appears flawless, without the help of a loupe.<br/>
                            <br/>
                            Color : It is difficult to detect colour in a diamond once it is set in a ring or placed in 
                            a coloured environment. Diamond buyers prefer diamonds that are colour graded with J, K, and 
                            L. Diamonds with more facets reflect more light and tend to hide colour better than other 
                            shapes. So, consider a round shaped diamond, princess cut diamond or a modified brilliant 
                            cut diamond over other shapes if you are concerned about colour.<br/><br/>  
                            Carat : Carat refers to the weight of the diamond. One carat is equivalent to 0.20 grams. 
                            The larger the carat, the pricier the diamond, although the other "C's" can influence the 
                            final price significantly. Though not mentioned as one of the four C's, a diamond's shape 
                            plays an integral part in the selection of any diamond engagement ring.Divine Solitaires 
                            offers diamonds in four shapes: round, princess cut, oval and pear. Lastly it is critical 
                            that you have a comprehensive understanding of diamond anatomy and proportion - brilliance, 
                            dispersion and scintillation. <br/>
                            Understanding how to choose the perfect diamond, will affect 
                            how you choose your engagement ring. Before choosing your perfect engagement ring, make sure 
                            you have a comprehensive understanding of diamonds- from their structure to the 4C's.<br/>
                            <br/>
                            If following the above-mentioned step leaves one with a diamond still above the set budget, 
                            the process should be repeated with different thresholds. 
                            <br/>
                            Reduce the quality furthermore. Go for a grade as low as Slightly Included 1 diamonds. 
                            <br/>
                            One can go for the colour next. The grade can go down to J. If the diamond is expected to 
                            set up in gold, one can safely drop to grade K. 
                            <br/>Finally, reduce the cut. Go for the round cut instead of the fancy ones.
                            After all these concessions, if the diamonds are still outside the set budget, the further 
                            concessions depend on individual preferences.
                            <br/> If the desired carat weight is one, one can consider dropping the clarity to 
                            Slightly Included 2 diamonds. <br/>
                            An L-M is a perfect colour range to go for if the chosen diamond is a brilliant cut diamond 
                            under 1.50 carats and is to be set in yellow gold. <br/>
                            If the size of the diamond is the primary concern for choosing, one can go for a fair 
                            round cut or fancy shaped diamonds. <br/>
                            If the diamond is still out of budget one should consider increasing the budget or reducing 
                            the set minimum carat weight.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerfactDiamond;