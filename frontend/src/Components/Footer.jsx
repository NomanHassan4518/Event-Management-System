import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d373c] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">EventLab</h2>
          <p className="text-sm leading-6">
            Discover events, meetups & conferences around you. Join the
            community and never miss an update!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#ce1446] transition">Home</Link></li>
            <li><Link to="/events" className="hover:text-[#ce1446] transition">Events</Link></li>
            <li><Link to="/speakers" className="hover:text-[#ce1446] transition">My Registration</Link></li>
            <li><Link to="/contact" className="hover:text-[#ce1446] transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@eventlab.com</li>
            <li>Phone: +92 319 5586305</li>
            <li>Location: Centaurus Mall, Islamabad</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="#" className="p-2 bg-[#ce1446] rounded-full hover:bg-[#b1123e] transition">
              <FaFacebookF />
            </Link>
            <Link to="#" className="p-2 bg-[#ce1446] rounded-full hover:bg-[#b1123e] transition">
              <FaTwitter />
            </Link>
            <Link to="#" className="p-2 bg-[#ce1446] rounded-full hover:bg-[#b1123e] transition">
              <FaInstagram />
            </Link>
            <Link to="#" className="p-2 bg-[#ce1446] rounded-full hover:bg-[#b1123e] transition">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} EventLab. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
