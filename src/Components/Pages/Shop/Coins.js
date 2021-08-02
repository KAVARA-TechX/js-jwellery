import React,{useState} from 'react';
import { Menu,Checkbox,Pagination } from "antd";
import HeaderCard from '../../Cards/HeaderCard';
import Nav from '../../Nav/Header';
import SubMenu from 'antd/lib/menu/SubMenu';
import CoinProductCard from '../../Cards/CoinProductCard';
import coin from '../../../Images/GoldCoin.jpg';
import {Link} from 'react-router-dom';
const Coins = ()=>{
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
            <div className="container-fluid mt-5">
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
                        <SubMenu key="2" title="Coin Weight">
                        <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                1 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                2 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                4 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                5 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                8 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                10 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                25 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                30 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                50 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                100 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                500 gram
                            </Checkbox>
                            <br/>
                            <Checkbox onChange={handleWeight}
                            name="coin weight"
                            value="0.00"
                            className="pb-2 pl-4 pr-4"
                            >
                                1000 gram
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
                            value="Silver">
                                Silver
                            </Checkbox>
                            <br/>
                        </SubMenu>
                        </Menu>
                    </div>
                    <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                        <Link to="/shop/coins/single-coin">
                        <CoinProductCard coin={coin}/>
                        </Link>
                        </div>
                        <div className="col-md-4">
                        <Link to="/shop/coins/single-coin">
                        <CoinProductCard coin={coin}/>
                        </Link>
                        </div>
                        <div className="col-md-4">
                        <Link to="/shop/coins/single-coin">
                        <CoinProductCard coin={coin}/>
                        </Link>
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
    )
}


export default Coins;