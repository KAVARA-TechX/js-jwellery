import React, { useState } from 'react';
import Nav from '../../Nav/Header';
import HeaderCard from '../../Cards/HeaderCard';
import ProductCard from '../../Cards/ProductCard';
import ring from '../../../Images/goldring3.png';
import { Pagination } from 'antd';
const Collections = () =>{
    const [page,setPage] = useState(1);

    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Choose A Collection</h5>
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

export default Collections;