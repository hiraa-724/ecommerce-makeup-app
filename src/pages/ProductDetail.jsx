import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import ProductCard from "../components/ProductCard";
import ProductSection from "../components/ProductSection";
import { toast } from "react-toastify";

function ProductDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const increaseQty = () => setQuantity((qty) => qty + 1);
  const decreaseQty = () => setQuantity((qty) => (qty > 1 ? qty - 1 : 1));

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image_link: product.image_link,
      quantity,
    };
    dispatch(addToCart(cartItem));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.image_link}
            alt={product.name}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 space-y-4">
          <p className="uppercase text-yellow-500 text-sm">
            {product.category || "shampoo"}
          </p>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-black">
            {product.price_sign || "$"}
            {product.price}
          </p>

          {/* Quantity + Button */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-yellow-400 hover:bg-black transition duration-300 text-white font-semibold px-6 py-2 rounded"
            >
              Add to cart
            </button>
          </div>

          <p className="text-gray-600 leading-relaxed mt-4">
            {product.description || "No description available."}
          </p>
        </div>
      </div>
      <ProductSection />
      <Footer />
    </>
  );
}

export default ProductDetail;
