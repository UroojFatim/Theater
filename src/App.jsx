import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/Home';
import TheaterShow from './Components/Pages/TheaterShows/TheaterShows'
import Footer from './Components/Footer';
import Auditoriums from './Components/Pages/Auditoriums/Auditoriums';
import Gallery from './Components/Pages/Artist Gallery/Gallery';
import ArtistDetails from './Components/Pages/Artist Gallery/ArtistDetails';
import OurPartner from './Components/OurPartners';
import SignupForm from './Components/SignupForm';
import TopReviews from './Components/Pages/TheaterSpeaks/TopReviews';
import ShowDetailPage from './Components/Pages/TheaterShows/ShowDetailPage';
import ContactUs from './Components/Pages/Contact Us/ContactUs';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Theater" element={<TheaterShow/>} />
        <Route path="/show/:id" element={<ShowDetailPage/>} />
        <Route path="/auditoriums" element={<Auditoriums/>} />
        <Route path="/artist-gallery" element={<Gallery/>} />
        <Route path="/artist/:id" element={<ArtistDetails/>} />
        <Route path="/TheaterSpeaks" element={<TopReviews/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
      <OurPartner/>
      <SignupForm/>
      <Footer/>
    </Router>

  );
};

export default App;
