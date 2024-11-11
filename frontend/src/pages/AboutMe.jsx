// src/pages/AboutMe.jsx
import React from 'react';
import SkillsCarousel from '../components/SkillsCarousel';

const AboutMe = () => (
    <div className="about-me">
        <h1>My Skills</h1>
        <p>Throughout my journey, I’ve acquired a wide array of skills and certifications that I am proud to showcase:</p>

        {/* Integrate SkillsCarousel here */}
        <SkillsCarousel />
        <h1>About Me</h1>

        <p>In 2023, motivated by family, friends, and a personal drive, I committed myself to a career in technology, though my journey in computer science began much earlier. Growing up in New York City, my interest in technology was sparked in a specialized middle school, where I learned basic HTML and CSS, and continued through high school with influences from my brother and a passion for gaming. This passion led me into the world of hacking, where I developed technical skills and collaborated globally with other hackers, gaining a deep understanding of programming and software development at an early age. After high school, I shifted focus to biology and fitness but returned to technology in 2023, driven by dissatisfaction with my career path. Embracing the cloud, I enrolled in AWS Cloud Institute while simultaneously taking Coursera programs, rapidly acquiring new skills and professional certifications ranging from IT Support from IBM and Microsoft to Full Stack Software Developer and AI Developer from IBM. Now as I graduate from AWS Cloud Institute, I feel very prepared for my first professional role in technology.</p>

        <h2>How it Began</h2>
        <p>In 2023, I made a choice, influenced by my family, my friends, and mostly, myself. That choice was to commit myself to whatever it took to enter, establish, and excel in my career in technology. But in actuality, my story begins much earlier than 2023, when it comes to the world of computer science and the power of technology.</p>

        <p>I was born and raised in New York City, the youngest of five children with a single mother who placed an emphasis on academia from an early age. My siblings and I were born within a seven-year span of one another, which I credit for the lifelong cohesion I have with them, and helps explain how my path has always been in some way modeled after them...</p>

        <h2>My Start as a Hacker</h2>
        <p>If you’ve ever played an online computer game, then you know the bane of every player's existence: people who use hacks, cheats, or any type of manipulation. It would frustrate the hair off my head whenever my online playing experience was diminished by players who made the playing field feel very imbalanced. Ironically enough, it was my need to vent about these hackers on online communities that led me to become what I hated so much at the time...</p>

        <h2>My Life as a Hacker</h2>
        <p>Understanding a programming language is one thing; creating a functional program is an entirely different beast. That statement holds true even today in 2024, but programming came with so many different challenges in 2010. I can fully appreciate the maturity and sophistication of the languages and tools available to developers today because I can remember when everything was a “make it yourself” approach...</p>

        <h2>Return to Technology</h2>
        <p>After high school, I started down the track of Biology which eventually led me into the world of health and fitness. After a journey of trying to align my personal love for health and fitness with a career track in the field, I have learned much more about myself and have accomplished many personal milestones...</p>

        <p>I also used that time to start planning out the projects I wanted to include in my portfolio as well as identify where the knowledge gaps for the completion of those projects are. This has been an excellent way to measure my progress and assess my technical capabilities and gaps as I learn and prepare for a professional role...</p>

        <h2>Conclusion</h2>
        <p>I have to acknowledge my happiness with the pace at which I have regained proficiency in this field and how my unique life journey has played into that. I have confidence in my ability to efficiently learn and competently work with any technology stack...</p>

        <p><em>- Jonathan Eduardo Bello</em></p>

        <SkillsCarousel />
    </div>
);

export default AboutMe;

