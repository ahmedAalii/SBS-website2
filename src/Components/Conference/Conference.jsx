import React from 'react';

const Conference = () => {
  return (
    <section id="conference" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Conference
        </h2>

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed">
          The SBS Annual Conference brings together inspiring leaders, professionals, and students to share knowledge, discuss challenges, and explore future trends.
          <br /><br />
          Attendees gain valuable insights through keynote speeches, panel discussions, and networking sessions. It's not just a conference — it's a movement that drives youth empowerment and innovation.
        </p>

        {/* Optional: Add image or video here */}
        {/* <img src="/conference-image.jpg" alt="Conference" className="mt-8 rounded-lg shadow-md w-full max-w-xl" /> */}

      </div>
    </section>
  );
};

export default Conference;
