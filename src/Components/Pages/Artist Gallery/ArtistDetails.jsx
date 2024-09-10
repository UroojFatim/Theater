import React from 'react';
import { useParams } from 'react-router-dom';

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

const ArtistDetails = () => {
  const { id } = useParams();
  const artist = artists.find((artist) => artist.id === parseInt(id, 10));

  if (!artist) {
    return <p className="text-white text-center mt-10">Artist not found.</p>;
  }

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row border-2 border-orange-600">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-80 object-cover md:h-full "
          />
        </div>
        
        {/* Details Section */}
        <div className="p-6 md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4">{artist.name}</h2>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Genre:</span> {artist.genre}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Language:</span> {artist.language}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Popularity:</span> {artist.popularity}
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Biography:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Notable Works:</span> Notable work details go here.
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Upcoming Performances:</span> Details of upcoming performances go here.
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold text-white">Awards & Achievements:</span> Details of awards and achievements go here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetails;
