import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'signin' | 'signup'>('signin');

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 fixed w-full top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Promptfolio</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/projects" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About
            </Link>
            <button 
              onClick={() => handleOpenAuth('signin')}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Sign In
            </button>
            <button 
              onClick={() => handleOpenAuth('signup')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/projects" className="block px-3 py-2 text-sm font-medium text-gray-600">
                Projects
              </Link>
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-600">
                About
              </Link>
              <button
                onClick={() => handleOpenAuth('signin')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600"
              >
                Sign In
              </button>
              <button
                onClick={() => handleOpenAuth('signup')}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={handleSwitchAuthMode}
      />
    </>
  );
}