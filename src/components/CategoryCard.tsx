import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  count: number;
}

export default function CategoryCard({ title, description, image, count }: CategoryCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{count} prompts</span>
          <button className="text-indigo-600 hover:text-indigo-700 flex items-center">
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}