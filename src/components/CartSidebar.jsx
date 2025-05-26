import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice"; // Update path if needed
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
            <div key={item.id} className="flex justify-between items-center">
              <img
                src={item.image_link}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <button
            onClick={() => dispatch(clearCart())}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
