import React, { useState, useMemo } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ]);

  const totalCost = useMemo(() => {
    console.log("Calculating total cost...");
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  const addItem = () => {
    const newItemId = cartItems.length + 1;
    console.log(newItemId);
       setCartItems([
         ...cartItems,
         { id: newItemId, name: "Item " + newItemId, price: 10 * newItemId },
       ]);

  };

  const deleteItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total Cost: ${totalCost}</p>
      <button onClick={() => addItem()}>Add Item 4</button>
    </div>
  );
}

export default ShoppingCart;
