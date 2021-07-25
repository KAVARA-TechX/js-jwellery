import React, { useEffect, useState } from "react";
import AdminNav from "../../Nav/AdminNav";
import { getProductByCount } from "../../functions/product";
import AdminProductCard from "../../Cards/AdminProductCard";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllProducts();
  }, [user.token]);

  const handleClick = (e) =>{
    e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));   
}
  const loadAllProducts = () => {
    setLoading(true);
    getProductByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

 

  return (
    <div class="d-flex" id="wrapper">
            <AdminNav/>
            <div id="page-content-wrapper">
                <i className="fas fa-bars ml-3" id="sidebarToggle" onClick={handleClick}></i>       
                <div className="container-fluid">
                {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>All Products</h4>
          )}
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4 pb-3">
                <AdminProductCard
                  product={product}
                />
              </div>
            ))}
            </div>
                </div>
            </div>
        </div>
    
  );
};

export default AllProducts;
