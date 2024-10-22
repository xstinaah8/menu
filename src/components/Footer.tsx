import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">The Bento Box</h3>
            <p className="text-sm text-gray-400">Delicious Japanese cuisine</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition duration-300"><Facebook size={24} strokeWidth={2} /></a>
            <a href="#" className="hover:text-primary transition duration-300"><Instagram size={24} strokeWidth={2} /></a>
            <a href="#" className="hover:text-primary transition duration-300"><Twitter size={24} strokeWidth={2} /></a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} The Bento Box. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;