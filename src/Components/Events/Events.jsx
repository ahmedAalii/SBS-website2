import React from 'react';

const Events = () => {
  return (
    <section id="events" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Events
        </h2>

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed">
          SBS organizes various events throughout the year to engage, inspire, and educate students. From technical workshops and soft skill training to fun competitions and community service initiatives — we’ve got something for everyone.
          <br /><br />
          These events are designed to create a space for learning, collaboration, and growth — all while building long-lasting friendships and unforgettable experiences.
        </p>

        {/* Optional: Add event cards/grid in future */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-10">
            <EventCard />
            <EventCard />
            <EventCard />
        </div> */}

      </div>
    </section>
  );
};

export default Events;
