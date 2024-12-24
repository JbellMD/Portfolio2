import React from 'react';
import { motion } from 'framer-motion';
import SkillsCarousel from '../components/SkillsCarousel';

const AboutMe = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="about-container">
            <motion.section 
                className="skills-section"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
            >
                <h1 className="section-title">My Skills</h1>
                <p className="section-subtitle">
                    Throughout my journey, I've acquired a wide array of skills and certifications that I am proud to showcase:
                </p>
                <SkillsCarousel />
            </motion.section>

            <motion.section 
                className="about-section"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
                <h1 className="section-title">About Me</h1>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            In 2023, motivated by family, friends, and a personal drive, I committed myself to a career in technology, 
                            though my journey in computer science began much earlier. Growing up in New York City, my interest in 
                            technology was sparked in a specialized middle school, where I learned basic HTML and CSS, and continued 
                            through high school with influences from my brother and a passion for gaming.
                        </p>
                        <p>
                            This passion led me into the world of hacking, where I developed technical skills and collaborated globally 
                            with other hackers, gaining a deep understanding of programming and software development at an early age.
                        </p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Early Beginnings</h3>
                            <p>Started with HTML & CSS in middle school</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Technical Growth</h3>
                            <p>Developed programming skills through ethical hacking</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Career Transition</h3>
                            <p>Committed to technology career in 2023</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Professional Development</h3>
                            <p>Earned multiple certifications and built real-world projects</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section 
                className="journey-section"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.4 }}
            >
                <h2 className="section-title">My Journey</h2>
                <div className="journey-grid">
                    <div className="journey-card">
                        <h3>How it Began</h3>
                        <p>
                            In 2023, I made a choice, influenced by my family, my friends, and mostly, myself. 
                            That choice was to commit myself to whatever it took to enter, establish, and excel 
                            in my career in technology.
                        </p>
                    </div>
                    <div className="journey-card">
                        <h3>Early Years</h3>
                        <p>
                            Born and raised in New York City, the youngest of five children with a single mother 
                            who placed an emphasis on academia from an early age. This foundation shaped my 
                            approach to learning and problem-solving.
                        </p>
                    </div>
                    <div className="journey-card">
                        <h3>Technical Evolution</h3>
                        <p>
                            My journey through technology has been marked by continuous learning, from early 
                            programming experiences to professional certifications in cloud computing and AI development.
                        </p>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default AboutMe;
