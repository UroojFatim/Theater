import React, { useState } from 'react';

// Extended show data with 30 entries
const shows = [
  {
    id: 1,
    language: "Urdu",
    name: "Dastaan-e-Ishq",
    description: "A heart-touching story set in the Mughal era, exploring themes of love and sacrifice.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+1",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$15",
    movieType: "Drama",
  },
  {
    id: 2,
    language: "Hindi",
    name: "Rangmanch Ki Kahani",
    description: "A delightful comedy that reflects on the everyday lives of common people in India.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+1",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "Out of Stock",
    price: "$10",
    movieType: "Comedy",
  },
  {
    id: 3,
    language: "English",
    name: "The Phantom Spectacle",
    description: "A thrilling mystery play filled with suspense and unexpected twists.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+1",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "In Stock",
    price: "$20",
    movieType: "Mystery",
  },
  {
    id: 4,
    language: "Urdu",
    name: "Shaam-e-Ghazal",
    description: "A musical evening featuring the best of Urdu poetry and classical music.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+2",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$12",
    movieType: "Musical",
  },
  {
    id: 5,
    language: "Hindi",
    name: "Chand Ke Paar",
    description: "A romantic drama exploring the complexities of modern-day relationships.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+2",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$18",
    movieType: "Romantic Drama",
  },
  {
    id: 6,
    language: "English",
    name: "Shakespeare in Love",
    description: "A retelling of the classic love story with a modern twist.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+2",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "Out of Stock",
    price: "$25",
    movieType: "Romantic Comedy",
  },
  {
    id: 7,
    language: "Urdu",
    name: "Khuda Ki Basti",
    description: "A social drama highlighting the struggles of the lower class in society.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+3",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$10",
    movieType: "Social Drama",
  },
  {
    id: 8,
    language: "Hindi",
    name: "Aam Aadmi",
    description: "A political satire focusing on the life of a common man.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+3",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$13",
    movieType: "Satire",
  },
  {
    id: 9,
    language: "English",
    name: "Macbeth Unleashed",
    description: "A modern adaptation of Shakespeare's Macbeth with a dark, thrilling twist.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+3",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "In Stock",
    price: "$22",
    movieType: "Tragedy",
  },
  {
    id: 10,
    language: "Urdu",
    name: "Mirza Ghalib",
    description: "A play exploring the life and works of the famous Urdu poet Mirza Ghalib.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+4",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$15",
    movieType: "Biographical",
  },
  {
    id: 11,
    language: "Hindi",
    name: "Swadesh Ki Mitti",
    description: "A patriotic drama about the freedom struggle in India.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+4",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "Out of Stock",
    price: "$16",
    movieType: "Historical Drama",
  },
  {
    id: 12,
    language: "English",
    name: "A Midsummer Night's Dream",
    description: "A whimsical comedy set in a mystical forest, featuring magical beings and mischief.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+4",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "In Stock",
    price: "$18",
    movieType: "Comedy",
  },
  {
    id: 13,
    language: "Urdu",
    name: "Baghban",
    description: "A touching family drama that explores generational conflicts and bonds.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+5",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$14",
    movieType: "Family Drama",
  },
  {
    id: 14,
    language: "Hindi",
    name: "Kalaakar",
    description: "An emotional journey of a struggling artist trying to find his way in life.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+5",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "Out of Stock",
    price: "$12",
    movieType: "Drama",
  },
  {
    id: 15,
    language: "English",
    name: "The Great Escape",
    description: "An intense thriller about a daring escape from a maximum-security prison.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+5",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "In Stock",
    price: "$25",
    movieType: "Thriller",
  },
  {
    id: 16,
    language: "Urdu",
    name: "Naya Zamana",
    description: "A modern drama dealing with issues of technology and societal change.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+6",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$10",
    movieType: "Contemporary Drama",
  },
  {
    id: 17,
    language: "Hindi",
    name: "Janwar",
    description: "A hard-hitting drama about human-animal relationships and the sanctity of life.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+6",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$17",
    movieType: "Drama",
  },
  {
    id: 18,
    language: "English",
    name: "Ocean’s Echo",
    description: "A mysterious journey into the depths of the ocean and the unknown secrets it holds.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+6",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "Out of Stock",
    price: "$30",
    movieType: "Adventure",
  },
  {
    id: 19,
    language: "Urdu",
    name: "Sheherzaad",
    description: "A retelling of the famous Arabian Nights with a modern twist.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+7",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$16",
    movieType: "Fantasy",
  },
  {
    id: 20,
    language: "Hindi",
    name: "Bandhan",
    description: "A play about love, trust, and the bonds that hold us together.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+7",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$15",
    movieType: "Romantic Drama",
  },
  {
    id: 21,
    language: "English",
    name: "The Haunted Mansion",
    description: "A horror play that will keep you on the edge of your seat.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+7",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "Out of Stock",
    price: "$27",
    movieType: "Horror",
  },
  {
    id: 22,
    language: "Urdu",
    name: "Qissa",
    description: "A tragic tale set in pre-partition India, dealing with love and betrayal.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+8",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$13",
    movieType: "Tragedy",
  },
  {
    id: 23,
    language: "Hindi",
    name: "Do Dooni Chaar",
    description: "A comedy of errors filled with mistaken identities and hilarious situations.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+8",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$10",
    movieType: "Comedy",
  },
  {
    id: 24,
    language: "English",
    name: "Romeo and Juliet",
    description: "A classic love story of star-crossed lovers by William Shakespeare.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+8",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "Out of Stock",
    price: "$20",
    movieType: "Romance",
  },
  {
    id: 25,
    language: "Urdu",
    name: "Manto Ke Afsane",
    description: "A collection of short plays based on the works of Saadat Hasan Manto.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+9",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$14",
    movieType: "Anthology",
  },
  {
    id: 26,
    language: "Hindi",
    name: "Anarkali",
    description: "A historical drama depicting the forbidden love between Anarkali and Prince Salim.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+9",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$18",
    movieType: "Historical Romance",
  },
  {
    id: 27,
    language: "English",
    name: "The Tempest",
    description: "A play by Shakespeare that combines magic, betrayal, and redemption.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+9",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "Out of Stock",
    price: "$21",
    movieType: "Fantasy",
  },
  {
    id: 28,
    language: "Urdu",
    name: "Khawabon Ki Tabeer",
    description: "A surrealist drama exploring the dreams and aspirations of a young poet.",
    image1: "https://via.placeholder.com/300x200?text=Urdu+Show+10",
    image2: "https://via.placeholder.com/300x200?text=Urdu+Show+Hover",
    availability: "In Stock",
    price: "$13",
    movieType: "Surrealist Drama",
  },
  {
    id: 29,
    language: "Hindi",
    name: "Rajneeti",
    description: "A political drama that exposes the dark underbelly of power struggles in India.",
    image1: "https://via.placeholder.com/300x200?text=Hindi+Show+10",
    image2: "https://via.placeholder.com/300x200?text=Hindi+Show+Hover",
    availability: "In Stock",
    price: "$19",
    movieType: "Political Drama",
  },
  {
    id: 30,
    language: "English",
    name: "Hamlet Redux",
    description: "A contemporary retelling of Shakespeare's Hamlet, filled with intrigue and emotion.",
    image1: "https://via.placeholder.com/300x200?text=English+Show+10",
    image2: "https://via.placeholder.com/300x200?text=English+Show+Hover",
    availability: "In Stock",
    price: "$28",
    movieType: "Tragedy",
  },
];

