import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projectData = [
    {
        title: 'Little Guy AI - Platform',
        description: 'Next.js app that serves as a platform for users to generate content for a platform. It features a user-friendly interface and a custom content generation system.',
        imageUrl: '/little.png',
        demoLink: 'https://little-guy-ai.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'PaaS (Platform as a Service)']
    },
    {
        title: 'Music Player - Code Challenge',
        description: 'Blazor WebAssembly C# application with CSS framework JavaScript/TypeScript for interop functions ASP.NET Core 6 Web API Entity Framework Core for data access SQL Server database',
        imageUrl: '/music.png',
        demoLink: 'https://web-production-e4671.up.railway.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next',
        techStack: ['Blazor WebAssembly .NET 6', 'C#', 'EFCore', 'SQL Server DB', 'TypeScript']
    },
    {
        title: 'e-Commerce Wesbite: Plants',
        description: 'React powered e-Commerce wesbite to demonstrate the solution to a number of user stories of feature additions to their application',
        imageUrl: '/plants.png',
        demoLink: 'https://jbellmd.github.io/ReactApp/',
        codeLink: 'https://github.com/JbellMD/ReactApp/',
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Netlify', 'Node.js', 'Cloud Native']
    },
    {
        title: 'AI Fitness Application v3',
        description: 'Next.JS app uses interactive frontends with Typescript to provide the latest version of fitness and nutrition application',
        imageUrl: '/core.png',
        demoLink: 'https://coreflow.vercel.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next',
        techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'OpenAI', 'Node.js']
    },
    {
        title: 'Weather Dashboard',
        description: 'Created with API integration with OpenWeather to show standard web integration created with JavaScript and React demonstrating REST API principles.',
        imageUrl: '/weather.png',
        demoLink: 'https://weather-dashboard-a6286.web.app/',
        codeLink: 'https://github.com/JbellMD/weather-dashboard',
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'REST API', 'Cloud Native']
    },
    {
        title: 'AI Fitness Tracker v1',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fitness.png',
        demoLink: 'https://ai-fitness-tracker.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Cloud Native', 'Node.js']
    },
    {
        title: 'Pet Shelter - AWS Application',
        description: 'An AWS Serverless application using a React front-end and a Node.js back-end',
        imageUrl: '/petshelter.png',
        demoLink: 'https://little-guy-ai.web.app/products',
        codeLink: 'https://github.com/JbellMD/pet-shelter',
        techStack: ['AWS', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Python', 'Serverless']
    },
    {
        title: 'AI Fitness Application v2',
        description: 'Next.JS app uses interactive frontends with Typescript while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fit.png',
        demoLink: 'https://ai-fitness-next.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next',
        techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase']
    },
    {
        title: 'MarvelAI - Platform',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/marvel.png',
        demoLink: 'https://little-guy-ai.web.app/products',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Python']
    },
    {
        title: 'Car Dealership Reviews',
        description: 'Django application uses interactive frontends with React while creating backend logic with Supabase as a Postgres DB.',
        imageUrl: '/car.png',
        demoLink: 'https://jbellcardealer.netlify.app/dealers',
        codeLink: 'https://github.com/JbellMD/xrwvm-fullstack_developer_capstone',
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Django', 'Supabase']
    },
    {
        title: 'AI Fitness Insights v2',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/insight.png',
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS']
    },
];

const Projects = () => {
    const [hoveredTechStack, setHoveredTechStack] = useState(null);

    const handleProjectHover = (techStack) => {
        setHoveredTechStack(techStack);
    };

    const getTechTagClassName = (tech) => {
        const baseClass = styles['tech-tag'];
        if (!hoveredTechStack) return baseClass;
        
        return `${baseClass} ${
            hoveredTechStack.includes(tech) 
                ? styles['tech-tag-highlighted']
                : styles['tech-tag-dimmed']
        }`;
    };

    return (
        <div className={styles['projects-container']}>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        onHover={handleProjectHover}
                        getTechTagClassName={getTechTagClassName}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
