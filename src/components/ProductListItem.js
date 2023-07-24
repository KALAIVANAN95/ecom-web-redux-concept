import React from "react";

const ProductListItem = (props) => {
  return (
    <div className="d-flex m-4 align-items-center justify-content-center shadow p-3 mb-5 bg-body-tertiary rounded">
      <img
        src={props.url}
        alt={props.Product}
        width={180}
        height={150}
        className="border-radius-9 me-4"
      />

      <h5 className="card-title me-4">{props.Product}</h5>
      <h6 className="mt-2 me-4">{`$${props.Orginalprice}`}</h6>
      <h6 className="mt-2 me-4">{props.Descripition}</h6>
      <h6 className="mt-2 me-4">{props.rating}</h6>


        <button className="btn btn-danger ms-3" onClick={props.incrementItem}>+</button>
        <span className="ms-3">Quantity</span>
        <button className="btn btn-danger ms-3" onClick={props.decrementItem}>-</button>
        <button className="btn btn-danger ms-3" onClick={props.removeItem}>Remove</button>
      </div>

  );
};

export default ProductListItem;
