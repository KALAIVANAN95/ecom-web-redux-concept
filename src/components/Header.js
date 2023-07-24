import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 bg-secondary">
      <h3 className="text-light">Ecommerce-website</h3>
      <div className="row jusitify-content-center pt-2 pb-1">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex mx-auto">
          <div className="btn btn-success me-4" onClick={() => navigate("/")}>
            Home
          </div>
          <input
            className="form-control"
            type="search"
            placeholder="Search.."
          />
          <div className="btn btn-success ms-3" onClick={()=>navigate('/cart')}>Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
