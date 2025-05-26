import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoMdBasket } from "react-icons/io";
import CartSidebar from "./CartSidebar";
import WishlistBar from "./WishlistBar";
import { useSelector } from "react-redux";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Search", path: "/search" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-200 shadow-md">
        <div className="flex items-center justify-between px-8 md:px-16 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="font-inter font-bold text-2xl md:text-3xl text-black"
          >
            Verily
          </Link>

          {/* Hamburger (mobile only) */}
          <div
            className="md:hidden text-2xl text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-black text-sm md:text-md font-semibold font-inter">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-amber-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-6 text-xl text-black relative">
            <FaHeart
              onClick={() => setIsWishlistOpen(true)}
              className="hover:text-red-500 cursor-pointer transition"
            />
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <IoMdBasket className="hover:text-yellow-500 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-100 text-black text-sm font-semibold font-inter">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block hover:text-amber-600"
                onClick={() => setIsMobileMenuOpen(false)} // close menu on link click
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Icons */}
            <div className="flex items-center gap-6 pt-2 text-xl">
              <FaHeart
                onClick={() => {
                  setIsWishlistOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="hover:text-red-500 cursor-pointer transition"
              />
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <IoMdBasket className="hover:text-yellow-500 transition" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sidebars */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistBar
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
    </>
  );
}

export default Navbar;
