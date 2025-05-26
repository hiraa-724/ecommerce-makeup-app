import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-cover bg-center min-h-[90vh] flex items-center px-4 py-12 sm:py-20"
    >
      <div className="text-black w-full max-w-lg text-center sm:text-left px-2 sm:px-10">
        <h1 className="font-inter text-3xl sm:text-5xl font-bold leading-snug mb-4">
          The new lineup you'll swear by for dullness, dryness and breakouts.
        </h1>
        <p className="text-sm sm:text-base leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          reprehenderit doloremque officiis, illum deserunt.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="px-6 py-3 bg-amber-300 text-black font-semibold rounded-full cursor-pointer hover:text-white hover:bg-black transition duration-300"
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default Hero;

// old nav code

// import React from "react";
// import heroBg from "../assets/images/hero-bg.jpg";
// import { useNavigate } from "react-router-dom";

// function Hero() {
//   const navigate = useNavigate();

//   return (
//     <div
//       style={{ backgroundImage: `url(${heroBg})` }}
//       className="bg-cover bg-center h-screen flex items-center px-4 py-10"
//     >
//       <div className="text-black max-w-lg w-full px-10">
//         <h1 className="font-inter text-4xl sm:text-5xl font-bold leading-tight mb-4">
//           The new lineup you'll swear by for dullness, dryness and breakouts.
//         </h1>
//         <p className="text-base leading-relaxed mb-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
//           reprehenderit doloremque officiis, illum deserunt.
//         </p>
//         <button
//           onClick={() => navigate("/about")}
//           className="px-6 py-3 bg-amber-300 text-black font-semibold rounded-full cursor-pointer hover:text-white hover:bg-black transition duration-300"
//         >
//           See more
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;
