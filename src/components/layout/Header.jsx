import React from 'react';
import { Link } from 'react-router-dom';
import { LucideChefHat } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center text-2xl font-header text-primary">
          <LucideChefHat className="mr-2" />
          Foodie
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/recipes" className="hover:text-primary">Recipes</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
