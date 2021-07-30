import React, {useEffect,useState} from 'react';
import product1 from '../../Images/ring1.jpg';
import product2 from '../../Images/pro02.jpg';
import product3 from '../../Images/pro03.jpg';
import product4 from '../../Images/pro04.jpg';
import product5 from '../../Images/pro5.jpeg';
import product6 from '../../Images/pro06.jpg';
import product7 from '../../Images/pro07.jpg';
import product8 from '../../Images/pro08.jpg';
import {Carousel} from 'react-bootstrap';
import TopProduct from './TopProduct';
import { getProductByCount } from '../functions/product';
import {Link} from 'react-router-dom';
const TopProductCard = () =>{
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    getProductByCount(4).then(res =>{
        setLoading(false);
      // console.log("products:- ",res.data);
      setProducts(res.data);
    }).catch(error => console.log(error));
  },[]);
  
  return(
      <div className="mt-5 mb-5">
        {/* {JSON.stringify(products)} */}
        <Carousel indicators={true}>
        <Carousel.Item>
        <div className="container top-product">
          <div  className="row">
          {products.map((product)=>(
								  <div key={product._id} className="col-md-3">
									  <Link to={`/product/${product.slug}`}><TopProduct product={product}/></Link>
                    </div>
							  ))}
            </div>
          </div>
          </Carousel.Item>
      </Carousel>
        
      {/*  */}
      </div>
    )
}

export default TopProductCard;