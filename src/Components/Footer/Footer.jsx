import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-16 bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start text-sm">

                {/* Logo + Short Text */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-xl font-bold">
                        <span>SBS</span>
                        <span className="w-4 h-2 bg-yellow-400 block"></span>
                    </div>
                    <p className="text-gray-400">
                        SBS is a student activity that empowers students with professional concepts and real-world experience.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h3 className="text-yellow-400 font-semibold text-lg">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
                        <li><Link to="/conference" className="hover:text-yellow-400">Conference</Link></li>
                        <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="space-y-2">
                    <h3 className="text-yellow-400 font-semibold text-lg">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#"><i className="fab fa-youtube hover:text-yellow-400"></i></a>
                        <a href="#"><i className="fab fa-instagram hover:text-yellow-400"></i></a>
                        <a href="#"><i className="fab fa-facebook hover:text-yellow-400"></i></a>
                        <a href="#"><i className="fab fa-linkedin hover:text-yellow-400"></i></a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} SBS. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
