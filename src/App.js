import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import './App.css';



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log('API Response:', response.data);
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
  };

  const moveFromWishlistToCart = (product) => {
    removeFromWishlist(product.id);
    addToCart(product);
  };
  return (
    <Router>
    <div className="app-container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addToCart={addToCart} addToWishlist={addToWishlist} />}
        />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route
          path="/wishlist"
          element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} moveFromWishlistToCart={moveFromWishlistToCart} />}
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
