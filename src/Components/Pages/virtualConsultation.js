import React, {useState}from 'react';
import Nav from '../Nav/Header';
import HeaderCard from '../Cards/HeaderCard';
import Checkbox from 'antd/lib/checkbox/Checkbox';
const VirtualConsultation = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState();

    
    const handleSubmit = (e) => {
        e.preventDefault();   
        if(name == "" || email == "" || phone == 0 ){
                alert("All fields are required");
            }else{
        console.log(name);
        console.log(email);
        console.log(phone);
            }
    }
    return(  
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                <h4 className="text-center">Contact Us</h4>
                <h5 className="text-center">Begin by scheduling a complimentary consultation at one of our London showrooms, via email, chat, 
                  phone or Whatsapp, where you can share your ideas with one of our expert design consultants</h5>
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
                    <div className="form-group">
                      <label>Purpose of enquiry</label>
                    <select className="form-select">
                      <option>New product Query</option>
                      <option>Returning customer</option>
                      <option>Resizing or aftercare</option>
                    </select>
                    </div> 
                    <div className="form-group">
                      <textarea className="form-control"placeholder="Enter any questions,requirements or ideas you may have" />
                      </div>   
                      <p><b>Safeguarding your privacy</b> <i class="fas fa-info ml-2"></i></p>
                      <Checkbox>
                    By checking this box, I confirm that I have read and agree to the Terms of Use, 
                    Privacy Policy, and Cookie Policy.*
                  </Checkbox>
                  <br/>
                  <Checkbox>
                  By checking this box, I authorise JS solitaire to contact me with updates on our products.
                  </Checkbox>
                  <br/><br/>
                    <button className="button btn-block mb-5">Get in touch</button>
                </form>
                </div>
                <div className="col-md-3">
                  
                </div>
                </div>
            </div>
        </div>
    );
}
export default VirtualConsultation;