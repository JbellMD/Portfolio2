// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ 
    title, 
    description, 
    imageUrl, 
    demoLink, 
    codeLink, 
    techStack, 
    onHover,
    getTechTagClassName 
}) => {
    const handleMouseEnter = () => {
        onHover(techStack);
    };

    const handleMouseLeave = () => {
        onHover(null);
    };

    return (
        <div 
            className="project-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
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
                    {techStack.map((tech, index) => (
                        <span 
                            key={index} 
                            className={getTechTagClassName(tech)}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
