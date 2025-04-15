import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          About Us
        </h2>

        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed">
          SBS (Students Build Society) is a student activity dedicated to helping university students gain real-world skills through hands-on experiences and professional workshops.
          <br /><br />
          We aim to bridge the gap between academic knowledge and practical industry requirements. Our team is driven by passion, leadership, and creativity — bringing together students from diverse fields to grow together and make an impact.
        </p>

        {/* Optional: Image or Icon */}
        {/* <img src="/your-image.jpg" alt="About" className="mt-8 rounded-lg shadow-md w-full max-w-md" /> */}

      </div>
    </section>
  );
};

export default About;
