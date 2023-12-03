import React from 'react';

const ProductList = ({ products, addToCart, addToWishlist }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div className="card-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary mr-2"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className="btn btn-outline-secondary"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
