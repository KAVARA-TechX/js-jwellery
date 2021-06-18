import React from 'react';
import {Carousel} from 'react-bootstrap';
import Tran from '../../Images/review.png';
const ReviewSlider = () =>{
    return(
        <div className="pt-5 pb-5">
            <h4 className="d-flex justify-content-center pb-3" style={{color:'#364993'}}>Customer Says</h4>
            <Carousel indicators={false}>
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <div class="card pt-5">
                        <div class="avatar mx-auto white">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                            class="rounded-circle"
                            alt="woman avatar" />
                        </div>
                        <div class="card-body">
                            <h4 class="text-center" style={{color:'#364993'}}>Anna Doe</h4>
                            <hr/>
                            <span>
                                <i class="fas fa-quote-left"></i>
                                <span style={{color:'#364993'}} className="ml-2 mr-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
                                </span>
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <div class="card pt-5">
                        <div class="avatar mx-auto white">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                            class="rounded-circle"
                            alt="woman avatar" />
                        </div>
                        <div class="card-body">
                            <h4 class="text-center" style={{color:'#364993'}}>Anna Doe</h4>
                            <hr/>
                            <span>
                                <i class="fas fa-quote-left"></i>
                                <span style={{color:'#364993'}} className="ml-2 mr-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci
                                </span>
                                <i class="fas fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Carousel.Item>     
        </Carousel>
        </div>
    );
}

export default ReviewSlider;