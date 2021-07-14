import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu,Checkbox,Pagination } from "antd";
import Nav from '../Nav/Header';
import HeaderCard from "../Cards/HeaderCard";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import ring from '../../Images/goldring3.png';
import SubMenu from "antd/lib/menu/SubMenu";
import ProductCard from "../Cards/ProductCard";
import {Link} from 'react-router-dom';
const Shop = () =>{
    let dispatch = useDispatch();
    const [price,setPrice] = useState("");
    const [page,setPage] = useState(1);
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
    const handleColor = (e) =>{
        console.log("Choosen Color",e.target.value);
    }
    const handleType = (e) =>{
        console.log("Choosen type",e.target.value);
    }
    const handlePurity = (e) =>{
        console.log("Choosen purity",e.target.value);
    }
    const hadnleMetal = (e)=>{
        console.log("choosen Metal",e.target.value);
    }
    const handleClarity = (e) =>{
        console.log("Choosen clarity",e.target.value);
    }
    const handleCollection = (e) =>{
        console.log("Choosen Collection",e.target.value);
    }
    const handleTryOn = (e)=>{
        console.log("Choosen Try On",e.target.value);
    }


    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-3 pt-2">
                    <p>Filter <Link className="float-right"><u>Clear All</u></Link></p> 
                    <hr />
                    <Menu  mode="inline">
                        <SubMenu key="1" title="Price">
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
                        <ProductCard ring={ring}/>
                        </div>
                        <div className="col-md-4">
                        <ProductCard ring={ring}/>
                        </div>
                        <div className="col-md-4">
                        <ProductCard ring={ring}/>
                        </div>
                    </div>
                    <br/><br/>
                    <Pagination 
        current={page}
        total={50}
        onChange={(value)=>setPage(value)}
        className="text-center pt-5"
        />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Shop;