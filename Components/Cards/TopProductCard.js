import React from 'react';
import product1 from '../../Images/ring1.jpg';
import product2 from '../../Images/pro02.jpg';
import product3 from '../../Images/pro03.jpg';
import product4 from '../../Images/pro04.jpg';
import product5 from '../../Images/pro5.jpeg';
import product6 from '../../Images/pro06.jpg';
import product7 from '../../Images/pro07.jpg';
import product8 from '../../Images/pro08.jpg';
import {Carousel} from 'react-bootstrap';
const TopProduct = () =>{
    return(
      <div className="mt-5 mb-5">
      <Carousel indicators={true}>
        <Carousel.Item>
        <div className="container top-product">
        <div className="row">
          <div className="col-sm-3 ">
            <div className="card ml-3 products-center top-product-card" >
              <div className="card-body products-center">
                <img src={product1} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5 ">Tranquility</h5>
            <p  className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3 mHide">
            <div className="card ml-3 top-product-card">
              <div className="card-body">
                <img src={product2} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5  ">Tranquility</h5>
            <p className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3 mHide">
            <div className="card ml-3 top-product-card">
              <div className="card-body">
                <img src={product3} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5 ">Tranquility</h5>
            <p className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3 mHide">
            <div className="card ml-3 top-product-card">
              <div className="card-body">
                <img src={product4} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5 ">Tranquility</h5>
            <p className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
        </div>
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="container top-product">
        <div className="row">
          <div className="col-sm-3 ">
            <div className="card ml-3 products-center top-product-card" >
              <div className="card-body products-center">
                <img src={product8} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5 ">Tranquility</h5>
            <p  className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3 mHide">
            <div className="card ml-3 top-product-card">
              <div className="card-body">
                <img src={product6} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5  ">Tranquility</h5>
            <p className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3 mHide">
            <div className="card ml-3 top-product-card">
              <div className="card-body">
                <img src={product7} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5 ">Tranquility</h5>
            <p className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
          <div className="col-sm-3 mHide">
            <div className="card ml-3 top-product-card">
              <div className="card-body">
                <img src={product8} alt="tran" className="p-1">
                </img>
              </div>
            </div>
            
            <h5 className="pl-5 ">Tranquility</h5>
            <p className="">truth comes with all our products</p>
            <h6 className="pl-5 ">Rs.8,000.00</h6>
          </div>
        </div>
      </div>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default TopProduct;