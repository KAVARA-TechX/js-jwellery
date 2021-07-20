import React,{useState} from 'react';
const ConsultationForm = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();   
        if(name === "" || email === "" || phone === 0 ){
                alert("All fields are required");
            }else{
        console.log(name);
        console.log(email);
        console.log(phone);
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
                    <button className="button btn-block mb-5">Get in touch</button>
                </form>     
    );
}

export default ConsultationForm;