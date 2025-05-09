'use client';

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">HomeHaven</h1>
            <p className="text-sm mt-2">
              Your trusted platform for finding the perfect rental home.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="/about"
              className="text-sm hover:text-gray-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/listings"
              className="text-sm hover:text-gray-400 transition-colors"
            >
              Listings
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          © {currentYear} HomeHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

