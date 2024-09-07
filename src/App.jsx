import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/Home';
import TheaterShow from './Components/Pages/TheaterShows/TheaterShows'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Theater" element={<TheaterShow/>} />
      </Routes>
    </Router>
  );
};

export default App;
