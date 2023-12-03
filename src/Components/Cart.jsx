import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-unstyled">
        {cart.map(item => (
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
                onClick={() => removeFromCart(item.id)}
                className="btn btn-danger"
              >
                Remove from Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
