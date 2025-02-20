import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white px-3">Home</a>
            <a href="#" className="text-gray-300 hover:text-white px-3">About Us</a>
          </div>
  
          {/* Subscription Form */}
          <form className="flex items-center">
          <input type="text" placeholder="Enter e-mail here..." className="bg-[#EAEAEA] text-secondary w-full py-2 md:px-8 px-6 focus:outline-none rounded-l-md"></input>
            <button className="bg-primary hover:bg-amber-500 text-secondary px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    );
  };
  
  export default Footer;