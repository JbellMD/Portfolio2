// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, demoLink, codeLink }) => (
    <div className="project-card">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-button">Source Code</a>
            </div>
        </div>
    </div>
);

export default ProjectCard;
