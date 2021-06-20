import React from 'react';
import {Carousel} from 'react-bootstrap';
const ReviewSlider = () =>{
    return(
        <div className="pt-5 pb-5">
            <h3 className="d-flex justify-content-center pb-3">Customer Says</h3>
            <Carousel indicators={false}>
            <Carousel.Item>
            <div className="d-flex justify-content-center">
                    <div class="card review-card ">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" 
                        class="card-img-top rounded-circle" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Impeccable service from start to finish</h5>
                          <p class="card-text review-text text-justify">They always went the extra mile to ensure I was 
                          Completely happy.The end <br/>product was even better than I could have ever imagined
                          .I would recommand <br/>everyone to work with them!</p>
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
                          <h5 class="card-title">Impeccable service from start to finish</h5>
                          <p class="card-text review-text text-justify">They always went the extra mile to ensure I was 
                          Completely happy.The end <br/>product was even better than I could have ever imagined
                          .I would recommand <br/>everyone to work with them!</p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>     
        </Carousel>
        </div>
    );
}

export default ReviewSlider;