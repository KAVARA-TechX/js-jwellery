import React,{useState} from 'react';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import {createQuery} from '../functions/auth';
import {toast} from 'react-toastify';
const GenralQueryForm = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState();
    const [purpose_of_enquiry,setPurpose] = useState();
    const [description, setQuestions] = useState("");
    const [checkbox1,setCheckbox1] = useState(true);
    const [checkbox2,setCheckbox2] = useState(true);

    const handlegenralSubmit = (e) => {
        if(checkbox1 === true || checkbox2 === true){
                toast.error("Please accept privacy policy and product updates checkbox");
            }else
            {
              createQuery(name,email,phone,purpose_of_enquiry,description).then(res =>{
                toast.success("We have recieved your request.");
              }).catch(error => console.log(error));
            }
    }

    const handleCatagoryChange = (e) => {
    e.preventDefault();
    // console.log("CLICKED PURPOSE", typeof(e.target.value));
    setPurpose(e.target.value);
  };

  const handleCookie = (e)=>{
    if(checkbox1 === true){
      setCheckbox1(false);
    }else{
      setCheckbox1(true);
    }
    // console.log(checkbox1);
  }

  const handleOffers = (e)=>{
    if(checkbox2 === true){
      setCheckbox2(false);
    }else{
      setCheckbox2(true);
    }
    // console.log(checkbox2);
  }

    return(
                <form onSubmit={handlegenralSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
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
                        required
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
                        required
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={e=>setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Purpose of enquiry</label>
                    <select name="purpose" className="form-select" onChange={handleCatagoryChange}>
                      <option>New product Query</option>
                      <option>Returning customer</option>
                      <option>Resizing or aftercare</option>
                    </select>
                    </div> 
                    <div className="form-group">
                      <textarea 
                      onChange={e => setQuestions(e.target.value)}
                      className="form-control"placeholder="Enter any questions,requirements or ideas you may have" />
                      </div>   
                      <p><b>Safeguarding your privacy</b> <i class="fas fa-info ml-2"></i></p>
                      <Checkbox onChange={handleCookie}
                      value={checkbox1}>
                    By checking this box, I confirm that I have read and agree to the Terms of Use, 
                    Privacy Policy, and Cookie Policy.*
                  </Checkbox>
                  <br/>
                  <Checkbox  onChange={handleOffers} value={checkbox2}>
                  By checking this box, I authorise JS solitaire to contact me with updates on our products.
                  </Checkbox>
                  <br/><br/>
                    <button className="button btn-block mb-5" style={{height:'30px'}}>Submit Query</button>
                </form>     
    );
}

export default GenralQueryForm;