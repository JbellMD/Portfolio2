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
                            Understanding a programming language is one thing, creating a functional program is an entirely different beast. 
                            That statement holds true even today in 2024, but programming came with so many different challenges in 2010. 
                            I can fully appreciate the maturity and sophistication of the languages and tools available to developers today 
                            because I can remember when everything was a “make it yourself” approach to anything that you needed to use and 
                            have to create functionality, or stay up browsing on forums for nights with the “trial and error” approach.
                        </p>
                        <p> I have gained many technical skills and professional certificates through continuous learning from AWS, Microsoft, 
                            IBM and Google with paid programs and sponsored programs through the NY Department of Labor. I was able to 
                            obtain Professional Certificates from IBM in IT Support, Full Stack Software Developer, AI Developer, and Cloud 
                            Architecture, from AWS in Cloud Solutions Architect, Cloud Technology Consultant, from Google in Architecting with 
                            GCE, and from Microsoft in Azure Fundamentals and IT Support Specialist.
                        </p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Early Beginnings - 2008</h3>
                            <p>Started with HTML & CSS in middle school</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Hacking and Programming 2010-2012</h3>
                            <p>Developed programming skills through hacking online games serving as a frontend developer </p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Career Transition into Technology - 2023</h3>
                            <p>Committed to technology career in 2023 by relearning JavaScript and learning the full stack</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>AWS Cloud Institute - 2024</h3>
                            <p>Enrolled in AWS Cloud Institute to become a Cloud Developer</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>Professional Development - 2024</h3>
                            <p>Earned multiple certifications and built real-world projects</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <h3>AWS Cloud Institute Graduation - 2025</h3>
                            <p>Completed AWS Cloud Institute and became an AWS Certified Solutions Architect</p>
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
                        <h3>AWS Cloud Institute</h3>
                        <p>
                        I used the time between semesters to gain knowledge and experience outside of AWS, picking 
                        up Microsoft Certifications and undertaking AI/ML learning paths to widen my foundational 
                        knowledge base horizontally as I simultaneously build vertically into specialization.
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
