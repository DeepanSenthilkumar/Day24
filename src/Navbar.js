// Navbar.js
import React from 'react';

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
        </ul>
        <button className="cart-button">
        Cart <span className="cart-count">{cartItemCount}</span>
      </button>
    </nav>
  );
}

export default Navbar;
