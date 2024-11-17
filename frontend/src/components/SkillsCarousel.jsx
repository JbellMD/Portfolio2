// src/components/SkillsCarousel.jsx
import React from 'react';
import { FaReact, FaJs, FaAws, FaPython, FaAngular } from 'react-icons/fa'; // Angular added
import { SiDocker, SiMongodb, SiKubernetes, SiMicrosoftazure, SiGooglecloud } from 'react-icons/si'; // Azure, GCP, Kubernetes added
import { GrMysql } from 'react-icons/gr'; // MySQL for SQL
import './SkillsCarousel.css';

const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <GrMysql /> },
    { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
];

const SkillsCarousel = () => (
    <div className="skills-carousel">
        {skills.map((skill, index) => (
            <div key={index} className="carousel-item">
                <div className="icon">{skill.icon}</div>
                <p>{skill.name}</p>
            </div>
        ))}
    </div>
);

export default SkillsCarousel;
