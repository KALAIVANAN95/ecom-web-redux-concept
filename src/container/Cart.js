import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";
import { modifyItem } from "../redux/reducer/cart";

const Cart = () => {
  const list = useSelector((state) => state.cart.list);
  console.log(list, "list");

const dispatch = useDispatch()
  const incrementItem =(item)=>{
    dispatch(modifyItem({...item,count:item.count+1}))
  }
  return (
    <>
      {list.map((item) => {
        return (
          <>
            <ProductListItem {...item} key={item.id} incrementItem={()=>incrementItem(item)} />
          </>
        );
      })}
    </>
  );
};

export default Cart;
