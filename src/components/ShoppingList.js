import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameSearch, setNameSearch] = useState('');
  const [arrayItems, setArrayItems] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event) {
    setNameSearch(event.target.value);
  }
  function addElement(element){
    setArrayItems([...arrayItems, element]);
  }

  const itemsToDisplayWithCategory = arrayItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsToDisplay = itemsToDisplayWithCategory.filter(item => item.name.includes(nameSearch))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={nameSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
