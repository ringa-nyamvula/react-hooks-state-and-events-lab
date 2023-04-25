import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [copyItems, setCopyItems] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedToCartIds, setAddedToCartIds] = useState([]);
  // console.log(items);
  const handleChange = (event) => {
    const {value} = event.target;

    setSelectedCategory(value);
    const newFilteredItems = items.filter((item) => item.category === value);

    if (value === "All") {
      setCopyItems(items);
    } else {
      setCopyItems(newFilteredItems);
    }
  };

  const addOrRemoveCart = (id) => {
    const idExists = addedToCartIds.includes(id);
    console.log(idExists);
    if (idExists) {
      setAddedToCartIds((prevState) => prevState.filter((item) => item !== id));
    } else {
      setAddedToCartIds((prevState) => [...prevState, id]);
    }
  };

  // console.log("selectedCategory", selectedCategory);
  console.log("addedToCartIds", addedToCartIds);

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
      <select 
        value={selectedCategory}
        onChange={handleChange}
        name="filter"
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {copyItems.map((item) => (
          <Item 
          key={item.id}
          name={item.name} 
          category={item.category} 
          id={item.id} 
          addOrRemoveCart={addOrRemoveCart}
          addedToCartIds={addedToCartIds}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
