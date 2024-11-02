import React from 'react';
import { Users, Lightbulb, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">About Promptfolio</h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering developers with AI-powered web design prompts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Join a thriving community of developers sharing and improving prompts together.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">
              Access cutting-edge prompts that leverage the latest AI technologies.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rapid Development</h3>
            <p className="text-gray-600">
              Speed up your development process with ready-to-use design prompts.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're on a mission to revolutionize web development by making AI-powered design accessible to everyone. Our platform brings together the best prompts and templates to help developers create beautiful, functional websites faster than ever.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}