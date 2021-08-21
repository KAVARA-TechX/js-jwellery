import React,{useState} from 'react';
import FileUpload from './FileUpload';
import {useSelector} from 'react-redux';
import { createProduct } from '../functions/product';
const initialState = {
    title: "",
    description:"",
    price:"",
    category:"",
    subs:"",
    quantity:"",
    images:[],
  };
const CreateCoinForm = ({setLoading})=>{
  const [values, setValues] = useState(initialState);
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
             onChange={handleChange}
            />
            <label>Price</label>
            <input 
             type="text"
             name="description"
             className="form-control"
             values={values.description}
             onChange={handleChange}
            />
            <label>Coin weight</label>
            <input 
             type="text"
             name="description"
             className="form-control"
             values={values.description}
             onChange={handleChange}
            />
            <label>Purity</label>
            <input 
             type="text"
             name="description"
             className="form-control"
             values={values.description}
             onChange={handleChange}
            />
            <label>Metal</label>
            <input 
             type="text"
             name="description"
             className="form-control"
             values={values.description}
             onChange={handleChange}
            />
            <button className="button mt-3">Submit</button>
        </form>
    </div>
);
}

export default CreateCoinForm;