import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  function handleClick() {
    setCart((inCart) => !inCart)
  }
  const noCart = inCart ? "in-cart" : ""
  const color = inCart ? "remove" : "add"
  return (
    <li className={noCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={color} onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
