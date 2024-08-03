import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-4">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-2 md:mb-0">
        <h2 className="text-sm font-bold">Company Name</h2>
        <p className="text-xs">© 2024 Company Name. All rights reserved.</p>
      </div>
      <div className="text-center mb-2 md:mb-0">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><a href="/" className="text-xs hover:underline">Home</a></li>
          <li><a href="/about" className="text-xs hover:underline">About Us</a></li>
          <li><a href="/services" className="text-xs hover:underline">Services</a></li>
          <li><a href="/contact" className="text-xs hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="text-center">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-xs hover:underline">Facebook</a></li>
          <li><a href="#" className="text-xs hover:underline">Twitter</a></li>
          <li><a href="#" className="text-xs hover:underline">Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer;