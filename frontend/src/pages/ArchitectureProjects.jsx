import React from 'react';
import ArchitectureHeroSection from '../components/ArchitectureHeroSection';
import UseCaseVisuals from '../components/UseCaseVisuals';
import FeaturedProjects from '../components/FeaturedProjects';
import MetricsAndOutcomes from '../components/MetricsAndOutcomes';
import Testimonials from '../components/Testimonials';

const ArchitectureProjects = () => {
  return (
    <div>
      <ArchitectureHeroSection />
      <UseCaseVisuals />
      <FeaturedProjects />
      <MetricsAndOutcomes />
      <Testimonials />
    </div>
  );
};

export default ArchitectureProjects;
