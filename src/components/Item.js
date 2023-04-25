import React from "react";

function Item({ name, category, id, addOrRemoveCart, addedToCartIds }) {
  const currentIdIsIncluded = addedToCartIds.includes(id);

  return (
    <li className="">
      <span className={currentIdIsIncluded ? "remove" : "add"}>{name}</span>
      <span className={`category ${currentIdIsIncluded ? "remove" : "add"}`} >{category}</span>
      <button 
        onClick={() => addOrRemoveCart(id)}
        className={currentIdIsIncluded ? "remove" : "add"}  >
        {currentIdIsIncluded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
