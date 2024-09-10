import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TheatreSpeakPreview = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Theaterspeaks');
  };

  // Sample reviews
  const reviews = [
    {
      id: 1,
      author: 'John Doe',
      rating: 4,
      content: 'An exceptional performance that captivated the audience from start to finish.',
      date: '2024-09-01',
    },
    {
      id: 2,
      author: 'Emma Watson',
      rating: 5,
      content: 'A breathtaking musical with outstanding performances and stunning visuals.',
      date: '2024-08-20',
    },
    // Add more reviews as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 px-4 bg-gray-900 text-white relative">
      <div className="container mx-auto text-center">
        {/* Responsive Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 relative inline-block py-6">
          Theatre Speak Highlights
          <span className="block w-16 h-1 bg-orange-500 mt-4 mx-auto rounded"></span>
        </h2>

        {/* Testimonials Section */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition"
          >
            &#9664;
          </button>

          {/* Testimonial Cards */}
          <div className="w-full max-w-lg md:max-w-3xl lg:max-w-5xl overflow-hidden relative">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {reviews.map((review) => (
                <div key={review.id} className="flex-none w-full px-4">
                  <div className="bg-white text-black p-6 rounded-lg shadow-lg mx-auto w-full sm:w-96 md:w-full">
                    <h3 className="text-xl font-semibold mb-2">{review.author}</h3>
                    <div className="text-orange-600 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-orange-600">★</span>
                      ))}
                    </div>
                    <p className="mb-4 text-sm sm:text-base">{review.content}</p>
                    <span className="text-xs text-gray-600">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition"
          >
            &#9654;
          </button>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={handleButtonClick}
          className="mt-8 bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition"
        >
          See More Reviews
        </button>
      </div>
    </section>
  );
};

export default TheatreSpeakPreview;
