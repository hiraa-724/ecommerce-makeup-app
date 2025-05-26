import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation(); //  prevent navigation
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.info(`${product.name} removed from wishlist!`);
    } else {
      dispatch(addToWishlist(product));
      toast.success(`${product.name} added to wishlist!`);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition duration-300 relative h-full flex flex-col justify-between">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image_link}
            alt={product.name}
            className="w-full h-28 sm:h-36 md:h-48 object-contain rounded mb-3"
          />
        </Link>

        <div className="flex-1">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10">
              {product.name}
            </h3>
          </Link>

          <p className="text-amber-600 font-bold text-sm mt-1">
            ${product.price}
          </p>
        </div>

        <div className="mt-3">
          <button
            onClick={handleAddToCart}
            className="w-full px-4 py-2 bg-amber-300 rounded-full text-xs sm:text-sm font-medium hover:bg-amber-400"
          >
            Add to Cart
          </button>
        </div>

        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 text-red-500 text-xl focus:outline-none"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isInWishlist ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </>
  );
}

export default ProductCard;
