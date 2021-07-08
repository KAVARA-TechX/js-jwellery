import React from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import {Link} from 'react-router-dom';
import ringTypes from '../../../Images/ring-type.jpg';
import jewel from '../../../Images/jewel.png';
import jewel1 from '../../../Images/jewel1.png';
import jewel2 from '../../../Images/jewel2.png';

const PerfactJewellery = () =>{
return(
    <div>
        <HeaderCard/>
        <Nav/>
        <div class="navigation">
            <Link to="/education" style={{marginLeft:"15%"}} >Loose Diamond</Link>
            <Link to="/education/ring-type">Diamond Rings</Link>
            <Link to="/education/choose-perfect-diamond" className="active">Choose Your Perfect Diamond Jewellery</Link>
            <Link to="/education/diamond-care" >Diamond Care</Link>
        </div>
        <div class="main">
        <div className="container">    
        <img src={ringTypes} alt="Types of Rings"/>
        <p>
        Purchasing diamond jewellery is always a special and memorable event. It is important that the chosen piece is 
        perfectly selected and carefully decided upon. Thus, Divine Solitaires is committed to providing its customers 
        with all the necessary advice and education on diamonds, enabling them to effectively choose diamond jewellery 
        from a diverse solitaire diamond collection which includes diamond studs, diamond pendants, diamond bangles, 
        diamond necklaces, diamond bracelets, diamond earrings and diamond tanmaniya. So let's take a look at some of 
        our most popular diamond jewellery and how to select solitaire diamond jewellery:
        </p>
        <div className="row">
            <div className="col-md-6">
            <p className='text-center'><b >DIAMOND STUDS</b></p>
            <p>
            Diamond earrings are one of the best gifts to give to someone special or to treat yourself to. They come 
            in a variety of designs and one of the first things to consider while buying diamond stud earrings is the 
            shape of your face. Princess cut diamonds go perfectly with broad faces while round cut diamonds are best 
            suited for women with narrow faces. Also consider your skin tone when choosing the metal to mount the 
            diamond on. White metals like white gold and platinum complement a lighter skin tone while yellow gold 
            suits the a dusky skin tone.
            </p>
            </div>
            <div className="col-md-6">
                <img src={jewel} alt="earings"/>
            </div>
        </div>
        <div className="row">
            
        <div className="col-md-6">
                <img src={jewel1} alt="Pendants"/>
            </div>
            <div className="col-md-6">
            <p className='text-center'><b >DIAMOND PENDANTS</b></p>
            <p>
            Diamond pendants are subtle yet always make a sparkling statement. Diamond pendants are subtle yet always 
            make a sparkling statement. These are perfect for both formal and social settings. The first thing to 
            consider while choosing a diamond pendant is the size of the necklace. Always first try out necklaces of 
            different sizes to see what length suits you. The style of the pendant is another important thing to note; 
            you can choose a design that is subtle and classic or a modernistic style that has a more striking and bold 
            pattern. It is possible that both kinds of designs might complement your personality! The metal on which the 
            stone will be mounted needs to be chosen properly – coloured diamonds suit yellow and rose gold better while 
            colourless diamonds look pristine on white metals like white gold. Pair a diamond pendant with a solitaire 
            ring and glam up your look!
            </p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
            <p className='text-center'><b>DIAMOND BANGLES</b></p>
            <p>
            Diamond bangles make a shimmering statement and come in an incredible variety. The first thing to consider 
            when you go to choose diamond bangles is their size. Bangles should fit you such that they can move along 
            your wrists and not cut into your skin. However, a very loose bangle will be uncomfortable since it’ll keep 
            slipping off your wrist. Next, it is essential to select the number of diamonds on your solitaire diamond 
            bangle. Some bangles are studded with diamonds and shimmer brightly while others have only a few diamonds 
            and create a very subtle look. If you want more diamonds on your bangle, it is best to select smaller ones. 
            Buying diamond jewellery is a special moment. Divine Solitaires provides a varied range of jewellery including 
            diamond tanmaniya, diamond necklaces and diamond bracelets and also provides all the education and information 
            to ensure that your selected solitaire jewellery makes the right impression.
            </p>
            </div>
            <div className="col-md-6">
                <img src={jewel2} alt="bangles"/>
            </div>
        </div>
    </div>
</div>
        
    </div>
);
}

export default PerfactJewellery;