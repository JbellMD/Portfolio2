import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
    {
        title: 'Car Dealership Website',
        description: 'This my React powered Car Dealership website.',
        imageUrl: '/car.jpg', // Replace with the actual path to a screenshot
        demoLink: 'https://link-to-your-live-demo1.com',
        codeLink: 'https://github.com/JbellMD/ReactApp/'
    },
    {
        title: 'e-Commerce Wesbite: Plants',
        description: 'This is my React powered e-Commerce wesbite',
        imageUrl: '/plants.png',
        demoLink: 'https://jbellmd.github.io/ReactApp/',
        codeLink: 'https://github.com/JbellMD/ReactApp/'
    },
    {
        title: 'Weather Dashboard',
        description: 'Created with API integration to OpenWeather',
        imageUrl: '/weather.png', // Replace with the actual path to a screenshot
        demoLink: 'https://jbellmd.github.io/weather-dashboard/',
        codeLink: 'https://github.com/JbellMD/weather-dashboard'
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
