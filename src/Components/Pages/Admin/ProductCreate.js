import React, { useState, useEffect } from "react";
import AdminNav from "../../Nav/AdminNav";
import ProductCreateForm from "../../Forms/ProductCreateForm";
import {LoadingOutlined} from '@ant-design/icons';
const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  category: "",
  subs: "",
  quantity: "",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product create</h4>
          <hr />
          
        {/* {JSON.stringify(values.images)} */}
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
