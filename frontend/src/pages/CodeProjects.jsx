import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
    {
        title: 'AI Fitness Tracker v1',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fitness.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
    },
    {
        title: 'AI Fitness Application v3',
        description: 'Next.JS app uses interactive frontends with Typescript to provide the latest version of fitness and nutrition application',
        imageUrl: '/core.png', // Replace with the actual path to a screenshot
        demoLink: 'https://coreflow.vercel.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next'
    },
    {
        title: 'e-Commerce Wesbite: Plants',
        description: 'This is my React powered e-Commerce wesbite to demonstrate the solution to a number of user stories of feature additions to their application',
        imageUrl: '/plants.png',
        demoLink: 'https://jbellmd.github.io/ReactApp/',
        codeLink: 'https://github.com/JbellMD/ReactApp/'
    },
    {
        title: 'Weather Dashboard',
        description: 'Created with API integration with OpenWeather to show standard web integration created with JavaScript and React demonstrating REST API principles.',
        imageUrl: '/weather.png', // Replace with the actual path to a screenshot
        demoLink: 'https://weather-dashboard-a6286.web.app/',
        codeLink: 'https://github.com/JbellMD/weather-dashboard'
    },
    {
        title: 'AI Fitness Application v2',
        description: 'Next.JS app uses interactive frontends with Typescript while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fit.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-fitness-next.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next'
    },
    {
        title: 'Car Dealership Reviews',
        description: 'Django application uses interactive frontends with React while creating backend logic with Supabase as a Postgres DB.',
        imageUrl: '/car.png', // Replace with the actual path to a screenshot
        demoLink: 'https://jbellcardealer.netlify.app/dealers',
        codeLink: 'https://github.com/JbellMD/xrwvm-fullstack_developer_capstone'
    },
    {
        title: 'AI Fitness Insights v2',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/insight.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
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

