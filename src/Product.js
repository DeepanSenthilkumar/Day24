// Product.js
import React from 'react';

function Product({ product, addToCart, removeFromCart, disabled }) {
  const { id, name, price, description } = product;

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
      <button onClick={() => addToCart(id)} disabled={disabled}>
        {disabled ? "Added to Cart" : "Add to Cart"}
      </button>
      <button onClick={() => removeFromCart(id)} disabled={!disabled} 
      className="remove-from-cart">
        Remove from Cart
      </button>
    </div>
  );
}

export default Product;
