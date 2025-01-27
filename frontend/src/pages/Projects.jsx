import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectData = [
    {
        title: 'Little Guy AI - Platform',
        description: 'This project is a Next.js app that serves as a platform for users to generate content for a platform. It features a user-friendly interface and a custom content generation system.',
        imageUrl: '/little.png', // Replace with the actual path to a screenshot
        demoLink: 'https://little-guy-ai.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
    },
    {
        title: 'Music Player - Code Challenge',
        description: 'Blazor WebAssembly - .NET 6 SPA framework with MudBlazor - Material Design component library TailwindCSS - Utility-first CSS framework JavaScript/TypeScript for interop functions ASP.NET Core 6 Web API Entity Framework Core for data access SQL Server database',
        imageUrl: '/music.png', // Replace with the actual path to a screenshot
        demoLink: 'https://web-production-e4671.up.railway.app/',
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
        title: 'AI Fitness Application v3',
        description: 'Next.JS app uses interactive frontends with Typescript to provide the latest version of fitness and nutrition application',
        imageUrl: '/core.png', // Replace with the actual path to a screenshot
        demoLink: 'https://coreflow.vercel.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next'
    },
    {
        title: 'Weather Dashboard',
        description: 'Created with API integration with OpenWeather to show standard web integration created with JavaScript and React demonstrating REST API principles.',
        imageUrl: '/weather.png', // Replace with the actual path to a screenshot
        demoLink: 'https://weather-dashboard-a6286.web.app/',
        codeLink: 'https://github.com/JbellMD/weather-dashboard'
    },
    {
        title: 'AI Fitness Tracker v1',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fitness.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
    },
    {
        title: 'AI Fitness Application v2',
        description: 'Next.JS app uses interactive frontends with Typescript while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fit.png', // Replace with the actual path to a screenshot
        demoLink: 'https://ai-fitness-next.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next'
    },
    {
        title: 'MarvelAI - Platform',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/marvel.png', // Replace with the actual path to a screenshot
        demoLink: 'https://little-guy-ai.web.app/products',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker'
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
        <div className="project-grid">
            {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
);

export default Projects;

