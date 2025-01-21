// components/UseCaseVisuals.jsx
import React from 'react';
import './UseCaseVisuals.css';

const useCases = [
  {
    title: 'Microservices Architecture',
    description: 'Designing and implementing scalable microservices architectures using Docker, Kubernetes, and cloud-native technologies.',
    icon: '',
    techStack: ['Docker', 'Kubernetes', 'AWS', 'Microservices, REST APIs']
  },
  {
    title: 'Cloud Solutions',
    description: 'Building robust cloud infrastructure and deploying applications on AWS, Azure, and Google Cloud Platform.',
    icon: '',
    techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation']
  },
  {
    title: 'System Integration',
    description: 'Integrating complex systems and APIs to create seamless data flow and communication between different components.',
    icon: '',
    techStack: ['REST APIs', 'GraphQL', 'Message Queues', 'Event-Driven']
  },
  {
    title: 'Database Design',
    description: 'Designing efficient database schemas and implementing data storage solutions for optimal performance.',
    icon: '',
    techStack: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
  }
];

const UseCaseVisuals = () => {
  return (
    <div className="use-cases-section">
      <h2 className="section-title">Expertise Areas</h2>
      <div className="use-cases-grid">
        {useCases.map((useCase, index) => (
          <div key={index} className="use-case-card">
            <div className="use-case-icon">{useCase.icon}</div>
            <h3 className="use-case-title">{useCase.title}</h3>
            <p className="use-case-description">{useCase.description}</p>
            <div className="tech-stack">
              {useCase.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseVisuals;
