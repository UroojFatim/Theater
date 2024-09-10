// ShowsPage.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

const languages = ["Urdu", "Hindi", "English"];
const movieTypes = ["Drama", "Comedy", "Mystery", "Musical", "Romantic Drama", "Historical Drama", "Social Drama", "Tragedy"];

const ShowsPage = () => {
  const [filters, setFilters] = useState({
    availability: "All",
    minPrice: "",
    maxPrice: "",
    language: "All",
    movieType: "All"
  });

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const language = queryParams.get('language') || 'All';
    setFilters(prevFilters => ({
      ...prevFilters,
      language
    }));
  }, [location.search]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const filteredShows = shows.filter(show => {
    const price = parseFloat(show.price.slice(1));

    // Only filter by price if both minPrice and maxPrice are provided
    const isPriceInRange = (filters.minPrice === "" && filters.maxPrice === "") ||
      (isNaN(filters.minPrice) || price >= parseFloat(filters.minPrice)) &&
      (isNaN(filters.maxPrice) || price <= parseFloat(filters.maxPrice));

    return (
      (filters.availability === "All" || show.availability === filters.availability) &&
      (filters.language === "All" || show.language === filters.language) &&
      (filters.movieType === "All" || show.movieType === filters.movieType) &&
      isPriceInRange
    );
  });
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="lg:w-60 bg-black text-white p-4 lg:pt-32 lg:flex-shrink-0">
        <h2 className="text-xl font-semibold mb-4 border-b border-orange-500 pb-2">Filters</h2>

        {/* Availability Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Availability</h3>
          <select
            className="mt-1 block w-full border border-orange-500 rounded-md shadow-sm bg-black text-white focus:ring-orange-500 focus:border-orange-500"
            onChange={(e) => handleFilterChange("availability", e.target.value)}
            value={filters.availability}
          >
            <option value="All">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Price Range</h3>
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              type="number"
              placeholder="Min"
              className="block w-full border border-orange-500 rounded-md shadow-sm bg-black text-white focus:ring-orange-500 focus:border-orange-500"
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              value={filters.minPrice}
            />
            <input
              type="number"
              placeholder="Max"
              className="block w-full border border-orange-500 rounded-md shadow-sm bg-black text-white focus:ring-orange-500 focus:border-orange-500"
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              value={filters.maxPrice}
            />
          </div>
        </div>

        {/* Language Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Language</h3>
          <select
            className="mt-1 block w-full border border-orange-500 rounded-md shadow-sm bg-black text-white focus:ring-orange-500 focus:border-orange-500"
            onChange={(e) => handleFilterChange("language", e.target.value)}
            value={filters.language}
          >
            <option value="All">All</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>

        {/* Movie Type Filter */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Type</h3>
          <select
            className="mt-1 block w-full border border-orange-500 rounded-md shadow-sm bg-black text-white focus:ring-orange-500 focus:border-orange-500"
            onChange={(e) => handleFilterChange("movieType", e.target.value)}
            value={filters.movieType}
          >
            <option value="All">All</option>
            {movieTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </aside>

      {/* Shows Grid */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-900">
        <div className='text-center mb-8'>
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 relative inline-block">
            Theater Shows
            <span className="block w-16 h-1 bg-orange-500 mt-4 mx-auto rounded"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-4 xl:gap-8">
          {filteredShows.map(show => (
            <Link
              key={show.id}
              to={`/show/${show.id}`}
              className="relative text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-orange-600"
            >
              <div className="relative group h-40 sm:h-48 lg:h-52">
                <img
                  src={show.image1}
                  alt={show.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={show.image2}
                  alt={show.name}
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="p-3 sm:p-4 space-y-1">
                <h2 className="text-lg sm:text-xl font-semibold">{show.name}</h2>
                <p className="text-sm text-gray-200">{show.description}</p>
                <p className="text-sm text-gray-200"><strong>Language:</strong> {show.language}</p>
                <p className="text-sm text-gray-200"><strong>Type:</strong> {show.movieType}</p>
                <p className="text-sm text-gray-200"><strong>Price:</strong> {show.price}</p>
                <p className={`text-sm font-semibold ${show.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                  <strong>Availability:</strong> {show.availability}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShowsPage; 