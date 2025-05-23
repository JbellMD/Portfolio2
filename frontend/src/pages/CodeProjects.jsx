import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projectData = [
    {
        title: 'Little Guy AI - Platform',
        description: 'Next.js app that serves as a platform for users to generate content for a platform. It features a user-friendly interface and a custom content generation system.',
        imageUrl: '/little.png',
        demoLink: 'https://little-guy-ai.web.app/',
        codeLink: 'https://github.com/JbellMD/little-guy-ai',
        techStack: ['React', 'Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'PaaS (Platform as a Service)']
    },
    {
        title: 'Flow AI - Platform',
        description: 'Next.js app that serves as a education platform for users to master AI concepts and tools. It features a user-friendly interface and a comprehensive AI content library.',
        imageUrl: '/aiflow.png',
        demoLink: 'https://marvel-mvp.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'PaaS (Platform as a Service)']
    },
    {
        title: 'JB Manager - Platform',
        description: 'A platform designed to be an Asana clone for job task management and project management integration with job board management',
        imageUrl: '/jbmanage.png',
        demoLink: 'https://bountiful-alignment-production.up.railway.app/',
        codeLink: 'https://github.com/JbellMD/jb-manager2',
        techStack: ['React', 'Next.js', 'Railway', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'PaaS (Platform as a Service)']
    },
    {
        title: 'Dashboard Service',
        description: 'This application uses interactive frontends with NextJS, Shadcn UI, and Tailwind CSS deployed frontend with Vercel and backend with Railway.',
        imageUrl: '/dash.png',
        demoLink: 'https://dashboard-showcase-xi.vercel.app/',
        codeLink: 'https://github.com/JbellMD/dashboard-showcase',
        techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Railway', 'Vercel']
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
        title: 'e-Commerce Wesbite: ArtHub',
        description: 'React powered e-Commerce wesbite to demonstrate the solution to a number of user stories of feature additions to their application',
        imageUrl: '/art.png',
        demoLink: 'https://jbellmd.github.io/ArtHub/',
        codeLink: 'https://github.com/JbellMD/ArtHub',
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Netlify', 'Node.js', 'Cloud Native']
    },
    {
        title: 'Pet Shelter - AWS Application',
        description: 'An AWS Serverless application using a React front-end and a Node.js back-end',
        imageUrl: '/petshelter.png',
        demoLink: 'https://little-guy-ai.web.app/products',
        codeLink: 'https://github.com/JbellMD/pet-shelter',
        techStack: ['AWS', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Python', 'Serverless', 'Lambda', 'DynamoDB']
    },
    {
        title: 'BallRunner Game',
        description: 'BallRunner is a 2D game developed using JavaScript and Phaser.io hosted on GitHub Pages',
        imageUrl: '/ball.png',
        demoLink: 'https://jbellmd.github.io/BallRunner/',
        codeLink: 'https://github.com/JbellMD/BallRunner',
        techStack: ['JavaScript', 'Phaser.io', 'Cloud Native', 'GitHub Pages', 'GitHub', 'CI/CD', 'Automation']
    },
    {
        title: 'TowerKing Game',
        description: 'TowerKing is a 2D game developed using JavaScript and Phaser.io hosted on GitHub Pages',
        imageUrl: '/towerking.png',
        demoLink: 'https://jbellmd.github.io/TowerKing/',
        codeLink: 'https://github.com/JbellMD/TowerKing',
        techStack: ['JavaScript', 'Phaser.io', 'Cloud Native', 'GitHub Pages', 'GitHub', 'CI/CD', 'Automation']
    },
    {
        title: 'Sandwich Shop Game',
        description: 'Sandwich Shop is a 2D game developed using JavaScript and Phaser.io hosted on GitHub Pages',
        imageUrl: '/sandwich.png',
        demoLink: 'https://jbellmd.github.io/sandwich-shop/',
        codeLink: 'https://github.com/JbellMD/sandwich-shop',
        techStack: ['JavaScript', 'Phaser.io', 'Cloud Native', 'GitHub Pages', 'GitHub', 'CI/CD', 'Automation']
    },
    {
        title: 'AI Fitness Tracker v1',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/fitness.png',
        demoLink: 'https://ai-fitness-tracker.web.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Cloud Native', 'Node.js', 'Auth0', 'OpenAI']
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
        title: 'Car Dealership Reviews',
        description: 'Django application uses interactive frontends with React while creating backend logic with Supabase as a Postgres DB.',
        imageUrl: '/car.png',
        demoLink: 'https://jbellcardealer.netlify.app/dealers',
        codeLink: 'https://github.com/JbellMD/xrwvm-fullstack_developer_capstone',
        techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Django', 'Supabase', 'Postgres', 'Cloud Native']
    },
    {
        title: 'AI Fitness Insights v2',
        description: 'This application uses interactive frontends with React while creating backend logic with Firebase as a DB and featuring Firebase and OpenAI insights.',
        imageUrl: '/insight.png',
        demoLink: 'https://ai-ftiness-tracker.netlify.app/',
        codeLink: 'https://github.com/JbellMD/ai-fitness-tracker',
        techStack: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS', 'Cloud Native', 'Node.js', 'Auth0', 'OpenAI']
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