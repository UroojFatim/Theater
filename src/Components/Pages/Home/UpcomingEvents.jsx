import React from 'react';

const UpcomingEvents = () => {

  // Array of events
  const events = [
    {
      id: 1,
      title: 'Arts & Theater',
      description: 'You are free to choose whether to go on a baseball match of your favorite team this weekend or see the...',
      date: 'Sept 15, 2024',
      venue: 'Auditorium A',
      imageUrl: 'https://theme190-tickets.myshopify.com/cdn/shop/collections/Scandalous_1.png?v=1437983649',
    },
    {
      id: 2,
      title: 'Family',
      description: 'We distribute tickets to any events you might want to visit with your family, friends or sweethearts. Ordering tickets on...',
      date: 'Oct 10, 2024',
      venue: 'Theatre X',
      imageUrl: 'https://theme190-tickets.myshopify.com/cdn/shop/collections/Cirque_du_Soleil_-_Saltimbanco_2.png?v=1437983556',
    },
    {
      id: 3,
      title: 'Music',
      description: 'What do you think our life would be like without entertainment? If your answer is: "A real bore!" – You...',
      date: 'Nov 5, 2024',
      venue: 'Grand Hall',
      imageUrl: 'https://theme190-tickets.myshopify.com/cdn/shop/collections/Motorhead_Gigantour_2012_1.png?v=1437983847',
    },
  ];

  return (
    <div className="bg-black py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        
        {/* Responsive Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 relative inline-block">
          Upcoming Events
          {/* Underline element */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-6 w-24 h-1 bg-orange-500 rounded"></span>
        </h2>

        {/* Events Cards  */}
        <div className="grid gap-8 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="border-2 border-orange-500 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{event.title}</h3>
                <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">{event.description}</p>
                <div className="mt-4">
                  <span className="hover:cursor-pointer inline-block bg-orange-500 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-full">
                    Date: {event.date}
                  </span>
                  <span className="hover:cursor-pointer inline-block bg-gray-700 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ml-2">
                    Venue: {event.venue}
                  </span>
                </div>
                <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300">
                  Buy Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
