// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, demoLink, codeLink }) => (
    <div className="project-card">
        <div className="project-image-container">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-overlay">
                <div className="project-links">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-button">
                        <span className="button-icon">▶</span>
                        Live Demo
                    </a>
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-button">
                        <span className="button-icon">⌨</span>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
        <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Node.js</span>
            </div>
        </div>
    </div>
);

export default ProjectCard;
