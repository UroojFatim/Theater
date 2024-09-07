// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

// Array of objects containing images and dynamic headings
const slides = [
    {
        image: "https://uiparadox.co.uk/public/templates/animeloop/v2/demo/assets/media/banner/banner-bg-6.png",
        heading: "Welcome to Our World",
    },
    {
        image: "https://uiparadox.co.uk/public/templates/animeloop/v2/demo/assets/media/banner/banner-bg-4.png",
        heading: "Innovate with Passion",
    },
    {
        image: "https://uiparadox.co.uk/public/templates/animeloop/v2/demo/assets/media/banner/banner-bg-7.png",
        heading: "Unleash Your Potential",
    },
];

const Hero = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const { image, heading } = slides[currentSlideIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                />
            ))}

            {/* Text Overlay - Top Left Side */}
            <div className="absolute top-10 left-5 md:top-20 md:left-20 flex flex-col space-y-4 max-w-xs md:max-w-md lg:max-w-3xl text-left">
                {/* Dynamic Heading */}
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold drop-shadow-md">
                    {heading}
                </h1>

                {/* Static Text */}
                <p className="text-white text-sm sm:text-base md:text-lg drop-shadow-md">
                    Discover our unique range of services and solutions.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-2">
                    <button className="bg-orange-600 text-white px-4 py-2 border-orange-600 rounded-md shadow hover:bg-transparent hover:border">
                        Get Started
                    </button>
                    <button className="text-white border-orange-600 font-semibold px-4 py-2 border rounded-md shadow hover:bg-orange-600 hover:text-white hover:border-orange-600">
                        Learn More
                    </button>
                    <button className="text-white border-orange-600 font-semibold px-4 py-2 border rounded-md shadow hover:bg-orange-600 hover:text-white hover:border-orange-600">
                        Contact Us
                    </button>
                </div>

                {/* Static Date */}
                <p className="text-white text-xs sm:text-sm md:text-base xl:text-3xl font-bold drop-shadow-md">
                    September 5, 2024
                </p>
            </div>

            {/* Static Content - Bottom Right Side */}
            <div className="absolute bottom-10 right-5 md:bottom-20 md:right-20 max-w-xs text-right">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-md mb-2">Movies Summary</h2>
                <p className="text-white text-xs sm:text-sm md:text-base drop-shadow-md mb-4">
                    At vero eos et accusamus et iusto odio <br />
                    dignissimos ducimus qui blanditiis
                    <br />
                    praesentium voluptatum deleniti atque
                    <br />
                    corrupti quos dolores et quas molestias
                    <br />
                    excepturi sint occaecati cupiditate non
                    <br />
                    provident, similique sunt in culpa qui officia
                    <br />
                    deserunt mollitia animi, id est laborum et
                    <br />
                    dolorum fuga. Et harum quidem rerum facilis
                    <br />
                    est et expedita distinctio.
                </p>
                <button className="text-white text-base sm:text-xl md:text-2xl border-2 border-orange-600 px-4 py-2 rounded-md shadow hover:bg-orange-600 w-full">
                    Play Now
                </button>
            </div>
        </div>
    );
};

export default Hero;
