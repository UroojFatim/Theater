import React from 'react';
import { Link } from 'react-router-dom';

// Define popular artists to spotlight
const popularArtists = [
  {
    id: 1,
    name: 'Artist 1',
    genre: 'Jazz',
    imageUrl: 'https://www.webstrot.com/html/moviepro/html/images/content/gallery/g4.jpg',
  },
  {
    id: 6,
    name: 'Artist 6',
    genre: 'Hip Hop',
    imageUrl: 'https://thedemostop.com/blogs/wp-content/uploads/2024/02/famous-female-singers-Taylor-swift-img.jpg',
  },
];

const ArtistSpotlight = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white text-center" >
      <div className="container mx-auto">
        {/* Responsive Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 relative inline-block py-6">
        Artist Spotlight
          <span className="block w-16 h-1 bg-orange-500 mt-4 mx-auto rounded"></span>
        </h2>
        
        {/* Responsive Grid Layout for Artists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {popularArtists.map((artist) => (
            <div key={artist.id} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-96 object-cover mb-4 rounded-lg border-2 border-orange-600"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-orange-400">{artist.name}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4">{artist.genre}</p>
              <Link
                to={`/artist/${artist.id}`}
                className="bg-orange-500 py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <Link
            to="/artist-gallery"
            className="bg-orange-500 py-2 px-6 rounded-lg hover:bg-transparent border-2 border-orange-500 transition duration-300"
          >
            Explore Full Artist Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
