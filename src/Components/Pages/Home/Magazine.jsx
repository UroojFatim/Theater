import React from "react";

const   Magazine = () => {
  return (
    <div className=" py-12 bg-gray-900">
        <div className="text-center">
     {/* Responsive Heading */}
     <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 relative inline-block">
          Magazine 
          {/* Underline element */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-6 w-24 h-1 bg-orange-500 rounded"></span>
        </h2>
        </div>


      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        
        {/* Left Thumbnails */}
        <div className="hidden md:flex flex-col space-y-4">
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/vp1.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/vp6.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/vp5.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/vp3.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
        </div>
        
        {/* Main Featured Content */}
        <div className="relative mx-4">
          <div className="w-full h-full max-w-lg mx-auto bg-black rounded-lg overflow-hidden relative">
            {/* Main Image */}
            <img
              src="https://www.webstrot.com/html/moviepro/html/images/content/vp7.jpg"
              alt="Main Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Thumbnails */}
        <div className="hidden md:flex flex-col space-y-4">
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/vp4.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/up7.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/up1.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
          <img src="https://www.webstrot.com/html/moviepro/html/images/content/ws6.jpg" alt="Thumbnail" className="w-28 h-28 object-cover rounded" />
        </div>
      </div>
    </div>
  );
};

export default Magazine;
