import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://images-platform.99static.com//cTANeLvHk_EibhtgJcTQG_HMyko=/0x599:601x1200/fit-in/500x500/99designs-contests-attachments/101/101270/attachment_101270547" alt="Logo" />
      </div>
      <div className="navbar">
      <Link to="/" className="home-btn">Home</Link>
      <Link to="/cart" className="cart-btn">Cart</Link>
      <Link to="/wishlist" className="wishlist-btn">Wishlist</Link>
    </div>
    </header>
  );
};

export default Header;
