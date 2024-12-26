// components/ArchitectureHeroSection.jsx
import React from 'react';
import './ArchitectureHeroSection.css';

const ArchitectureHeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Software Architecture
          <span className="accent">& System Design</span>
        </h1>
        <p className="hero-description">
          Crafting scalable, resilient, and efficient software architectures that drive modern applications.
          Specializing in distributed systems, microservices, and cloud-native solutions.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="architecture-diagram">
          {/* Add your architecture diagram or illustration here */}
          <img src="/architecture-diagram.svg" alt="Software Architecture Diagram" />
        </div>
      </div>
    </div>
  );
};

export default ArchitectureHeroSection;
