import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Rudex/CartSlice'; // استيراد الأكشن
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id)); 
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id)); 
  };

  const handleRemove = (id: any) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="py-10">
      <div className="container">
        <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
        <Link to="/">go back</Link>
        <div>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="border-b py-3">
                <p>{item.title}</p>
                <p>{item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <p className="mx-2">{item.quantity}</p>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
                <p>Stock available: {item.stock}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
