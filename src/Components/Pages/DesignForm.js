import { Checkbox } from 'antd';
import React from 'react';
import HeaderCard from '../Cards/HeaderCard';
import Header from '../Nav/Header';

const Design = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div>
            <HeaderCard/>
            <Header/>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <h4>Begin the design process</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" required placeholder="Name *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" required placeholder="Email *"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone (optional)"/>
                            </div>
                            <p><b>Safeguarding your privacy</b> <i class="fas fa-info ml-2"></i></p>
                      <Checkbox>
                    By checking this box, I confirm that I have read and agree to the Terms of Use, 
                    Privacy Policy, and Cookie Policy.*
                  </Checkbox>
                  <br/>
                  <Checkbox  >
                  By checking this box, I authorise JS solitaire to contact me with updates on our products.
                  </Checkbox>
                  <br/><br/>
                    <button className="button btn-block mb-5">Let's get Started</button>
                        </form>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Design;