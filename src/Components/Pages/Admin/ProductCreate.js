import React, { useState, useEffect } from "react";
import AdminNav from "../../Nav/AdminNav";
import { useSelector } from "react-redux";
import ProductCreateForm from "../../Forms/ProductCreateForm";
import {createProduct} from "../../functions/product";
import {LoadingOutlined} from '@ant-design/icons';
import { toast } from "react-toastify";
import FileUpload from "../../Forms/FileUpload";
const initialState = {
  title: "",
  description: "",
  price: "",
  images:[],
  categories: [],
  category: "",
  subs: "",
  quantity: "",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading]=useState(false)
//redux
const {user} = useSelector((state)=>({...state}));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    createProduct(values,user.token)
    .then(res=>{
      toast.success("Product is created");
      setValues(initialState);
      console.log(res);
    })
    .catch(err=>{
      toast.error(err);
      console.log(err);
    })
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    //console.log(e.target.name, " ----- ", e.target.value);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product create</h4>
          <hr/>
          
        {/* {JSON.stringify(values.images)} */}
        <div className="p-3">
          <FileUpload values={values} setValues={setValues} setLoading={setLoading}/>
        </div>
          <ProductCreateForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
