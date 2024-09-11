import React from "react";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <div className="relative bg-cover bg-center h-screen md:h-[80vh] flex items-center justify-center" style={{ backgroundImage: `url('https://theme190-tickets.myshopify.com/cdn/shop/files/main_image.png?v=1708544333&width=1750')` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Here we know how to make you <br className="hidden md:block" /> concentrate only on the enjoyable
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-6 max-w-2xl mx-auto">
          We are not just a convenient ticket office, we are purveyors of good vibes.
        </p>
        <Link
          to="/Theater"
          className="inline-block px-8 py-4 text-sm md:text-md font-semibold bg-orange-500 text-white rounded hover:bg-white hover:text-orange-500 transition duration-300"
        >
          SHOP NOW →
        </Link>
      </div>


    </div>
  );
};

export default ShopNow;
