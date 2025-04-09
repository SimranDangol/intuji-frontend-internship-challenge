import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-100 py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-black">AR SHAKIR</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-black">
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* No Dropdown Menu for Product */}
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-black">
                Template
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* No Dropdown Menu for Template */}
            </div>
            <Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin" className="text-gray-700 hover:text-black">Sign in</Link>
            {/* ShadCN Button */}
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6">Start Free</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/product" className="text-gray-700 hover:text-black">Product</Link>
              <Link to="/template" className="text-gray-700 hover:text-black">Template</Link>
              <Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
              <Link to="/signin" className="text-gray-700 hover:text-black pt-2">Sign in</Link>
              {/* ShadCN Button */}
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white w-full">Start Free</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
