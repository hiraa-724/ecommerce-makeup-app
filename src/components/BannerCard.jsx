// components/BannerCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function BannerCard({
  image,
  title,
  buttonText,
  textColor = "text-white",
  buttonStyle = "",
}) {
  const navigate = useNavigate();
  return (
    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-30 transition-all" />
      <div className="relative z-10 h-full flex flex-col items-start p-6 md:p-8">
        <h1
          className={`font-inter text-4xl font-bold mb-3 max-w-2xs ${textColor}`}
        >
          {title}
        </h1>
        <button
          onClick={() => navigate("/search")}
          className={`px-6 py-2 font-medium rounded-full hover:bg-black hover:text-white cursor-pointer transition ${buttonStyle}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BannerCard;
