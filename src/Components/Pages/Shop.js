import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Slider, Checkbox,Radio } from "antd";
import Nav from '../Nav/Header';
import HeaderCard from "../Cards/HeaderCard";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import ring from '../../Images/goldring3.png';
import SubMenu from "antd/lib/menu/SubMenu";
const Shop = () =>{
    let dispatch = useDispatch();
    const [price,setPrice] = useState("");
    const handlePrice = (e) =>{
        setPrice(e.target.value);
        console.log(price);
    }

    const handleJewelType = (e) =>{
        console.log("Choosen jewellery",e.target.value);
    }

    const handleProduct = (e)=>{
        console.log("Choosen Product",e.target.value);
    }
    const handleGender = (e)=>{
        console.log("gender",e.target.value);
    }
    const handleDiscount = (e) =>{
        console.log("Discount",e.target.value);
    }
    const handleWeight = (e)=>{
        console.log("Choosen Weight",e.target.value);
    }
    const handleColor = (e) =>{
        console.log("Choosen Color",e.target.value);
    }
    const handleType = (e) =>{
        console.log("Choosen type",e.target.value);
    }
    const handlePurity = (e) =>{
        console.log("Choosen purity",e.target.value);
    }
    const handleOccation = (e) =>{
        console.log("Choosen Occation",e.target.value);
    }
    const hadnleMetal = (e)=>{
        console.log("choosen Metal",e.target.value);
    }
    const handleProductWidth = (e) =>{
        console.log("Choosen Width",e.target.value);
    }
    const handleClarity = (e) =>{
        console.log("Choosen clarity",e.target.value);
    }
    const handleCollection = (e) =>{
        console.log("Choosen Collection",e.target.value);
    }
    const handleBeltSize = (e) =>{
        console.log("Choosen Collection",e.target.value);
    }
    const handlePHeight = (e)=>{
        console.log("Choosen Pendent Height",e.target.value);
    }
    const handlePWidth = (e)=>{
        console.log("Choosen pendent Width",e.target.value);
    }
    const handleEHeight = (e)=>{
        console.log("Choosen Earring Height",e.target.value);
    }
    const handleEWidth = (e)=>{
        console.log("Choosen Earring Width",e.target.value);
    }
    const handleCommunity = (e)=>{
        console.log("Choosen Community",e.target.value);
    }
    const handleTryOn = (e)=>{
        console.log("Choosen Try On",e.target.value);
    }

    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 pt-2">
                    <h4>Search/Filter</h4>
                    <hr />
                    <Menu  mode="inline">
                        <SubMenu key="1" 
                        title="Price">
                            <div>
                                <Checkbox
                                    onChange={handlePrice}
                                    className="pb-2 pl-4 pr-4"
                                    value={"sds"}
                                    name="price"
                                >
                                    Less than 5000
                                </Checkbox>
                                <br/>
                                <Checkbox
                                  onChange={handlePrice}
                                  className="pb-2 pl-4 pr-4"
                                  value={"sds"}
                                  name="price"
                                >
                                Between 5000 and 10000
                                </Checkbox>
                                <br/>
                                <Checkbox
                                  onChange={handlePrice}
                                  className="pb-2 pl-4 pr-4"
                                  value={"sds"}
                                  name="price"
                                >
                                Between 10000 and 20000
                                </Checkbox>
                                <br/>
                                <Checkbox
                                  onChange={handlePrice}
                                  className="pb-2 pl-4 pr-4"
                                  value={"sds"}
                                  name="price"
                                >
                                Between 20000 and 30000
                                </Checkbox>
                                <br/>
                                <Checkbox
                                  onChange={handlePrice}
                                  className="pb-2 pl-4 pr-4"
                                  value={"sds"}
                                  name="price"
                                >
                                Between 30000 and 40000
                                </Checkbox>
                                <br/>
                                <Checkbox
                                  onChange={handlePrice}
                                  className="pb-2 pl-4 pr-4"
                                  value={"sds"}
                                  name="price"
                                >
                                Between 40000 and 50000
                                </Checkbox>
                                <br/>
                                <Checkbox
                                  onChange={handlePrice}
                                  className="pb-2 pl-4 pr-4"
                                  value={"sds"}
                                  name="price"
                                >
                                Between 50000 and 60000
                                </Checkbox>
                            </div>
                        </SubMenu>
                        <SubMenu key="2" title="Jewellery Type">
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="color stones"
                                  name="jewellery type"
                                >
                                Color Stones
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Color Stones and pearls"
                                  name="jewellery type"
                                >
                                Color Stones and pearls
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Diamond Jewellery"
                                  name="jewellery type"
                                >
                                Diamond Jewellery
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="GemStone Jewellery"
                                  name="jewellery type"
                                >
                                GemStone Jewellery
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Jewellery with Gemstones"
                                  name="jewellery type"
                                >
                                Jewellery with Gemstones
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Plain Gold Jewellery"
                                  name="jewellery type"
                                >
                                Plain Gold Jewellery
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Plain Jewellery with stones"
                                  name="jewellery type"
                                >
                                Plain Jewellery with stones
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Platinum Jewellery"
                                  name="jewellery type"
                                >
                                Platinum Jewellery
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Silver Jewellery"
                                  name="jewellery type"
                                >
                                Silver Jewellery
                        </Checkbox>
                        <br/>
                        <Checkbox
                                  onChange={handleJewelType}
                                  className="pb-2 pl-4 pr-4"
                                  value="Silver Coins"
                                  name="jewellery type"
                                >
                                Silver Coins
                        </Checkbox>
                        </SubMenu>
                        <SubMenu title="Product" key="3">
                            <div className="contained">
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Anklet"
                            name="product"
                            >
                                Anklet
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Bangle"
                            name="product"
                            >
                                Bangle
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Bracelet"
                            name="product"
                            >
                                Bracelet
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Brooch"
                            name="product"
                            >
                                Brooch
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Chain"
                            name="product"
                            >
                                Chain
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Charms"
                            name="product"
                            >
                                Charms
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Drop Earrings"
                            name="product"
                            >
                                Drop Earrings
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Earring"
                            name="product"
                            >
                                Earring
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Earrings"
                            name="product"
                            >
                                Earrings
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Finger ring"
                            name="product"
                            >
                                Finger ring
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Gift Card"
                            name="product"
                            >
                                Gift Card
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Gold Coin"
                            name="product"
                            >
                                Gold Coin
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Haram"
                            name="product"
                            >
                                Haram
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Hoop Earrings"
                            name="product"
                            >
                                Hoop Earrings
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Jewellery Set"
                            name="product"
                            >
                                Jewellery Set
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Kada"
                            name="product"
                            >
                                Kada
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Maang Tikka"
                            name="product"
                            >
                               Maang Tikka
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Mangalsutra"
                            name="product"
                            >
                               Mangalsutra
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Mangalsutra Set"
                            name="product"
                            >
                               Mangalsutra Set
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Neckwear Set"
                            name="product"
                            >
                               Neckwear Set
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Nose pin"
                            name="product"
                            >
                               Nose pin
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Others"
                            name="product"
                            >
                               Others
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Pendent"
                            name="product"
                            >
                               Pendent
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Pendent and Earrings Set"
                            name="product"
                            >
                               Pendent and Earrings Set
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Pendent with Chain"
                            name="product"
                            >
                               Pendent with Chain
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Pendent with Chain and Earring Set"
                            name="product"
                            >
                               Pendent with Chain and Earring Set
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Silver Coin"
                            name="product"
                            >
                               Silver Coin
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Stud Earrings"
                            name="product"
                            >
                               Stud Earrings
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Toe ring"
                            name="product"
                            >
                               Toe Ring
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProduct}
                            className="pb-2 pl-4 pr-4"
                            value="Waist belt"
                            name="product"
                            >
                               Waist belt
                            </Checkbox>
                            </div>
                        </SubMenu>
                        <SubMenu key="4" title="Gender">
                            <Checkbox 
                            onChange={handleGender}
                            className="pb-2 pl-4 pr-4"
                            value="Kids"
                            name="gender"
                            >
                                Kids
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleGender}
                            className="pb-2 pl-4 pr-4"
                            value="Ladies"
                            name="gender"
                            >
                                Ladies
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleGender}
                            className="pb-2 pl-4 pr-4"
                            value="Men"
                            name="gender"
                            >
                                Men
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleGender}
                            className="pb-2 pl-4 pr-4"
                            value="Unisex"
                            name="gender"
                            >
                                Unisex
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleGender}
                            className="pb-2 pl-4 pr-4"
                            value="Women"
                            name="gender"
                            >
                                Women
                            </Checkbox>
                            
                        </SubMenu>
                        <SubMenu title="Discounts" key="5">
                            <Checkbox onChange={handleDiscount}
                            className="pb-2 pl-4 pr-4"
                            value="10"
                            name="Discount"
                            >
                                10 % Off on Making Charges
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleDiscount}
                            className="pb-2 pl-4 pr-4"
                            value="15"
                            name="Discount"
                            >
                                20 % Off on Making Charges
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleDiscount}
                            className="pb-2 pl-4 pr-4"
                            value="20"
                            name="Discount"
                            >
                                20 % Off on Making Charges
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleDiscount}
                            className="pb-2 pl-4 pr-4"
                            value="10"
                            name="Discount"
                            >
                                Flat 10 % Off
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleDiscount}
                            className="pb-2 pl-4 pr-4"
                            value="10"
                            name="Discount"
                            >
                                Flat 15 % Off
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleDiscount}
                            className="pb-2 pl-4 pr-4"
                            value="10"
                            name="Discount"
                            >
                                Flat 2.50 % Off
                            </Checkbox>
                        </SubMenu>
                        <SubMenu key="6" title="Coin Weight">

                            <div className="contained">
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="2"
                                name="weight"
                                >
                                    2 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="4"
                                name="weight"
                                >
                                    4 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="5"
                                name="weight"
                                >
                                    5 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="8"
                                name="weight"
                                >
                                    8 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="10"
                                name="weight"
                                >
                                    10 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="25"
                                name="weight"
                                >
                                    25 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="30"
                                name="weight"
                                >
                                    30 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="50"
                                name="weight"
                                >
                                    50 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="100"
                                name="weight"
                                >
                                    100 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="500"
                                name="weight"
                                >
                                    500 gram
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleWeight}
                                className="pb-2 pl-4 pr-4"
                                value="1000"
                                name="weight"
                                >
                                    1000 gram
                                </Checkbox>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="7" title="Metal Color">
                            <div className="contained">
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Bi Color"
                            >
                                Bi Color
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Dual Color"
                            >
                                Dual Color
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Pink"
                            >
                                Pink
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Rose"
                            >
                                Rose
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Rose and White"
                            >
                                Rose and White
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Rose Gold"
                            >
                                Rose Gold
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Silver"
                            >
                                Silver
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Tri Color"
                            >
                                Tri Color
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="White"
                            >
                                White
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="White and Rose"
                            >
                                White and Rose
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Yellow"
                            >
                                Yellow
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Yellow and Rose"
                            >
                                Yellow and Rose
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Yellow and White"
                            >
                                Yellow and White
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleColor}
                            className="pb-2 pl-4 pr-4"
                            name="metal-color"
                            value="Yellow,White and Rose"
                            >
                                Yellow,White and Rose
                            </Checkbox>
                            <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="8" title="Type">
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Drops"
                            className="pb-2 pl-4 pr-4"
                            >
                                Drops
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Hoops"
                            className="pb-2 pl-4 pr-4"
                            >
                                Hoops
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Jhumka"
                            className="pb-2 pl-4 pr-4"
                            >
                                Jhumka
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Others"
                            className="pb-2 pl-4 pr-4"
                            >
                                Others
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Plain"
                            className="pb-2 pl-4 pr-4"
                            >
                                Plain
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Plain Gold"
                            className="pb-2 pl-4 pr-4"
                            >
                                Plain Gold
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Plain Platinum"
                            className="pb-2 pl-4 pr-4"
                            >
                                Plain Platinum
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Studded"
                            className="pb-2 pl-4 pr-4"
                            >
                                Studded
                            </Checkbox>
                            <br/>
                            <Checkbox 
                            onChange={handleType}
                            name="type"
                            value="Studs"
                            className="pb-2 pl-4 pr-4"
                            >
                                Studs
                            </Checkbox>
                            <br/>
                        </SubMenu>
                        <SubMenu key="9" title="Purity">
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                0.00
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="14.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                14.00
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="18.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                18.00
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="22.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                22.00
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="24.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                24.00
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="93.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                93.00
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="95.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                95.00
                            </Checkbox>
                            <br/>
                        </SubMenu>
                        <SubMenu key="10" title="Occation">
                            <div className="contained">
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Anniversary">
                                Anniversary
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Bridal Wear">
                                Bridal Wear
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Daily Wear">
                                Daily Wear
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Engagement">
                                Engagement
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Gifting">
                                Gifting
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Party bear">
                                Party bear
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Statement">
                                Statement
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Traditional Wear">
                                Traditional Wear
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Wedding">
                                Wedding
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleOccation}
                            className="pb-2 pl-4 pr-4"
                            name="occation"
                            value="Work Wear">
                                Work Wear
                            </Checkbox>
                            <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="11" title="Metal">
                            <Checkbox
                            onChange={hadnleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                Gold
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={hadnleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Platinum">
                                Platinum
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={hadnleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Silver">
                                Silver
                            </Checkbox>
                            <br/>
                        </SubMenu>
                        <SubMenu key="12" title="Product Width">
                            <div className="contained">
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="0.95"
                            >
                                0.95 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="1.55"
                            >
                                1.55 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="1.6"
                            >
                                1.6 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="1.77"
                            >
                                1.77 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="1.8"
                            >
                                1.8 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="2"
                            >
                                2 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="2.15"
                            >
                                2.15 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="3.1"
                            >
                                3.1 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="3.3"
                            >
                                3.3 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="3.5"
                            >
                                3.5 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="4.15"
                            >
                                4.15 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.02"
                            >
                                10.02 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.03"
                            >
                                10.03 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.09"
                            >
                                10.09 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.1"
                            >
                                10.1 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.15"
                            >
                                10.15 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.2"
                            >
                                10.2 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.27"
                            >
                                10.27 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.29"
                            >
                                10.29 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.3"
                            >
                                10.3 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.35"
                            >
                                10.35 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.5"
                            >
                                10.5 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.55"
                            >
                                10.55 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.6"
                            >
                                10.6 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.63"
                            >
                                10.63 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.65"
                            >
                                10.65 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.7"
                            >
                                10.7 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.75"
                            >
                                10.75 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.76"
                            >
                                10.76 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.8"
                            >
                                10.8 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.84"
                            >
                                10.84 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.85"
                            >
                                10.85 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.87"
                            >
                                10.87 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.88"
                            >
                                10.88 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.89"
                            >
                                10.89 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.9"
                            >
                                10.9 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="10.97"
                            >
                                10.97 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="100"
                            >
                                100 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="102"
                            >
                                102 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="103"
                            >
                                103 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="104"
                            >
                                104 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="105"
                            >
                                105 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="105.5"
                            >
                                105.5 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="107"
                            >
                                107 MM
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleProductWidth}
                            className="pb-2 pl-4 pr-4"
                            name="product-width"
                            value="108"
                            >
                                108 MM
                            </Checkbox>
                            <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="13" title="Diamond Clarity">
                            <div className="contained">
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="B,I1 I2"
                                >
                                    B,I1 I2
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="I1 I2"
                                >
                                    I1 I2
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="I1 I2,Mixed"
                                >
                                    I1 I2,Mixed
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="I1"
                                >
                                    I1
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="I2"
                                >
                                    I2
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="Mixed"
                                >
                                    Mixed
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="SI1"
                                >
                                    SI1
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="SI2"
                                >
                                    SI2
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="SI1,SI2"
                                >
                                    SI1,SI2
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="VS"
                                >
                                    VS
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="VS,VS1"
                                >
                                    VS,VS1
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="VS2"
                                >
                                    VS2
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="VVS"
                                >
                                    VVS
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="VVS1"
                                >
                                    VVS1
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handleClarity}
                                name="diamond clarity"
                                className="pb-2 pl-4 pr-4"
                                value="VVS2"
                                >
                                    VVS2
                                </Checkbox>
                                <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="14" title="Collection">
                            <div className="contained">
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Aaheli">
                                    Aaheli
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Aarambh">
                                    Aarambh
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Ahalya">
                                    Ahalya
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Akshayam">
                                    Akshayam
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="All rounders">
                                    All Rounders
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Alphabet pendents">
                                    Alphabet pendents
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Best Sellers">
                                    Best Sellers
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Charms">
                                    Charms
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Classic">
                                    Classic
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Disney">
                                    Disney
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Diwali">
                                    Diwali
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Engagement">
                                    Engagement
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handleCollection}
                                className="pb-2 pl-4 pr-4"
                                name="collection"
                                value="Lavanyam">
                                    Lavanyam
                                </Checkbox>
                                <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="15" title="Waist Belt Size">
                            <Checkbox onChange={handleBeltSize}
                            className="pb-2 pl-4 pr-4"
                            name="belt size"
                            value="A Size">
                                A Size
                            </Checkbox>
                        </SubMenu>
                        <SubMenu key="16" title="Pendent Height">
                            <div className="contained">
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="11">
                                    11 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="14">
                                    14 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="16">
                                    16 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="17">
                                    17 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="18">
                                    18 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="11">
                                    19 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="20">
                                    20 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="22">
                                    22 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="23">
                                    23 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="24">
                                    24 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="25">
                                    25 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="26">
                                    26 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="27">
                                    27 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="28">
                                    28 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="29">
                                    29 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="30">
                                    30 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="31">
                                    31 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="32">
                                    32 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="33">
                                    33 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="34">
                                    34 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="35">
                                    35 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="36">
                                    36 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="37">
                                    37 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="38">
                                    38 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="39">
                                    39 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="40">
                                    40 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="41">
                                    41 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="42">
                                    42 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="43">
                                    43 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="44">
                                    44 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="45">
                                    45 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="46">
                                    46 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="47">
                                    47 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="49">
                                    49 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="51">
                                    51 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="52">
                                    52 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="54">
                                    54 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="55">
                                    55 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="56">
                                    56 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="57">
                                    57 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="67">
                                    58 MM
                                </Checkbox>
                                <br/>
                                <Checkbox onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent height"
                                value="68">
                                    68 MM
                                </Checkbox>
                                <br/>     
                            </div>
                        </SubMenu>
                        <SubMenu key="17" title="Pendent Width">
                            <div className="contained">
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="6">
                                    6 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="8">
                                    8 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="9">
                                    9 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="11">
                                    11 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="12">
                                    12 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="13">
                                    13 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="14">
                                    14 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="15">
                                    15 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="16">
                                    16 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="17">
                                    17 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="18">
                                    18 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="19">
                                    19 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="20">
                                    20 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="21">
                                    21 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="22">
                                    22 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="23">
                                    23 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="24">
                                    24 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="25">
                                    25 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="26">
                                    26 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="27">
                                    27 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="28">
                                    28 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="29">
                                    29 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="30">
                                    30 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="32">
                                    32 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="33">
                                    33 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="34">
                                    34 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="37">
                                    37 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="40">
                                    40 MM
                                </Checkbox>
                                <br/>   
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="42">
                                    42 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="43">
                                    43 MM
                                </Checkbox>
                                <br/>
                                <Checkbox
                                onChange={handlePWidth}
                                className="pb-2 pl-4 pr-4"
                                name="pendent-width"
                                value="44">
                                    44 MM
                                </Checkbox>
                                <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="18" title="Earring Height">
                            <div className="contained">
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEHeight}
                                name="earring height"
                                value="10">
                                    10 MM
                                </Checkbox>
                            </div>
                        </SubMenu>
                        <SubMenu key="19" title="Earring Width">
                            <div className="contained">
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEWidth}
                                name="earring width"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEWidth}
                                name="earring width"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEWidth}
                                name="earring width"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEWidth}
                                name="earring width"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEWidth}
                                name="earring width"
                                value="10">
                                    10 MM
                                </Checkbox>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleEWidth}
                                name="earring width"
                                value="10">
                                    10 MM
                                </Checkbox>
                            </div>
                        </SubMenu>
                        <SubMenu key="20" title="Community">
                            <div className="contained">
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Bengali">
                                    Bengali
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Bihari">
                                    Bihari
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Contempory">
                                    Gujrati
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Indian bridal">
                                    Indial Bridal
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Kannada">
                                    Kannada
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Maharastriyan">
                                    Maharastriyan
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Malyali">
                                    Malyali
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Marwari">
                                    Marwari
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="North Indian">
                                    North Indian
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Odia">
                                    Odia
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Punjabi">
                                    Punjabi
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Rajasthani">
                                    Rajasthani
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="South Indian">
                                    South Indian
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Tamil">
                                    Tamil
                                </Checkbox>
                                <br/>
                                <Checkbox className="pb-2 pl-4 pr-4"
                                onChange={handleCommunity}
                                name="community"
                                value="Telegu">
                                    Telegu
                                </Checkbox>
                                <br/>
                            </div>
                        </SubMenu>
                        <SubMenu key="21" title="Virtual Try On">
                            <Checkbox 
                            onnChange={handleTryOn}
                            className="pb-2 pl-4 pr-4"
                            name="virtual try on"
                            value="Yes">
                                Yes
                            </Checkbox>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src={ring} alt="product"/>
                                </div>
                                <div className="card-body">
                                    <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                                    <p>Modern diamond ring</p>
                                    <button className="button btn-block">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={ring} alt="product"/>
                            </div>
                            <div className="card-body">
                                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                                <p>Modern diamond ring</p>
                                <button className="button btn-block">Buy Now</button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={ring} alt="product"/>
                            </div>
                            <div className="card-body">
                                <span>₹ 21,393  <strike>₹ 22,994</strike></span> 
                                <p>Modern diamond ring</p>
                                <button className="button btn-block">Buy Now</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="text-center">
                    <p>You are viewing 24 out of 13372 products</p>
                        <button className="button">SEE MORE PRODUCTS</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Shop;