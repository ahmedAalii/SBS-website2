import React from 'react';

const JoinUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Join SBS</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">Why do you want to join?</label>
            <textarea
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
              placeholder="Tell us why you're interested..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
