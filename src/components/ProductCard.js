import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2 cursor-pointer"
      style={{ width: 300 }}
      role="button"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div className="mt-2">
        <img
          src={props.url}
          alt={props.Product}
          width={180}
          height={150}
          className="border-radius-9"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.Product}</h5>
        <h6 className="mt-2">{`$${props.Orginalprice}`}</h6>
        <h6 className="mt-2">{props.Descripition}</h6>
        <h6 className="mt-2">{props.rating}</h6>

        <div className="mt-4">
          {props.stock > 0 ? (
            <button className="btn btn-success">Available</button>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
