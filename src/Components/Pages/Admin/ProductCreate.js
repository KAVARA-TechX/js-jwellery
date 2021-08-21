import React, { useState } from "react";
import AdminNav from "../../Nav/AdminNav";
import {LoadingOutlined} from '@ant-design/icons';
import CreateJewelleryForm from "../../Forms/CreateJewelleryForm";
import CreateCoinForm from "../../Forms/CreateCoinForm";
import CreateSolitaireForm from "../../Forms/CreateSolitaireForm";



const ProductCreate = () => {
  const [select,setSelect] = useState("");
  const [loading, setLoading]=useState(false);


  

  const handleClick = (e) =>{
    e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
}

  return (
    <div class="d-flex" id="wrapper">
            <AdminNav/>
            <div id="page-content-wrapper">
                <i className="fas fa-bars ml-2" id="sidebarToggle" onClick={handleClick}></i>
                {loading ?<h4 className="text-danger ml-2"><LoadingOutlined /></h4> 
                : <h4 className="ml-2">Product create</h4>
                }       
                <div class="container-fluid">
                <label>Product Type</label>
                        <select className="form-control mb-5" aria-label="Default select example"
                        onChange={(e)=>{
                            setSelect(e.target.value);
                        }}
                        >
                                <option>Please choose Product type</option>
                                <option value="jewellery">Jewellery</option>
                                <option value="solitaire">Solitaires</option>
                                <option value="coin">Coins</option>
                            </select>
                            {select === "jewellery" ? 
                            <CreateJewelleryForm setLoading={setLoading}/>
                            : 
                            select === "coin" ? 
                            <CreateCoinForm setLoading={setLoading}/>
                            : 
                            select === "solitaire"
                            ?
                            <CreateSolitaireForm/>
                            :
                            ""
                            }
                
                </div>
            </div>
        </div>
    
    
    
  );
};

export default ProductCreate;
