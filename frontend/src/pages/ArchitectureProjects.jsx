import React from 'react';

// Example image URLs, replace with your actual image paths or URLs
const images = [
    '/arc1.png',
    '/arc2.png',
    '/arc3.png',
    // Add more images as needed
];

const ArchitectureProjects = () => (
    <div className="architecture-projects">
        <h1>Architecture Projects</h1>
        <p>Details about my architecture projects go here.</p>
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image} alt={`Architecture Project ${index + 1}`} />
                </div>
            ))}
        </div>
    </div>
);

export default ArchitectureProjects;

