import React,{useState} from 'react';
import {createConsulatation} from '../functions/auth';
import {toast} from 'react-toastify';
const ConsultationForm = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState();
    const handleSubmit = (e) => {
        // e.preventDefault();   
        if(name === "" || email === "" || phone === 0 ){
                toast.error("All fields are required");
            }else{
              createConsulatation(name,email,phone).then(res =>{
                toast.success("Your Query has been submitted we will connect with you soon.");
              }).catch(error => {
                console.log(error);
              });
            }
    }
    return(
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={e=>setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={e=>setPhone(e.target.value)}
                      />
                    </div>
                  <br/>
                    <button className="button btn-block mb-5" style={{height:"30px"}}>Get in touch</button>
                </form>     
    );
}

export default ConsultationForm;