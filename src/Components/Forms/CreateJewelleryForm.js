import React,{useState} from 'react';
import FileUpload from './FileUpload';
import {useSelector} from 'react-redux';
import {createProduct} from '../functions/product';
const initialState = {
    title: "",
    description:"",
    price:"",
    category:"",
    subs:"",
    quantity:"",
    images:[],
  };
const CreateJewelleryForm = ({setLoading}) =>{
  const [values, setValues] = useState(initialState);

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

return(
<div>
    <FileUpload values={values} setValues={setValues} setLoading={setLoading}/>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Title</label>
            <input 
             type="text"
             name="title"
             className="form-control"
             values={values.title}
             onChange={handleChange}
            />
            <label>Description</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Jewellery Type</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Product type</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Gender</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Metal Color</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Type</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Description</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Purity</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Metal</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Diamond Clarity</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Collection</label>
      <input 
       type="text"
       name="description"
       className="form-control"
       values={values.description}
       onChange={handleChange}/>
      <label>Virtual try on</label>
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
    <button className="button">Submit</button>          
  </form>
</div>
);
}

export default CreateJewelleryForm;