const languages = ["Urdu", "Hindi", "English"];
const movieTypes = ["Drama", "Comedy", "Mystery", "Musical", "Romantic Drama", "Thriller", "Fantasy", "Horror", "Historical Drama", "Political Drama", "Social Drama", "Surrealist Drama", "Tragedy", "Adventure"];

const ShowsPage = () => {
  const [filters, setFilters] = useState({
    availability: "All",
    minPrice: "",
    maxPrice: "",
    language: "All",
    movieType: "All"
  });

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
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Availability Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">Availability</h3>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
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
          <h3 className="font-semibold">Price Range</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              value={filters.minPrice}
            />
            <input
              type="number"
              placeholder="Max"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              value={filters.maxPrice}
            />
          </div>
        </div>

        {/* Language Filter */}
        <div className="mb-4">
          <h3 className="font-semibold">Language</h3>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
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
          <h3 className="font-semibold">Type</h3>
          <select
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            onChange={(e) => handleFilterChange("movieType", e.target.value)}
            value={filters.movieType}
          >
            <option value="All">All</option>
            {movieTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Shows Grid */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Theatre Shows</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredShows.map(show => (
            <div
              key={show.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative group h-72"> {/* Increased height */}
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
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{show.name}</h2>
                <p className="text-sm text-gray-600">{show.description}</p>
                <p className="text-sm text-gray-800"><strong>Language:</strong> {show.language}</p>
                <p className="text-sm text-gray-800"><strong>Type:</strong> {show.movieType}</p>
                <p className="text-sm text-gray-800"><strong>Price:</strong> {show.price}</p>
                <p className={`text-sm font-semibold ${show.availability === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                  <strong>Availability:</strong> {show.availability}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowsPage;
