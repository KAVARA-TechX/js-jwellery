import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import setting from '../../../Images/settingType.jpg';
const SettingType = ( ) =>{
    return(
<div>
<HeaderCard/>
    <Nav/>
    <div className="navigation">
        <Link to="/education" style={{marginLeft:"15%"}} >Loose Diamond</Link>
        <Link to="/education/ring-type" className="live">Diamond Rings</Link>
        <Link to="/education/choose-perfect-diamond">Choose Your Perfect Diamond Jewellery</Link>
        <Link to="/education/diamond-care" >Diamond Care</Link>
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
                    <h4 className="text-center">Diamond Setting Type</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={setting} alt="setting_type"/>
                        </div>
                        <div className="col-md-6">
                        From the cut of the diamond to its setting, it is extremely important that the ring you choose 
                        does not just suit the person but is also a reflection of their personality. Some like the extra 
                        sparkle, some fall for the simple elegance and some choose their diamonds for the perfect cut and 
                        ring settings. The ring settings also differ in accordance with the ring type and affect your 
                        solitaire ring budget. Here are a few common types of ring settings:
                        </div>
                    </div>
                    <p>
                    Prongs :<br/> Prongs are the most traditional and classic type of engagement ring setting. This type 
                    of setting allows maximum visibility of the diamond and minimum metal is visible which increases the 
                    brilliance of the diamond as more light is able to pass through it.  
                    </p>
                    <p>
                    Bezel:<br/> From promise rings to engagement rings with names inscribed, this setting is generally 
                    used to provide extra durability to the ring. This simple and sober setting completely surrounds 
                    the diamond and keeps it intact. White gold or platinum can be used to give the diamond more 
                    prominence. This type of setting is a versatile one as it can accommodate all sizes of a diamond.
                    </p>
                    <p>
                    Tension :<br/> This is a type of setting that is currently in vogue when it comes to engagement rings. 
                    The use of actual when it comes to engagement rings. The use of actual prongs is eliminated by suspending t
                    he diamond between the two ends of the bands since the prong-like setting which holds the diamond is very 
                    strong.
                    </p>
                    <p>
                    Channel: <br/>A ‘channel’ is created in this ring setting by using two metal bands and in this channel 
                    small diamonds are embedded. The diamonds are secure because they are embedded between the metal. This 
                    ring setting type makes it easy for people who do intensive work with their hands.
                    </p>
                    <p>
                    Twist: <br/>A complex type of setting which is currently trending in engagement ring for couples is 
                    the twist setting in which the metal band is twisted to create a crisscross effect and the diamond is 
                    mounted on top of it.
                    </p>
                    <p>
                    Bar: <br/>A very classy and bold kind of setting, the bar setting is the type in which two metal bars 
                    hold the diamond in between. This helps showcase the diamond beautifully and focuses on the magnificence 
                    of the diamond.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    );

}

export default SettingType;