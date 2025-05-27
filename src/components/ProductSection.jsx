import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import BannerCard from "./BannerCard";

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
      )
      .then((res) => setProducts(res.data.slice(0, 8)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-4 sm:px-6 py-10 max-w-7xl mx-auto w-full ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-inter font-bold">Clean beauty</h2>
        <Link to="/search">
          <button className="px-4 py-2 bg-amber-300 rounded-full text-sm font-medium hover:bg-amber-400 transition">
            See More
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
