import React, { useState } from 'react';
import HeaderCard from '../../Cards/HeaderCard';
import ProductCard from '../../Cards/ProductCard';
import Nav from '../../Nav/Header';
import ring from '../../../Images/pro08.jpg';
import { Pagination } from 'antd';
const Solitaires = () =>{
    const [page,setPage] = useState(1);
    return(
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                <div className="col-md-2 dropdown" style={{backgroundColor:'#add8e6',borderRight:'2px solid gray'}}>
                        <div className="filter">
                        <p className="dropdown-toggle solitaires1 pt-3" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">price</p>
                        <div class="dropdown-menu" style={{marginLeft:'20px',marginTop:'-15px'}} aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" >Action</a>
                            <a class="dropdown-item" >Another action</a>
                            <a class="dropdown-item" >Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2 dropdown" style={{backgroundColor:'#add8e6',borderRight:'2px solid gray'}}>
                        <div className="filter">
                        <p className="dropdown-toggle solitaires2 pt-3" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">product type</p>
                        <div class="dropdown-menu" style={{marginLeft:'20px',marginTop:'-15px'}} aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" >Action</a>
                            <a class="dropdown-item" >Another action</a>
                            <a class="dropdown-item" >Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2 dropdown" style={{backgroundColor:'#add8e6',borderRight:'2px solid gray'}}>
                        <div className="filter">
                        <p className="dropdown-toggle solitaires pt-3" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Weight Ranges</p>
                        <div class="dropdown-menu" style={{marginLeft:'20px',marginTop:'-15px'}} aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" >Action</a>
                            <a class="dropdown-item" >Another action</a>
                            <a class="dropdown-item" >Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2 dropdown" style={{backgroundColor:'#add8e6',borderRight:'2px solid gray'}}>
                        <div className="filter">
                        <p className="dropdown-toggle solitaires3 pt-3" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Matarial</p>
                        <div class="dropdown-menu" style={{marginLeft:'20px',marginTop:'-15px'}} aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" >Action</a>
                            <a class="dropdown-item" >Another action</a>
                            <a class="dropdown-item" >Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2 dropdown" style={{backgroundColor:'#add8e6',borderRight:'2px solid gray'}}>
                        <div className="filter">
                        <p className="dropdown-toggle solitaires4 pt-3" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Metal</p>
                        <div class="dropdown-menu" style={{marginLeft:'20px',marginTop:'-15px'}} aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" >Action</a>
                            <a class="dropdown-item" >Another action</a>
                            <a class="dropdown-item" >Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-2 dropdown" style={{backgroundColor:'#add8e6',borderRight:'2px solid gray'}}>
                        <div className="filter">
                        <p className="dropdown-toggle solitaires pt-3" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">See More Filters</p>
                        <div class="dropdown-menu" style={{marginLeft:'20px',marginTop:'-15px'}} aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" >Action</a>
                            <a class="dropdown-item" >Another action</a>
                            <a class="dropdown-item" >Something else here</a>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <ProductCard ring={ring}/>
                    </div>
                    <div className="col-md-3">
                        <ProductCard ring={ring}/>
                    </div>
                    <div className="col-md-3">
                        <ProductCard ring={ring}/>
                    </div>
                    <div className="col-md-3">
                        <ProductCard ring={ring}/>
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