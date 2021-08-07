import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  const handleCategoryChange = (event) => setItemCategory(event.target.value);
  const handleNameChange = (event) => setItemName(event.target.value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onItemFormSubmit(newItem);
  }

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  };
  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
