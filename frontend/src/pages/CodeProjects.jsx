import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
    {
        title: 'Car Dealership Website',
        description: 'This my React powered Car Dealership website.',
        imageUrl: '/car.jpg', // Replace with the actual path to a screenshot
        demoLink: 'https://link-to-your-live-demo1.com',
        codeLink: 'https://github.com/your-username/repo1'
    },
    {
        title: 'e-Commerce Wesbite',
        description: 'This is my React powered e-Commerce wesbite',
        imageUrl: '/cloud.jpg',
        demoLink: 'https://jbellmd.github.io/ReactApp/',
        codeLink: 'https://github.com/JbellMD/ReactApp/'
    },
    {
        title: 'Review System',
        description: 'This is a book review addition',
        imageUrl: '/arc1.png', // Replace with the actual path to a screenshot
        demoLink: 'https://link-to-your-live-demo1.com',
        codeLink: 'https://github.com/your-username/repo1'
    }
];

const Projects = () => (
    <div className="projects">
        <h1>My Projects</h1>
        <div className="project-grid">
            {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
);

export default Projects;
