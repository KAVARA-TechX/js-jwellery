import React from 'react';
import {Carousel} from 'react-bootstrap';
import Tran from '../../Images/review.png';
const ReviewSlider = () =>{
    return(
        <Carousel className="mt-5 mb-5">
            <Carousel.Item>
                <div className="card text-center">
                    <div className="card body">
                    <img src={Tran} alt="reviewimage" className="center-block w-30"></img>
                    <q>I was mesmerised by the <br/>quality and details of the ring</q>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card">
                    <div className="card body text-center">
                    <img src={Tran} alt="reviewimage" className="center-block w-30"></img>
                    <q>I was mesmerised by the <br/>quality and details of the ring</q>
                    </div>
                </div>
            </Carousel.Item>    
        </Carousel>
    );
}

export default ReviewSlider;