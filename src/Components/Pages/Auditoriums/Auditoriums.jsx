import React from 'react';

const Auditoriums = () => {
  // Array of auditoriums
  const auditoriums = [
    {
      id: 1,
      name: 'Auditorium A',
      address: '123 Main St, City, Country',
      capacity: 500,
      facilities: 'Air conditioning, Wheelchair access, Parking, Snack Bar',
      upcomingEvents: 'The Lion King, Hamlet',
      imageUrl: 'https://rulonco.com/wp-content/uploads/2022/04/Chisolm-Trail-HS-1-scaled.jpg',
    },
    {
      id: 2,
      name: 'Theatre X',
      address: '456 Broadway Ave, City, Country',
      capacity: 300,
      facilities: 'VIP Seating, Parking, Restrooms, Food Court',
      upcomingEvents: 'The Phantom of the Opera, Macbeth',
      imageUrl: 'https://www.homerton.cam.ac.uk/sites/default/files/North%20Wing%20Auditorium%202%20%28high%20res%29_1.jpg',
    },
    {
      id: 3,
      name: 'Grand Hall',
      address: '789 Grand Blvd, City, Country',
      capacity: 800,
      facilities: 'Large Stage, Multiple Exits, Emergency Services, Lounge',
      upcomingEvents: 'Othello, Les Misérables',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXT_Vwyme8poJEDUtVtOIhD6k28zIPtT6toCR3CieM0D3MPIwadnadVd_pK8VQbPbQuA&usqp=CAU',
    },
    // Add more auditoriums here
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <h2 className="text-4xl font-extrabold text-white mb-10 text-center underline decoration-orange-500 underline-offset-8">
        Auditoriums
      </h2>
      <div className="max-w-7xl mx-auto space-y-16">
        {auditoriums.map((auditorium, index) => (
          <div
            key={auditorium.id}
            className={`flex flex-col lg:flex-row items-center justify-between ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } group`}
          >
            {/* Image Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 relative transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
              <img
                src={auditorium.imageUrl}
                alt={auditorium.name}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 lg:pl-8 text-left">
              <h3 className="text-3xl font-bold text-orange-400 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {auditorium.name}
              </h3>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold text-white">Address:</span> {auditorium.address}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold text-white">Capacity:</span> {auditorium.capacity}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-semibold text-white">Facilities:</span> {auditorium.facilities}
              </p>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-white">Upcoming Events:</span> {auditorium.upcomingEvents}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full font-bold shadow-md transform hover:scale-105 transition-transform duration-300">
                View Events
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <h3 className="text-3xl font-bold text-white mb-6 text-center underline decoration-orange-500 underline-offset-8">
          Find Auditoriums
        </h3>
        <div className="h-96 bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          {/* Placeholder for interactive map */}
          <iframe
            title="Auditorium Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509964!2d144.9537352153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e3b93857379!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1638355745071!5m2!1sen!2sau"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Auditoriums;
