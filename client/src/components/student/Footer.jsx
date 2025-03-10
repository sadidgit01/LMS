import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-[#0A2647] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4 text-center sm:text-left">
          <img src={assets.logo_dark} alt="Logo" className="h-8 mb-4 mx-auto sm:mx-0" />
          <p className="text-sm leading-relaxed">
            Empowering learners worldwide with quality education. Join our community of lifelong learners and unlock your potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-blue-400 transition-colors block py-1">Home</Link></li>
            <li><Link to="/courses" className="hover:text-blue-400 transition-colors block py-1">Courses</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors block py-1">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors block py-1">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
         <a href="mailto:saif.mahmood01@northsouth.edu" className="hover:text-blue-400 transition-colors break-all">  saif.mahmood01@northsouth.edu </a>
            </li>
           
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+8801968260526</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
          <form className="space-y-2 max-w-xs mx-auto sm:mx-0">
            <input type="email"
                   placeholder="Enter your email"
                   className="w-full px-3 py-2 bg-[#0d2f54] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"/>

            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm"> Subscribe </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-sm opacity-75">
            &copy; {new Date().getFullYear()} Edemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer