import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    // Set the navbar as fixed at the top of the page
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 border-b-2 border-orange-600 bg-black text-white">

      <div className="flex items-center justify-between">

        {/* Left Side: Logo */}
        <Link to="/">
          <img src={logo} alt="Logo image" className="w-28 md:w-32 lg:w-44" />
        </Link>

        {/* Center: Navigation Menu */}
        <ul className="hidden md:flex space-x-3 text-xs lg:text-sm">
          <Link to="/Theater">
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Dropdown Trigger */}
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="hover:text-orange-400 hover:underline hover:underline-offset-[10px] hover:decoration-orange-400"
              >
                Theatre Shows
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 py-2 border border-orange-600 rounded shadow-lg w-56 z-40 bg-black">
                  <li>
                    <Link
                      to="/Theater?language=Urdu"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Urdu Theatre Shows
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Theater?language=Hindi"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Hindi Theatre Shows
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Theater?language=English"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      English Theatre Shows
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/TheaterSpeaks"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Theatre Speak
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </Link>
          <li>
            <Link to="/auditoriums" className="hover:text-orange-400 hover:underline hover:underline-offset-[10px] hover:decoration-orange-400">
              Auditoriums
            </Link>
          </li>
          <li>
            <Link to="/artist-gallery" className="hover:text-orange-400 hover:underline hover:underline-offset-[10px] hover:decoration-orange-400">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/TheaterSpeaks" className="hover:text-orange-400 hover:underline hover:underline-offset-[10px] hover:decoration-orange-400">
              Theater Speaks
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="hover:text-orange-400 hover:underline hover:underline-offset-[10px] hover:decoration-orange-400">
              Feedback
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:text-orange-400 hover:underline hover:underline-offset-[10px] hover:decoration-orange-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Icons and Search */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block rounded-3xl md:w-28 md:p-1 md:px-3 lg:w-56 lg:py-2 border-2 border-orange-600"
          />
          {/* <div className="space-x-4">
            <button className="hover:text-yellow-300">🔍</button>
          </div> */}

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
        <ul className="md:hidden border-t-2 mt-3">
         <Link to = "/Theater"> 
         <li className="py-2">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-700"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Theatre Shows
            </button>
            {isDropdownOpen && (
              <ul className="ml-4">
                <li>
                  <Link
                    to="/Theater?language=Urdu"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Urdu Theatre Shows
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Theater?language=Hindi"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Hindi Theatre Shows
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Theater?language=English"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    English Theatre Shows
                  </Link>
                </li>
                <li>
                  <Link
                    to="/TheaterSpeaks"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Theatre Speak
                  </Link>
                </li>
              </ul>
            )}
          </li>
          </Link>
          <li>
            <Link
              to="/auditoriums"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Auditoriums
            </Link>
          </li>
          <li>
            <Link
              to="/artist-gallery"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Artist Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/TheaterSpeaks"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Theater Speaks
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="block px-4 py-2 hover:bg-gray-700">
              Feedback
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}

      
    </nav>
  );
};

export default Navbar;
