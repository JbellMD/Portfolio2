// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Testimonials from './Testimonials';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Jonathan Bello</h1>
        <p>Full Stack Developer | Cloud Solutions Architect | AWS Cloud Institute Graduate</p>
        <Link to="/projects" className="hero-button">
          Explore My Work
        </Link>
      </div>
      <div className="testimonials-compact">
        <Testimonials />
      </div>
    </section>
  );
};

export default HeroSection;
