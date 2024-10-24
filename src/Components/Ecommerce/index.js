import { useState } from 'react';
import Header from "../Header";
import logo1 from "../../assets/images/IMG-10935071_e8d611ec-53bf-4319-8326-91c29d1bbc3b.webp"
import logo2 from  "../../assets/images/IMG-10942145_9f7ece93-39fc-4310-a98d-9c11efa3a51e.webp"
import logo3 from  "../../assets/images/iPhone_15_Pink_PDP_Image_Position-1__en-IN.webp"
import logo4 from  "../../assets/images/IMG-10942145_9f7ece93-39fc-4310-a98d-9c11efa3a51e.webp"

import "./index.css"

const products = [
  { id: 1, name: 'Product A', price: 100, image: `${logo1}` },
  { id: 2, name: 'Product B', price: 200, image: `${logo2}`},
  { id: 3, name: 'Product C', price: 300, image: `${logo3}`},
  { id: 4, name: 'Product C', price: 300, image: `${logo4}`},
];

const Ecommerce = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
    <Header />
    <div className="app">
      
      {/* Product List */}
      <div className="product-list">
        <h2>Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))
        )}
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
    </>
  );
};


export default Ecommerce;