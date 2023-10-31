import React, { useState, useMemo, useCallback } from "react";

function CRUDExample() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editedItemIndex, setEditedItemIndex] = useState(null);

  // Create: Add a new item to the list
  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  // Update: Edit an item in the list
  const editItem = useCallback(
    (index, newValue) => {
      const updatedItems = [...items];
      updatedItems[index] = newValue;
      setItems(updatedItems);
      setEditedItemIndex(null);
    },
    [items]
  );

  // Delete: Remove an item from the list
  const deleteItem = useCallback(
    (index) => {
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
      setEditedItemIndex(null);
    },
    [items]
  );

  // Read: Display the list of items
  const itemList = useMemo(() => {
    return items.map((item, index) => (
      <div key={index}>
        {editedItemIndex === index ? (
          <input
            type="text"
            value={item}
            onChange={(e) => editItem(index, e.target.value)}
          />
        ) : (
          item
        )}
        <button onClick={() => editItem(index, item)}>Edit</button>
        <button onClick={() => deleteItem(index)}>Delete</button>
      </div>
    ));
  }, [items, editedItemIndex, editItem, deleteItem]);

  return (
    <div>
      <h1>CRUD Example - To-Do List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>
      <div>
        <h2>To-Do List:</h2>
        {itemList}
      </div>
    </div>
  );
}

export default CRUDExample;
