import React, {useState}from 'react';
import Nav from '../Nav/Header';
import HeaderCard from '../Cards/HeaderCard';
import ConsultationForm from '../Forms/ConsultationForm';
import GenralQueryForm from '../Forms/GenralQueryForm';
import { Radio } from 'antd';
import contactImg from '../../Images/Consult.jpg';
import TopProductCard from '../Cards/TopProductCard';
const {Group} = Radio;
const VirtualConsultation = () =>{

  const [value, setValue] = useState(1);

  const onChange = e => {
    setValue(e.target.value);
  };
    return(  
        <div>
            <HeaderCard/>
            <Nav/>
            <div className="container mt-5 mb-5 pb-5">
              <div className="row">
              <h3 className="text-center">Contact Us</h3>
                <p className="text-center">Begin by scheduling a complimentary consultation at one of our 
                showrooms, via email, chat,phone or Whatsapp, where you can share your ideas with one of our expert 
                design consultants</p>
                 <div className="col-md-6 mHide">
                
                <img src={contactImg} alt="Contact Us" style={{height:'328px',width:"100%"}}/>
                 </div>
                 <div className="col-md-6">
                 <Group onChange={onChange} value={value}>
                  <Radio value={1}>Request Consultation</Radio>
                  <Radio value={2}>General Query</Radio>
                </Group>
                 {value===1 ? <ConsultationForm/>: <GenralQueryForm/>}
                 </div>
              </div>
            </div>
            <div className="mt-5" style={{marginBottom:'6rem'}}>
              <h3 className="text-center">Our Products</h3>
              <TopProductCard/>
            </div>
        </div>
    );
}
export default VirtualConsultation;