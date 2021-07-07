import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import Care from '../../../Images/diamondCare.jpg';
const DiamondCare = () =>{
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="navigation">
                <Link to="/education" style={{marginLeft:"15%"}} >Loose Diamond</Link>
                <Link to="/education">Diamond Rings</Link>
                <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
                <Link to="/education/diamond-care" className="active">Diamond Care</Link>
            </div>
            <div className="main">
                <div className="container">
                    <h4 className="text-center">Diamond Care</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Care} alt="dimonds"/>
                        </div>
                        <div className="col-md-6">
                        <p>
                        The word diamond is derived from the Greek word ‘adamao’ which means invincible. 
                        The hardest metal on Earth, diamonds are truly one of the most beautiful natural resources. 
                        They are also considered to be a symbol of love as most of the engagement rings contain at
                        least one diamond. They are also used as jewellery since they add extra appeal to your personality 
                        and give you a bold look. Also referred to as a woman’s best friend, diamonds are surely a must-have 
                        in the accessories compartment of a lady. More than just a piece of jewellery, diamonds also have an 
                        emotional connect with some people. However, all beautiful and precious things come with a price. 
                        Maintaining a diamond can be a cumbersome task, considering it costs a hefty amount to get a single 
                        one-carat diamond. The three important steps to care for your diamond are to clean, insure and track.
                        </p>
                        </div>
                        <p>
                        Although diamond is the hardest (metal) rock on earth, it is not indestructible. Being natural 
                        magnets to grease and dirt, it is not easy to keep diamonds clean. . Even the oil from your 
                        fingers might adhere to the diamond's surface and affect its shine and brilliance. It is 
                        suggested to clean your gem at least once in two weeks. A simple way of doing so is to soak the 
                        stone in a mixture of water and a mild cleaning solution for a minute or two. A clean and new 
                        toothbrush reserved only to clean the solitaire can be used to remove the remaining dirt after 
                        the gem is soaked in the solution. However, it is necessary to use the toothbrush gently because 
                        there might be some fragile settings like older prongs in antique jewellery which cause more harm 
                        if scrubbed vigorously. Rinse your diamond with water and dry it with a clean cloth afterwards. 
                        Harmful solutions like chlorine bleach should always be avoided to Clean your solitaire as it might 
                        damage the metal or diamond settings. To add some extra bling on your diamond, you can also soak your 
                        gem in a solution of window cleaners. Toothpicks can be used to remove the dirt stuck between the prongs 
                        of the jewellery, but be extra careful not to make any scratches to the precious stone. Since diamonds are 
                        the hardest material on earth, only a diamond can cause scratches on another one. Hence, it is advisable to 
                        store each and every diamond jewellery separately.
                        </p>
                        <p>
                        Divine Solitaires provides you with an extremely significant feature like no other. 
                        It helps you track your solitaire. With Divine Solitaires, you can track your diamond’s journey 
                        and know more about it. Not just that but you can also track the current relevant pricing of your 
                        purchased solitaire. To track your solitaire, all you have to do is download the Divine Solitaires 
                        app, choose the track option and enter the UID code of your diamond.
                        </p>
                        <p>
                        Another way of caring for your expensive jewel is to get it insured. It is necessary to insure your diamond because 
                        diamond insurance helps you protect your precious gem from any mishap. In the event of any loss or theft, insurance 
                        might just help you from losing all your savings. As a consumer, it is also necessary for you to know everything 
                        about your insurance and what all it covers. Be aware of the appraisal reports of your insurance policy. Also, 
                        find out if your jewellery is covered at the full replacement cost when you insure your diamond. Hence, it is 
                        essential to insure your diamond. Divine Solitaires realizes this necessity and provides you with a one-year free 
                        insurance policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiamondCare;