import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Product from './Product';
import Footer from './Footer';
import "./App.css"

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [disabledProducts, setDisabledProducts] = useState([]);

  function addToCart(productId) {
    setCartItemCount(prevCount => prevCount + 1);
    setDisabledProducts(prevDisabled => [...prevDisabled, productId]);  //function to add count in the cart
  }

  function removeFromCart(productId) {
    setCartItemCount(prevCount => prevCount - 1);
    setDisabledProducts(prevDisabled => prevDisabled.filter(id => id !== productId));   // function reduce count in the cart
  }

  const productList = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', price: 40, description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', price: 50, description: 'Description of Product 5' },
    { id: 6, name: 'Product 6', price: 60, description: 'Description of Product 6' },
    { id: 7, name: 'Product 7', price: 70, description: 'Description of Product 7' },
    { id: 8, name: 'Product 8', price: 80, description: 'Description of Product 8' },
  ];

  return (
    <div>
      <Navbar cartItemCount={cartItemCount} />
      <Header />
      <div className="product-list">
        {productList.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            disabled={disabledProducts.includes(product.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
