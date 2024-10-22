import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-secondary text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Utensils className="h-8 w-8 text-primary" strokeWidth={2.5} />
          <span className="text-xl font-semibold">The Bento Box</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-primary transition duration-300">Home</Link></li>
          <li><Link to="/menu" className="hover:text-primary transition duration-300">Menu</Link></li>
          <li><Link to="/catering" className="hover:text-primary transition duration-300">Catering</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;