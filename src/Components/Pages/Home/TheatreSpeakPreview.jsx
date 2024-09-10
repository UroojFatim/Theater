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
    <section className="py-12 px-4 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Theatre Speak Highlights</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`flex-none w-full transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white text-black p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{review.author}</h3>
                  <div className="text-yellow-500 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="mb-4">{review.content}</p>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &#9654;
          </button>
        </div>
        <button
          onClick={handleButtonClick}
          className="mt-8 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
        >
          See More Reviews
        </button>
      </div>
    </section>
  );
};

export default TheatreSpeakPreview;
