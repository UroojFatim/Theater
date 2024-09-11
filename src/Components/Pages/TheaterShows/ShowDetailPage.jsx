// ShowDetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const shows = [ 
    {
      id: 1,
      language: "Urdu",
      name: "Shaam-e-Ghazal",
      description: "A musical evening featuring the best of Urdu poetry and classical music.",
      image1: "https://i.ytimg.com/vi/ArGziXx4Ots/maxresdefault.jpg",
      image2: "https://i.scdn.co/image/ab67616d0000b2739fed5e1bc35299b180980a2a",
      availability: "Out of stock",
      price: "$12",
      movieType: "Musical",
    },  
    {
      id: 2,
      language: "Hindi",
      name: "Mast mein rehne ka",
      description: "A delightful comedy that reflects on the everyday lives of common people in India.",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugzWIlkZvaoX8zkA9cNn7Du7gwz1enUxT4A&s",
      image2: "https://i.ytimg.com/vi/S-oHvbDfU4U/maxresdefault.jpg",
      availability: "Out of Stock",
      price: "$10",
      movieType: "Comedy",
    },
    {
      id: 3,
      language: "English",
      name: "The Phantom Spectacle",
      description: "A thrilling mystery play filled with suspense and unexpected twists.",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgLuVMFTf5bvnbg5dBX9k0Eo0edb8j9bebw&s",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcIiWpBYAT6dt90AbFL2aZuqEVTL1AAhNw&s",
      availability: "In Stock",
      price: "$20",
      movieType: "Mystery",
    },
    {
      id: 4,
      language: "Urdu",
      name: "Dastaan-e-Ishq",
      description: "A heart-touching story set in the Mughal era, exploring themes of love and sacrifice.",
      image1: "https://i.ytimg.com/vi/ecZ2Kme3HTo/maxresdefault.jpg",
      image2: "https://i.ytimg.com/vi/HsITzPiLpgs/sddefault.jpg",
      availability: "In Stock",
      price: "$15",
      movieType: "Drama",
    },
    {
      id: 5,
      language: "Hindi",
      name: "Chand Ke Paar",
      description: "A romantic drama exploring the complexities of modern-day relationships.",
      image1: "https://i.ytimg.com/vi/9jmpo-Mz4YE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAcOATClSyz0iklJAHbMxIjFyoiDg",
      image2: "https://i.scdn.co/image/ab67616d00001e029a2902f67016e8d31b78b416",
      availability: "In Stock",
      price: "$18",
      movieType: "Romantic Drama",
    },
    {
      id: 6,
      language: "English",
      name: "Shakespeare in Love",
      description: "A retelling of the classic love story with a modern twist.",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_17CJe2nYT--oL-z1N6b2GzGEhYiLD0zvw&s",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjunyXsuSVasLMeU_hh_5IvTydoG1K5FDwrA&s",
      availability: "Out of Stock",
      price: "$25",
      movieType: "Romantic Comedy",
    },
    {
      id: 7,
      language: "Urdu",
      name: "Khuda Ki Basti",
      description: "A social drama highlighting the struggles of the lower class in society.",
      image1: "https://image.tmdb.org/t/p/original/sVBVM2sydq9AIpHsUSd9OhDqED1.jpg",
      image2: "https://www.thenews.com.pk/assets/uploads/tns/2021-06-06/845150_7448232_tnsi-51_tns.jpg",
      availability: "In Stock",
      price: "$10",
      movieType: "Social Drama",
    },
    {
      id: 8,
      language: "Hindi",
      name: "Aam Aadmi",
      description: "A political satire focusing on the life of a common man.",
      image1: "https://m.media-amazon.com/images/M/MV5BYWU2NTczMzctMTAyYi00NTBmLTk5YWUtOWFhNmIzOTc3NzQ1XkEyXkFqcGdeQXVyODQwMDcwNDY@._V1_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BYzcyMWEyNTItZTg5Ni00ZTc0LWE1YzEtNmNlODhlOTc3ZmQzXkEyXkFqcGdeQXVyODQwMDcwNDY@._V1_.jpg",
      availability: "In Stock",
      price: "$13",
      movieType: "Satire",
    },
    {
      id: 9,
      language: "English",
      name: "Macbeth Unleashed",
      description: "A modern adaptation of Shakespeare's Macbeth with a dark, thrilling twist.",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkH7CT-K-LMXhJckFCZM2b8mOK1HyjpPiNQ&s",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYQfgOlsFfE2pjuhPda3T2YbNf7OwF8NmEeg&s",
      availability: "In Stock",
      price: "$22",
      movieType: "Tragedy",
    },
    {
      id: 10,
      language: "Urdu",
      name: "Mirza Ghalib",
      description: "A play exploring the life and works of the famous Urdu poet Mirza Ghalib.",
      image1: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/Mirza-Ghalib-306x393.jpg",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw10VxCdwQ8jXLV3rxni8lvfr7c0qW5RPo4Q&s",
      availability: "In Stock",
      price: "$15",
      movieType: "Biographical",
    },
    {
      id: 11,
      language: "Hindi",
      name: "Swadesh Ki Mitti",
      description: "A patriotic drama about the freedom struggle in India.",
      image1: "https://i.pinimg.com/originals/c0/cd/40/c0cd40eb2c256d5d4475e29ab1f08f9c.jpg",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_ppv4IGt6VIxufpmKwRzSZUj-U0mRidCTQ&s",
      availability: "Out of Stock",
      price: "$16",
      movieType: "Historical Drama",
    },
    {
      id: 12,
      language: "English",
      name: "A Midsummer Night's Dream",
      description: "A whimsical comedy set in a mystical forest, featuring magical beings and mischief.",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeRoreSIO3sk6rz6ZWVpm_YAj0U9v99JbQGQ&s",
      image2: "https://m.media-amazon.com/images/M/MV5BZjI5YzcxZmUtMWUzOC00MGJmLWFjODgtYTlhNTViNjFmYzE5XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg",
      availability: "In Stock",
      price: "$18",
      movieType: "Comedy",
    },
  ];

const ShowDetailPage = () => {
  const { id } = useParams();
  const show = shows.find(show => show.id === parseInt(id, 10));

  if (!show) {
    return <p>Show not found!</p>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-900 min-h-screen text-white lg:mt-16 md:mt-11 mt-10">

        <div className='text-center my-10'>
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 relative inline-block">
          {show.name}
            <span className="block w-16 h-1 bg-orange-500 mt-4 mx-auto rounded"></span>
          </h2>
        </div>  
        
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={show.image1}
            alt={show.name}
            className="w-full h-80 object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-6">
          {/* <h1 className="text-3xl font-bold mb-4">{show.name}</h1> */}
          <p className="text-lg mb-2"><strong>Description:</strong> {show.description}</p>
          <p className="text-lg mb-2"><strong>Language:</strong> {show.language}</p>
          <p className="text-lg mb-2"><strong>Type:</strong> {show.movieType}</p>
          <p className="text-lg mb-2"><strong>Price:</strong> {show.price}</p>
          <p className={`text-lg font-semibold ${show.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}>
            <strong>Availability:</strong> {show.availability}
          </p>
        </div>
      </div>

      <div className='text-center my-10'>
      <Link to="/Theater" className="text-white px-5 py-2 rounded-2xl inline-block border-2 border-orange-600 hover:bg-orange-600">Back to Shows</Link>
      </div>
    </div>
  );
};

export default ShowDetailPage;
