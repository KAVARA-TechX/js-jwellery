import React from 'react';
import './Social.css';
import { Link } from 'react-router-dom';
const Social=()=>{
    return(
      <div className="container-fluid " >
        <h3 className="text-center " style={{color:'#4A689F'}}>Follow Our Social Media Handlers</h3>
            <div className="row ">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-4 leftt mt-3">
                <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3910545909068222" 
              scrolling="no" 
              frameBorder="0" 
              allowfullscreen="true" 
              style={{border:'3px solid blue',borderRadius:'10px'}}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
                </div>
                <div className="col-sm-2">

                </div>
                <div className="col-sm-4 leftt mt-3">
                <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3910545909068222"
              scrolling="no" 
              frameBorder="0" 
              allowfullscreen="true" 
              style={{border:'3px solid blue',borderRadius:'10px'}}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
    )
}
export default Social;