import React, { useState } from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import ProductCard from '../../Cards/ProductCard';
import Nav from '../../Nav/Header';
import ring from '../../../Images/Diamond.jpg';
import { Pagination,Menu,Checkbox } from 'antd';
import {Link} from 'react-router-dom';

const {SubMenu} = Menu;
const Solitaires = () =>{
    const [page,setPage] = useState(1);
    const handlePrice = (e) =>{
        console.log("Selected price",e.target.value);
    }
    const handleWeight = (e) =>{
        console.log("Selected weight",e.target.value);
    }

    const handleMetal = (e)=>{
        console.log("Selected Metal",e.target.value);
    }
    const handlePurity = (e)=>{
        console.log("Selected purity",e.target.value);
    }
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container-fluid mt-5 mb-5">
                
                <div className="row">
                    <div className="col-md-3">
                    <p>Filter <Link className="float-right"><u>Clear All</u></Link></p> 
                    <hr />
                        <Menu mode="inline">
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
                        <SubMenu key="2" title="Product Type">
                        <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Earrings
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Rings
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Necklaces
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Pendants
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Bracelets
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Mangalsutra
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                Nose pin
                            </Checkbox>
                    </SubMenu>
                        <SubMenu key="3" title="Wieght Ranges">
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                0-2
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="14.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                2-5
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="18.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                5-10
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handlePurity}
                            name="purity"
                            value="22.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                10-20
                            </Checkbox>
                        </SubMenu>
                        <SubMenu key="4" title="Matarial">
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                Gold
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Platinum">
                                Platinum
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Diamond">
                                Diamond
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gemstone">
                                Gemstone
                            </Checkbox>
                            <br/>
                        </SubMenu>
                        <SubMenu key="5" title="Metal">
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                18 Kt Yellow
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Platinum">
                                18 Kt Yellow
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Silver">
                                18 Kt Yellow
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Silver">
                                18 Kt Rose
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Silver">
                                18 Kt Two Tone
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Silver">
                                18 Kt Three Tone
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Silver">
                                Platinum 950 Platinum
                            </Checkbox>
                            <br/>
                        </SubMenu>
                        <SubMenu key="6" title="See More Filters">
                            <SubMenu key="6.1" title="Ring Size">
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                5
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                6
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                7
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                8
                            </Checkbox>
                            <br/>
                            </SubMenu>
                            <SubMenu key="6.2" title="Chain length">
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                5
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                6
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                7
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                8
                            </Checkbox>
                            <br/>
                            </SubMenu>
                            <SubMenu key="6.3" title="Shop for">
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                5
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                6
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                7
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                8
                            </Checkbox>
                            <br/>
                            </SubMenu>
                            <SubMenu key="6.4" title="Occasion">
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                5
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                6
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                7
                            </Checkbox>
                            <br/>
                            <Checkbox
                            onChange={handleMetal}
                            className="p-2 pl-4 pr-4"
                            name="product-metal"
                            value="Gold">
                                8
                            </Checkbox>
                            <br/>
                            </SubMenu>
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
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                <Pagination 
        current={page}
        total={50}
        onChange={(value)=>setPage(value)}
        className="text-center pt-5"
        />
                </div>
            </div>
        </div>
    );
}

export default Solitaires;