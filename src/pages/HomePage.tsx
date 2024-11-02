import React from 'react';
import { Search } from 'lucide-react';
import TabSection from '../components/TabSection';
import FeaturedProjects from '../components/FeaturedProjects';

export default function HomePage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Inspire Your Next Web Project
            </h1>
            <p className="mt-4 text-xl text-indigo-100">
              Explore our curated collection of web design prompts and bring your ideas to life
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="max-w-xl w-full bg-white rounded-lg shadow-md flex items-center p-2">
                <Search className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  className="flex-1 px-4 py-2 focus:outline-none"
                />
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md">
                  Search
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                Browse Projects
              </button>
              <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <TabSection />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to start building?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Sign up now to access our full library of prompts and templates.
            </p>
            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}