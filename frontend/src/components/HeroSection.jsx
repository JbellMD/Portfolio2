// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-[var(--accent-color)]">Jonathan Bello</h1>
        <p className="text-xl mb-8 text-[var(--text-primary)]">
          <b>FullStack/AI Developer | Cloud Solutions Architect | AWS Cloud Institute Graduate</b>
        </p>
        <Link 
          to="/projects" 
          className="inline-block px-8 py-3 bg-[var(--accent-color)] text-[var(--background)] rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
        >
          Explore My Work
        </Link>
      </div>
      <div className="mt-16 w-full">
        <Testimonials />
      </div>
    </section>
  );
};

export default HeroSection;
