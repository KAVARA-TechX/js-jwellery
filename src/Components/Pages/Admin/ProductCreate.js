import React, { useState } from "react";
import AdminNav from "../../Nav/AdminNav";
import { useSelector } from "react-redux";
import {createProduct} from "../../functions/product";
import {LoadingOutlined} from '@ant-design/icons';
import FileUpload from "../../Forms/FileUpload";
const initialState = {
  title: "",
  description:"",
  price:"",
  category:"",
  subs:"",
  quantity:"",
  images:[],
};


const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading]=useState(false)
//redux
const {user} = useSelector((state)=>({...state}));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    createProduct(values,user.token).then((res)=>{
      console.log(res.data);
      window.alert(`${res.data.newProduct.title} is created`);
    });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    //console.log(e.target.name, " ----- ", e.target.value);
  };

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
                <FileUpload values={values} setValues={setValues} setLoading={setLoading}/>
  
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Title</label>
      <input 
      type="text"
      name="title"
      className="form-control"
      values={values.title}
      onChange={handleChange}/>
      <label>Description</label>
      <input 
      type="text"
      name="description"
      className="form-control"
      values={values.description}
      onChange={handleChange}/>
      <label>Price</label>
      <input 
      type="Number"
      name="price"
      className="form-control"
      values={values.price}
      onChange={handleChange}/>
      <label>Category</label>
      <input 
      type="text"
      name="category"
      className="form-control"
      values={values.category}
      onChange={handleChange}/>
      <label>Subs</label>
      <input 
      type="text"
      name="subs"
      className="form-control"
      values={values.subs}
      onChange={handleChange}/>
      <label>Quantity</label>
      <input 
      type="number"
      name="quantity"
      className="form-control"
      values={values.title}
      onChange={handleChange}/>
    </div>
    <button >Submit</button>          
  </form>
                </div>
            </div>
        </div>
    
    
    
  );
};

export default ProductCreate;
