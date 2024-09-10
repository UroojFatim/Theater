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
    <section className="py-12 px-4 bg-black text-white relative">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 relative inline-block py-10">
          Theatre Speak Highlights
          <span className="block w-16 h-1 bg-orange-500 mt-2 mx-auto rounded"></span>
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review) => (
              <div key={review.id} className="flex-none w-full">
                <div className="bg-white text-black p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{review.author}</h3>
                  <div className="text-orange-600 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-orange-600">★</span>
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition"
          >
            &#9654;
          </button>
        </div>
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
