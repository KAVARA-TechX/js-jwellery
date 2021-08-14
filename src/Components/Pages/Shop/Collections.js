import React, { useState } from 'react';
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';
import ProductCard from '../../Cards/ProductCard';
import ring from '../../../Images/Collection.jpg';
import { Checkbox,Menu, Pagination } from 'antd';
import {Link} from "react-router-dom";
const {SubMenu} = Menu;
const Collections = () =>{
    const [page,setPage] = useState(1);

    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3 mHide">
                        <h5>Filter</h5>
                        <p>Choose A Collection</p>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Aveer
                        </Checkbox>
                        <br/>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Ekatvam
                        </Checkbox>
                        <br/>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Virasat
                        </Checkbox>
                        <br/>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Ahalya
                        </Checkbox>
                        <br/>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Padmavat
                        </Checkbox>
                        <br/>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Preen
                        </Checkbox>
                        <br/>
                        <Checkbox
                        value="Aveer"
                        name="Aveer"
                        >Mirayah
                        </Checkbox>
                        <br/>
                    </div>
                    <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/shop/collections/single-collection">
                                <ProductCard ring={ring}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                        <Link to="/shop/collections/single-collection">
                                <ProductCard ring={ring}/>
                            </Link>
                        </div>
                        <div className="col-md-4">
                        <Link to="/shop/collections/single-collection">
                                <ProductCard ring={ring}/>
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
    );
}

export default Collections;