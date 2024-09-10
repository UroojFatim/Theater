import React, { useRef } from 'react';
import Hero from './Hero';
import UpcomingEvents from './UpcomingEvents';
import TheatreSpeakPreview from './TheatreSpeakPreview';
import ArtistSpotlight from './ArtistSpotlight';
import ShopNow from './ShopNow';
import Magazine from './Magazine';

const Home = () => {
  // Create a ref for the Magazine section
  const magazineRef = useRef(null);

  // Function to handle scroll to Magazine section
  const scrollToMagazine = () => {
    magazineRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <UpcomingEvents />
      {/* Magazine section with a ref */}
      <div ref={magazineRef}>
        <Magazine />
      </div>
      <ShopNow />
      <TheatreSpeakPreview />
      <ArtistSpotlight />
    </>
  );
};

export default Home;
