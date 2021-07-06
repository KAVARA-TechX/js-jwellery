import React, {useState}from 'react';
import Nav from '../Nav/Header';
import HeaderCard from '../Cards/HeaderCard';
const VirtualConsultation = () =>{
    const [date,setDate] = useState("");
    const [timeSlot,setTimeSlot] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState();
    const [specialrequest,setSpecialRequest] = useState("");
    const [notes,setNotes] = useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();   
        if(date == "" || timeSlot == "" || name == "" || email == "" || phone == 0 || specialrequest =="" 
            || notes == ""){
                alert("All fields are required");
            }else{
                console.log(date);
        console.log(timeSlot);
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(specialrequest);
        console.log(notes);
            }
    }
    return(  
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container">
                <h4>Virtual consultation Form</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Choose a Date</label>
                      <input
                        type="date"
                        name="title"
                        className="form-control"
                        value={date}
                        onChange={e=>setDate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>TimeSlot</label>
                      <input
                        type="text"
                        name="TimeSlot"
                        className="form-control"
                        value={timeSlot}
                        onChange={e=>setTimeSlot(e.target.value)}
                      />
                    </div>
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
                      <label>Special Request</label>
                      <input
                        type="text"
                        name="specialrequest"
                        className="form-control"
                        value={specialrequest}
                        onChange={e=>setSpecialRequest(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Notes</label>
                      <input
                        type="text"
                        name="notes"
                        className="form-control"
                        value={notes}
                        onChange={e=>setNotes(e.target.value)}
                      />
                    </div>      
                    <br/>
                    <button className="btn btn-outline-info mb-5">Save</button>
                </form>
            </div>
        </div>
    );
}
export default VirtualConsultation;