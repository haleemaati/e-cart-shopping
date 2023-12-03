import React from 'react';

const Wishlist = ({ wishlist, removeFromWishlist, moveFromWishlistToCart }) => {
  return (
    <div>
      <h2>Wishlist</h2>
      <ul className="list-unstyled">
        {wishlist.map(item => (
          <li key={item.id} className="media mb-3">
            <img
              src={item.image}
              alt={item.title}
              className="mr-3"
              style={{ width: '50px', height: '50px' }}
            />
            <div className="media-body">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="btn btn-danger mr-2"
              >
                Remove from Wishlist
              </button>
              <button
                onClick={() => moveFromWishlistToCart(item)}
                className="btn btn-primary"
              >
                Move to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
