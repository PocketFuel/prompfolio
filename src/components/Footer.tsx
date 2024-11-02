import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold">Promptfolio</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Inspiring the next generation of web developers with AI-powered prompts.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/projects?category=blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link></li>
              <li><Link to="/projects?category=blockchain" className="text-gray-600 hover:text-gray-900">Blockchain</Link></li>
              <li><Link to="/projects?category=ecommerce" className="text-gray-600 hover:text-gray-900">E-commerce</Link></li>
              <li><Link to="/projects?category=realestate" className="text-gray-600 hover:text-gray-900">Real Estate</Link></li>
              <li><Link to="/projects?category=travel" className="text-gray-600 hover:text-gray-900">Travel</Link></li>
              <li><Link to="/projects?category=docs" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Promptfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}