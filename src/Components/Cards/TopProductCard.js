import React from 'react';
import Tran from '../../Images/tran.png';
import {Carousel} from 'react-bootstrap';
const TopProduct = () =>{
    return(
      <Carousel>
        <Carousel.Item>
        <div className="container pt-2 pb-2">
        <div className="row">
          <div className="col-sm-3 topProduct">
            <div className="card ml-3 products-center" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body products-center">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
        </div>
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container pt-2 pb-2">
        <div className="row">
        <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3">
            <div className="card ml-3" style={{width:"10rem",borderRadius:"50%"}}>
              <div className="card-body">
                <img src={Tran} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5">Tranquility</h5>
            <p>truth comes with all our products</p>
            <h6 className="pl-5">Rs.8,000.00</h6>
          </div>
        </div>
      </div>
        </Carousel.Item>
      </Carousel>

    )
}

export default TopProduct;