// src/components/OurPartner.jsx
import React from 'react';

const OurPartner = () => {
  // Array of image URLs
  const brandImages = [
    'https://www.webstrot.com/html/moviepro/html/images/content/p1.jpg',
    'https://www.webstrot.com/html/moviepro/html/images/content/p2.jpg',
    'https://www.webstrot.com/html/moviepro/html/images/content/p3.jpg',
    'https://www.webstrot.com/html/moviepro/html/images/content/p4.jpg',
    'https://www.webstrot.com/html/moviepro/html/images/content/p5.jpg',
    'https://www.webstrot.com/html/moviepro/html/images/content/p6.jpg',
    // Add more image URLs as needed
  ];

  return (
    <section className="py-12 px-4 bg-black ">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-8 text-white relative inline-block">
          Our Partners
          <span className="block absolute inset-x-0 -bottom-5 mx-auto h-1 w-20 bg-orange-500 rounded-full"></span>
        </h2>
        <div className="flex flex-wrap justify-around py-8">
          {brandImages.map((imageUrl, index) => (
            <div key={index} className="w-36 h-36 flex items-center justify-center bg-white shadow-md rounded-full p-4">
              <img 
                src={imageUrl} 
                alt={`Brand ${index + 1}`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
