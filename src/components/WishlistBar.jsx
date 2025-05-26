import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { FaTimes } from "react-icons/fa";

function WishlistBar({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Wishlist</h2>
        <button
          onClick={onClose}
          className="text-xl text-gray-600 hover:text-gray-900"
        >
          <FaTimes />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <img
                src={item.image_link}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700 ml-2"
                aria-label={`Remove ${item.name} from wishlist`}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WishlistBar;
