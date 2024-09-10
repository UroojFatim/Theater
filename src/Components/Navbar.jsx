  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import logo from '../assets/Logo.png';

  const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
      <nav className="px-4 border-b-2 border-orange-600 bg-black text-white">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo */}
          <Link to = "/" ><img src={logo} alt="Logo image" className="w-28 md:w-32 lg:w-44" /></Link>

          {/* Center: Navigation Menu */}
          <ul className="hidden md:flex space-x-3 text-xs lg:text-sm">
            <Link to = "/Theater"><li className="relative group">
              {/* Dropdown Trigger */}
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onClick={() => setDropdownOpen(true)}
                className="hover:text-yellow-300"
              >
                Theatre Shows
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 py-2 border rounded shadow-lg group-hover:block w-56 z-40">
                  <li><Link to="/urdu-theatre" className="block px-4 py-2">Urdu Theatre Shows</Link></li>
                  <li><Link to="/hindi-theatre" className="block px-4 py-2">Hindi Theatre Shows</Link></li>
                  <li><Link to="/english-theatre" className="block px-4 py-2">English Theatre Shows</Link></li>
                  <li><Link to="/theatre-speak" className="block px-4 py-2">Theatre Speak</Link></li>
                </ul>
              )}


            </li></Link>
            <li><Link to="/auditoriums" className="">Auditoriums</Link></li>
            <li><Link to="/artist-gallery" className="">Gallery</Link></li>
            <li><Link to="/TheaterSpeaks" className="">Theater Speaks</Link></li>
            <li><Link to="/feedback" className="">Feedback</Link></li>   
            <li><Link to="/queries" className="">Queries</Link></li>
          </ul>

          {/* Right Side: Icons and Search */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block rounded-3xl  md:w-28 md:p-1 md:px-3  lg:w-36 border-2"
            />
            <div className="space-x-4">
              <button className="hover:text-yellow-300">🔍</button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-gray-800 border-t">
            <li className="py-2">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-700"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Theatre Shows
              </button>
              {isDropdownOpen && (
                <ul className="ml-4">
                  <li><Link to="/urdu-theatre" className="block px-4 py-2 hover:bg-gray-700">Urdu Theatre Shows</Link></li>
                  <li><Link to="/hindi-theatre" className="block px-4 py-2 hover:bg-gray-700">Hindi Theatre Shows</Link></li>
                  <li><Link to="/english-theatre" className="block px-4 py-2 hover:bg-gray-700">English Theatre Shows</Link></li>
                  <li><Link to="/theatre-speak" className="block px-4 py-2 hover:bg-gray-700">Theatre Speak</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/auditoriums" className="block px-4 py-2 hover:bg-gray-700">Auditoriums</Link></li>
            <li><Link to="/artist-gallery" className="block px-4 py-2 hover:bg-gray-700">Artist Gallery</Link></li>
            <li><Link to="/upcoming-shows" className="block px-4 py-2 hover:bg-gray-700">Theater Speaks</Link></li>
            <li><Link to="/feedback" className="block px-4 py-2 hover:bg-gray-700">Feedback</Link></li>
            <li><Link to="/queries" className="block px-4 py-2 hover:bg-gray-700">Queries</Link></li>
          </ul>
        )}
      </nav>
    );
  };

  export default Navbar;
