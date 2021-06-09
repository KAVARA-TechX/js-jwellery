import React from 'react';

const Growth = () =>{
    return(
        <div className="container-fluid pb-5">
            <div className="row">
            <div className='col-sm-7 '>
                <div>
                    
                </div>
            </div>
            <div className="col-sm-5" style={{ fontFamily:'Ubuntu'}}>
                <h1 style={{ fontFamily:'Ubuntu', fontSize:'40px', color:'#33538B'}}>Solitaire Price Index</h1>
                <p align="justify">An index introduced on 1st April 2006 <br/>
                                    which tracks trends in diamond prices.</p>
                                    <br/>
                                    Solitaires Price Index is purely based on the JS Solitaires <br/>
                                    "Nationwide Standard and Transparent Price List".
                                    <div>
                                    <button className="btn btn-magenda start-block" style={{fontFamily:'Ubuntu', fontSize:'12px',borderRadius:'25px'}}>Read more</button>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default Growth;