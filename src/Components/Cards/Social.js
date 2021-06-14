import React from 'react';
import './Social.css';
import { Link } from 'react-router-dom';
const Social=()=>{
    return(
<div class="icon-bar">
  <Link to="/" class="facebook"><i class="fa fa-facebook"></i></Link>
  <Link to="/" class="instagram"><i class="fa fa-instagram"></i></Link>
</div>
    )
}
export default Social;