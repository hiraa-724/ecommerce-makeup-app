import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "../features/cart/cartSlice";
import { IoMdClose } from "react-icons/io";

function CartSidebar({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose}>
          <IoMdClose className="text-xl" />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center gap-4"
            >
              <img
                src={item.image_link}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  ${item.price} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
                {/* Quantity controls */}
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-2 py-1 bg-gray-200 text-sm font-bold rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-2 py-1 bg-gray-200 text-sm font-bold rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm hover:text-red-600 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <p className="font-bold text-lg">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button
            onClick={() => dispatch(clearCart())}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-2"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
