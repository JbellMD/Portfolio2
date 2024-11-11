// src/components/SkillsCarousel.jsx
import React from 'react';
import { FaReact, FaJs, FaAws, FaPython } from 'react-icons/fa'; // Example icons
import { SiDocker, SiMongodb } from 'react-icons/si'; // More icons
import './SkillsCarousel.css';

const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    // Add more skills as needed
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
