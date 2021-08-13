import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { HeartOutlined, ShoppingCartOutlined,ShareAltOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import StarRating from "react-star-ratings";
import TopProductCard from "./TopProductCard";
import HeaderCard from "./HeaderCard";
import Header from "../Nav/Header";


const { TabPane } = Tabs;

// this is childrend component of Product page
const SingleProductCard = ({ product, onStarClick, star }) => {
  const [tooltip, setTooltip] = useState("Click to add");

  // redux
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  // router
  let history = useHistory();

  const { title, images, description, _id } = product;

  const handleCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
      toast.success("Product successfully added in cart");
    }
  };

  

  return (
      <div>
      <HeaderCard/>
      <Header/>
<div className="container mt-5">
        <div className="row">
        <div className="col-md-5">
        {images && images.length ? (
          <Carousel  autoPlay infiniteLoop className="slider" >
            {images && images.map((i) => <img  src={i.url} key={i.public_id} alt="Item_Image" />)}
          </Carousel>
        ) : (
          ""
        )}
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-6" >
          <h5>{product.title}</h5>
          <StarRating
            rating={4.3}
            starRatedColor = "red"
            starDimension = "16px"
            starSpacing = "2px"
            ediiting={false}/>(4)
            <br/>
            <h5><b>PRICE &#x20B9; {product.price}</b></h5>
            <span>(Incl. all taxces) <a href="#details">price breakUp</a></span>
            <p>*Weight and Price may vary subject to the stock available.</p>
            <p>{product.description}
             <HeartOutlined className="float-right" 
             style={{fontSize:'24px'}}/>
             <ShareAltOutlined className="float-right" 
             style={{fontSize:'24px'}}/>
             </p>
            <a href="#details">Product details</a>
            <div className="row">
                 <div className="col-md-6 col-sm-6">
                     <p>Net Qty.</p>
                     <p className="text-center" 
                     style={{padding:'6px',border:'1px solid black'}}>1</p>
                 </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <button className="button">BuyNow</button>
                </div>
                <div className="col-md-6 col-sm-6">
                {/* <Tooltip title={tooltip}><button className="button" onClick={handleCart}>Add To Cart</button></Tooltip> */}
                <button className="button" onClick={handleCart}>Add To Cart</button>
                </div>
                {/* <RatingModal>
             <StarRating 
             name={"ProductId"}
             numberOfStars={5}
             rating={star}
             changeRating={(newrating,name)=>setStar(newrating)}
             isSelectable={true}
             starRatedColor="red"
             />
             </RatingModal> */}
            </div>
        </div>
    </div>
    <div id="details">
                        <h4 className="text-center">Product Details</h4>
                        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Product Specs" key="1">
          <div className="row">
                <div className="col-md-3">
                    <p>GEM STONE 1</p>
                    <p>PURITY</p>
                    <p>GENDER</p>
                    <p>JEWELLERY TYPE</p>
                    <p>COLLECTION</p>
                    <p>HEIGHT</p>
                </div>
                <div className="col-md-3">
                    <p>Emerald|1|Bezel|Button</p>
                    <p>18.00</p>
                    <p>Women</p>
                    <p>Plain Jewellery with Stones</p>
                    <p>Open Polki</p>
                    <p>22 mm</p>
                </div>
                <div className="col-md-3">
                    <p>GEM STONE 2</p>
                    <p>BRAND</p>
                    <p>METAL</p>
                    <p>PRODUCT</p>
                    <p>METAL COLOR</p>
                    <p>PRODUCT WIDTH</p>
                </div>
                <div className="col-md-3">
                    <p>Diamond Chakri-Polki|18|Bezel|Button</p>
                    <p>Tanishq</p>
                    <p>Gold</p>
                    <p>Pendant</p>
                    <p>Yellow</p>
                    <p>12 mm</p>
                </div>
            </div>
          </TabPane>
          <TabPane tab="Price Breakup" key="2" >
              <div className="row">
                  <div className="col-md-2">
                      Component
                    </div>
                    <div className="col-md-2">
                        Gold Rate(18KT)
                    </div>
                    <div className="col-md-2">
                        Weight (g)
                    </div>
                    <div className="col-md-2">
                        Value
                    </div>
                    <div className="col-md-2">
                        Discount
                    </div>
                    <div className="col-md-2">
                        Final Value
                    </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-md-2">
                     <p>18KT Plain Gold</p>
                     <p>Stone Detail</p>
                     <p>Making Charges  </p>
                    </div>
                    <div className="col-md-2">
                        <p>&#x20B9; 3866.72/g</p>
                        <p>-</p>
                        <p>-</p>
                    </div>
                    <div className="col-md-2">
                        <p>1.692 g</p>
                        <p>0.64 ct / 0.1280 g</p>
                        <p>-</p>
                    </div>
                    <div className="col-md-2">
                        <p>&#x20B9; 6542.49</p>
                        <p>&#x20B9; 3584.00</p>
                        <p>&#x20B9; 2420.72</p>
                    </div>
                    <div className="col-md-2">
                        <p>-</p>
                        <p>-</p>
                        <p>-</p>
                    </div>
                    <div className="col-md-2">
                        <p>-</p>
                        <p>-</p>
                        <p>-</p>
                    </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-md-2">
                      <p>Sub Total</p>
                      <br/>
                      <p>GST</p>
                      <p><b>Grand Total</b></p>
                    </div>
                    <div className="col-md-2">
                        <p>-</p>
                        <br/>
                        <p>-</p>
                      <p><b>-</b></p>

                    </div>
                    <div className="col-md-2">
                        <p>1.820 g <br/>(Gross weight)</p>
                        <p>-</p>
                      <p><b>-</b></p>
                    </div>
                    <div className="col-md-2">
                        <p>&#x20B9; 12547.21</p><br/>
                        <p>&#x20B9; 376.42</p>
                        <p><b>-</b></p>
                    </div>
                    <div className="col-md-2">
                        <p>-</p><br/>
                        <p>-</p>
                        <p><b>-</b></p>
                    </div>
                    <div className="col-md-2">
                        <p>-</p><br/>
                        <p>-</p>
                        <p><b>&#x20B9; 12924</b></p>
                        <p>(MRP Incl. of all taxes)</p>
                    </div>
              </div>
              <hr/>

          </TabPane>
          <TabPane tab="Description" key="3">
            The Image just for product enhancement.Actual product may differ from the above showm image.
          </TabPane>
          <TabPane tab="Review" key="4">
              <Tabs>
                  <TabPane tab="REVIEW" key="1.1">
                  <div className="text-center">
                    <button className="button">BE THE FIRST TO WRITE A REVIEW</button>
                    </div>
                  </TabPane>
                  <TabPane tab="QUESTIONS" key="1.2">
                  <div className="text-center">
                  <button className="button">BE THE FIRST TO ASK A QUESTION</button>
                  </div>
                  </TabPane>
              </Tabs>
            
          </TabPane>
          <TabPane tab="More Info" key="5">
            <p>Titan Company Limited,Jewellery Division 29,Sipcot 
            Industrial Complex,Hosur - 635126, Krishnagiri District,Tamil Nadu.</p> 
            <p><b>Country Of Origin - </b> India</p>
            <p><b>Imported By - </b> Titan Company Limited,Jewellery Division 29
            ,Sipcot Industrial Complex,Hosur - 635126, Krishnagiri District,Tamil Nadu.</p>
            <p><b>Net Quantity: </b>1 N</p>
            <p>Contact customer care executive at the manufacturing 
                address above or call us at 1800-266-0123. Email us at customercare@titan.co.in</p>
          </TabPane>
          
        </Tabs>
                    </div>
                    <div className="pb-5">
                    <h4 className="text-center mt-5">Customers Who Viewed This Also Viewed</h4>
                 <TopProductCard/>   
                    </div>
</div>
</div>
  );
};

export default SingleProductCard;
