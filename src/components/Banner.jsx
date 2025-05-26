import React from "react";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import BannerCard from "./BannerCard";

function Banner() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <BannerCard
          image={banner1}
          title="Natural and ecological beauty solutions for you!"
          buttonText="Shop Now"
          textColor="text-white"
          buttonStyle="bg-white text-black hover:bg-opacity-90"
        ></BannerCard>

        {/* Card 2 */}

        <BannerCard
          image={banner2}
          title="Products that are only made for you!"
          buttonText="Discover"
          textColor="text-black"
          buttonStyle="bg-black text-white hover:bg-black"
        />
      </div>
    </div>
  );
}

export default Banner;
