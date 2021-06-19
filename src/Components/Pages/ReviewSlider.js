import React from 'react';
import {Carousel} from 'react-bootstrap';
const ReviewSlider = () =>{
    return(
        <div className="pt-5 pb-5">
            <h4 className="d-flex justify-content-center pb-3">Customer Says</h4>
            <Carousel indicators={false}>
            <Carousel.Item>
            <div className="d-flex justify-content-center">
                    <div class="card review-card ">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                        class="card-img-top rounded-circle" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Product Review</h5>
                          <p class="card-text review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <div class="card review-card ">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                        class="card-img-top rounded-circle" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Product Review</h5>
                          <p class="card-text review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>     
        </Carousel>
        </div>
    );
}

export default ReviewSlider;