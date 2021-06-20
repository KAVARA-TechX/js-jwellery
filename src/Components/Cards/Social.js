import React from 'react';
import './Social.css';
import { Link } from 'react-router-dom';
const Social=()=>{
    return(
      <div className="pt-5 pb-4">
        <h3 className="text-center pt-1" style={{color:'#4A689F'}}>Join Our Channels</h3>
        <div className="container mt-5 mb-5 " >
            <div className="row d-flex">
                <div className="col-sm-1">

                </div>
                <div className="col-sm-4 leftt mt-3 d-flex justify-content-center">
                <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3910545909068222" 
              scrolling="no" 
              frameBorder="0" 
              allowfullscreen="true" 
              
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
                </div>
                <div className="col-sm-2">

                </div>
                <div className="col-sm-4 leftt mt-3 d-flex justify-content-center">
                <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3910545909068222"
              scrolling="no" 
              frameBorder="0" 
              allowfullscreen="true" 
              
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
      </div>
    )
}
export default Social;