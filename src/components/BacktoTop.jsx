import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 text-black p-3 rounded-full shadow-md hover:bg-gray-700 transition z-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </>
  );
}

export default BacktoTop;
