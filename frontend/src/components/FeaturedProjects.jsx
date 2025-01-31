// components/FeaturedProjects.jsx
import React from 'react';
import './FeaturedProjects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Designed and implemented a highly scalable e-commerce platform using microservices architecture.',
    image: '/ecommerce-arch.svg',
    technologies: ['AWS', 'Kubernetes', 'Node.js', 'React'],
    metrics: {
      users: '500k+',
      transactions: '50K/day',
      uptime: '99.99%'
    }
  },
  {
    title: 'Real-time Analytics System',
    description: 'Built a real-time data analytics platform processing millions of events per second.',
    image: '/analytics-arch.svg',
    technologies: ['Apache Kafka', 'Elasticsearch', 'Python', 'Docker'],
    metrics: {
      events: '1M/sec',
      latency: '<1000ms',
      accuracy: '99.9%'
    }
  },
  {
    title: 'Cloud Migration Project',
    description: 'Led the migration of legacy systems to a modern cloud-native architecture.',
    image: '/migration-arch.svg',
    technologies: ['Azure', 'Terraform', 'CI/CD', 'Microservices'],
    metrics: {
      cost: '-40%',
      performance: '+85%',
      deployment: '3x faster'
    }
  }
];

const FeaturedProjects = () => {
  return (
    <div className="featured-projects">
      <h2 className="section-title">Featured Architecture Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="metrics-grid">
                  {Object.entries(project.metrics).map(([key, value], i) => (
                    <div key={i} className="metric-item">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
