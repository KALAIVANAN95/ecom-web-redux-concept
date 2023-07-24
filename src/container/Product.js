import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { addItem } from "../redux/reducer/cart";

const Product = () => {
  const params = useParams();

  const dispatch = useDispatch();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );
  console.log(props,"props");

  const addToCart = () => {
    dispatch(addItem(props));
  };
  return (
    <div className="card m-2" style={{ display: "block", margin: "0 auto" }}>
      <div className="mt-2">
        <img
          src={props.url}
          alt={props.Product}
          width={350}
          height={350}
          className="border-radius-9"
        />
      </div>
      <div className="card-body mt-3">
        <h5 className="card-title">{props.Product}</h5>
        <h6 className="mt-2">{`$${props.Orginalprice}`}</h6>
        <h6 className="mt-2">{props.Descripition}</h6>
        <h6 className="mt-2">{props.rating}</h6>

        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button className="btn btn-success">Buy Now</button>
              <button className="btn btn-success ms-3" onClick={addToCart}>
                Add to Cart
              </button>
            </>
          ) : (
            <button className="btn btn-outline-danger">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
