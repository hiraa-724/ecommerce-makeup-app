import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedCategory, setSelectedCategory] = useState("blush");
  // const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const categories = [
    "lipstick",
    "foundation",
    "mascara",
    "eyeliner",
    "blush",
    // "shampoo",
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${selectedCategory}`
      );
      const allProducts = response.data;

      // Get unique brands
      const allBrands = Array.from(
        new Set(allProducts.map((p) => p.brand).filter(Boolean))
      );

      setBrands(allBrands);
      setProducts(allProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const filteredProducts = products
    .filter(
      (product) =>
        product.price &&
        parseFloat(product.price) >= priceRange[0] &&
        parseFloat(product.price) <= priceRange[1]
    )
    .filter(
      (product) => selectedBrand === "all" || product.brand === selectedBrand
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  const handleAddToCart = (product) => {
    // console.log("Added to cart:", product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <>
      <div className="min-h-screen bg-white px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-8 md:col-span-1">
            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-2">Select Price</h3>
              <Slider
                range
                min={0}
                max={50}
                step={1}
                value={priceRange}
                onChange={(val) => setPriceRange(val)}
              />
              <div className="flex justify-between text-sm mt-1">
                <span>{priceRange[0]}€</span>
                <span>{priceRange[1]}€</span>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-semibold mb-2">Makeup</h3>
              <ul className="text-sm space-y-1">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={`cursor-pointer ${
                      selectedCategory === cat
                        ? "font-bold text-black"
                        : "text-gray-600"
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Brands:</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="border px-2 py-1 text-sm"
                >
                  <option value="all">All</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Sort by:</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border px-2 py-1 text-sm"
                >
                  <option value="asc">Price low to high</option>
                  <option value="desc">Price high to low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  index={index}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
