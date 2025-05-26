import React, { useState } from "react";
import ProductSearch from "../components/ProductSearch";
import Navbar from "../components/Navbar";
import WishlistBar from "../components/WishlistBar";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";

function Category() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  return (
    <div>
      <Navbar onWishlistToggle={() => setIsWishlistOpen((prev) => !prev)} />
      <ProductSearch />
      <WishlistBar
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default Category;
