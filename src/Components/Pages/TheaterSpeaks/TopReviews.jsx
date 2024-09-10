// src/components/TopReviews.jsx
import React, { useState } from 'react';

const TopReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'John Doe',
      rating: 4,
      genre: 'Drama',
      date: '2024-09-01',
      content: 'An exceptional performance that captivated the audience from start to finish.',
      likes: 15,
      dislikes: 2,
      comments: [
        { id: 1, text: 'I agree, it was fantastic!', author: 'Jane Smith' }
      ]
    },
    {
      id: 2,
      author: 'Emma Watson',
      rating: 5,
      genre: 'Musical',
      date: '2024-08-20',
      content: 'A breathtaking musical with outstanding performances and stunning visuals.',
      likes: 25,
      dislikes: 1,
      comments: []
    },
    // Add more review objects as needed
  ]);

  const [newReview, setNewReview] = useState({
    author: '',
    content: '',
    rating: 0
  });

  const handleStarClick = (star) => {
    setNewReview({ ...newReview, rating: star });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    // Add new review to the list (for demonstration, we'll just log it)
    console.log(newReview);
    // Clear form after submission
    setNewReview({
      author: '',
      content: '',
      rating: 0
    });
  };

  return (
    <section className="py-12 px-4 bg-black text-orange-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Top Reviews</h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-orange-400">Submit Your Review</h3>
          <form onSubmit={handleSubmitReview} className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-orange-300" htmlFor="author">Name</label>
              <input 
                type="text" 
                id="author" 
                name="author" 
                value={newReview.author}
                onChange={handleInputChange}
                className="w-full border border-gray-700 rounded-lg p-2 bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-orange-300" htmlFor="content">Review</label>
              <textarea 
                id="content" 
                name="content" 
                rows="4" 
                value={newReview.content}
                onChange={handleInputChange}
                className="w-full border border-gray-700 rounded-lg p-2 bg-gray-800 text-white"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-orange-300">Rating</label>
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`cursor-pointer text-xl ${i < newReview.rating ? 'text-yellow-500' : 'text-gray-500'}`}
                    onClick={() => handleStarClick(i + 1)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <button 
              type="submit" 
              className="bg-orange-500 text-black py-2 px-4 rounded-lg hover:bg-orange-600 w-full"
            >
              Submit Review
            </button>
          </form>
        </div>

        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-orange-400">{review.author}</h3>
                <div className="text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="mb-4 text-gray-300">{review.content}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{review.date}</span>
                <div className="flex items-center space-x-4">
                  <button className="text-orange-400 hover:text-orange-500">Like ({review.likes})</button>
                  <button className="text-red-400 hover:text-red-500">Dislike ({review.dislikes})</button>
                </div>
              </div>
              {review.comments.length > 0 && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold mb-2 text-orange-400">Comments:</h4>
                  <ul>
                    {review.comments.map((comment) => (
                      <li key={comment.id} className="mb-2 text-gray-300">
                        <strong>{comment.author}:</strong> {comment.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopReviews;
