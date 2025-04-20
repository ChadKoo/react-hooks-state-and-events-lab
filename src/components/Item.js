import React, {useState}from "react";

function Item({ name, category }) {
  const [inCart, SetInCart]=useState("")
  const itemClass = inCart ? "in-cart" : " "
  function handleClick(){
    SetInCart(!inCart)

  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart?"Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;
