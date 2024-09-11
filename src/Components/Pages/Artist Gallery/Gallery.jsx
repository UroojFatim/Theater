import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const artists = [
    {
      id: 1,
      name: 'Artist 1',
      genre: 'Jazz',
      language: 'English',
      popularity: 'High',
      imageUrl: 'https://www.webstrot.com/html/moviepro/html/images/content/gallery/g4.jpg',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Artist 2',
      genre: 'Rock',
      language: 'Spanish',
      popularity: 'Medium',
      imageUrl: 'https://assets.teenvogue.com/photos/5776b4ae924ce46478f244d1/master/pass/country-18.jpg',
      gender: 'Female',
    },
    {
      id: 3,
      name: 'Artist 3',
      genre: 'Classical',
      language: 'French',
      popularity: 'Low',
      imageUrl: 'https://www.webstrot.com/html/moviepro/html/images/content/gallery/g2.jpg',
      gender: 'Male',
    },
    {
      id: 4,
      name: 'Artist 4',
      genre: 'Pop',
      language: 'English',
      popularity: 'High',
      imageUrl: 'https://media.gq.com/photos/5582d76209f0bee56440264f/master/w_1600%2Cc_limit/entertainment-2014-10-9-rising-female-artists-06-jhene-aiko.jpg',
      gender: 'Female',
    },
    {
      id: 5,
      name: 'Artist 5',
      genre: 'Electronic',
      language: 'German',
      popularity: 'Medium',
      imageUrl: 'https://www.webstrot.com/html/moviepro/html/images/content/gallery/g5.jpg',
      gender: 'Male',
    },
    {
      id: 6,
      name: 'Artist 6',
      genre: 'Hip Hop',
      language: 'English',
      popularity: 'High',
      imageUrl: 'https://thedemostop.com/blogs/wp-content/uploads/2024/02/famous-female-singers-Taylor-swift-img.jpg',
      gender: 'Female',
    },
    {
      id: 7,
      name: 'Artist 7',
      genre: 'Blues',
      language: 'Spanish',
      popularity: 'Low',
      imageUrl: 'https://assets.capitalfm.com/2022/43/ed-sheeran--1666953393-editorial-short-form-0.jpg',
      gender: 'Male',
    },
    {
      id: 8,
      name: 'Artist 8',
      genre: 'Reggae',
      language: 'English',
      popularity: 'Medium',
      imageUrl: 'https://www.rollingstone.com/wp-content/uploads/2019/08/Billie.jpg',
      gender: 'Female',
    },
    {
      id: 9,
      name: 'Artist 9',
      genre: 'Country',
      language: 'English',
      popularity: 'Medium',
      imageUrl: 'https://i.insider.com/5ac3b14a7a74af20008b45fe?width=800&format=jpeg&auto=webp',
      gender: 'Male',
    },
    {
      id: 10,
      name: 'Artist 10',
      genre: 'Folk',
      language: 'Italian',
      popularity: 'Low',
      imageUrl: 'https://people.com/thmb/EdxAnx6LY2WA88atpKOSaE2gnl8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(665x0:667x2)/gettyimages-1155989173-2000-4b47cce0a36f4fadaf3c2c896919427b.jpg',
      gender: 'Female',
    },
    {
      id: 11,
      name: 'Artist 11',
      genre: 'Metal',
      language: 'English',
      popularity: 'High',
      imageUrl: 'https://www.gannett-cdn.com/presto/2021/05/12/PNAS/fa0dfac4-a37b-40f7-b218-42123e164085-01e.JPG',
      gender: 'Male',
    },
    {
      id: 12,
      name: 'Artist 12',
      genre: 'Indie',
      language: 'French',
      popularity: 'Medium',
      imageUrl: 'https://themusicessentials.com/wp-content/uploads/2017/07/taylor-swift-696x390.jpg',
      gender: 'Female',
    },
  ];
  

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  // Filter artists based on the selected filter
  const filteredArtists = artists.filter((artist) => {
    if (filter === 'All') return true;
    return artist.gender === filter;
  });

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-center lg:mt-16 md:mt-11 mt-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10 text-center relative inline-block">
      OUR ARTIST GALLERY  
        <span className="block w-16 h-1 bg-orange-500 mt-4 mx-auto rounded"></span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-10">
        {['All', 'Male', 'Female'].map((option) => (
          <button
            key={option}
            className={`px-6 py-2 mx-2 rounded-full font-semibold transition-all duration-300 ${
              filter === option ? 'bg-orange-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredArtists.map((artist) => (
          <Link to={`/artist/${artist.id}`} key={artist.id} className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={artist.imageUrl}
              alt={artist.name}
              className="w-full h-96 object-cover transform transition-transform duration-300 group-hover:scale-105 border-2 border-orange-600 rounded-xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
