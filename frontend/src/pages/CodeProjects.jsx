import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
    {
        title: 'AI Fitness Tracker',
        description: 'This fitness tracker uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fitness.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
    },
    {
        title: 'Weather Dashboard',
        description: 'Created with API integration with OpenWeather to show standard web integration created with JavaScript and React demonstrating REST API principles.',
        imageUrl: '/weather.png', // Replace with the actual path to a screenshot
        demoLink: 'https://jbellmd.github.io/weather-dashboard/',
        codeLink: 'https://github.com/JbellMD/weather-dashboard'
    },
    {
        title: 'e-Commerce Wesbite: Plants',
        description: 'This is my React powered e-Commerce wesbite to demonstrate the solution to a number of user stories of feature additions to their application',
        imageUrl: '/plants.png',
        demoLink: 'https://jbellmd.github.io/ReactApp/',
        codeLink: 'https://github.com/JbellMD/ReactApp/'
    },
    {
        title: 'AI Fitness Insights',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fitness.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
    },
    {
        title: 'Car Dealership Website',
        description: 'This my React powered Car Dealership website featuring Django, MongoDB, and IBMs Sentiment Analyzer .',
        imageUrl: '/car.jpg', // Replace with the actual path to a screenshot
        demoLink: 'https://link-to-your-live-demo1.com',
        codeLink: 'https://github.com/JbellMD/ReactApp/'
    },
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

