import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaBookmark } from 'react-icons/fa';

const Blog = () => {
    const entries = [
        {
            date: "August 2024",
            title: "Milestone: IBM Full Stack Developer Certification",
            content: "This month was a milestone, as I earned the IBM Full Stack Developer Professional Certificate! This certification has not only validated my skills but also given me confidence in my ability to navigate the full stack. I'm now looking forward to deepening my understanding of backend and cloud technologies as I prepare for more advanced projects.",
            tags: ["Certification", "Full Stack", "IBM", "Achievement"]
        },
        {
            date: "April 2024",
            title: "Starting AWS Cloud Institute Journey",
            content: "Exciting news: I've started the AWS Cloud Institute program full-time, committing myself to a year-long journey to become a certified Cloud Developer. The curriculum is challenging but engaging, with a focus on cloud infrastructure, serverless applications, and security fundamentals.",
            tags: ["AWS", "Cloud Computing", "Learning"]
        },
        {
            date: "January 2024",
            title: "Multi-Cloud Learning Path",
            content: "To kick off the new year, I've intensified my learning with Coursera courses covering cloud platforms from AWS, Microsoft, Google, and IBM. This multi-cloud approach helps me understand the nuances of each service.",
            tags: ["Cloud Platforms", "Coursera", "Professional Development"]
        },
        {
            date: "December 2023",
            title: "Advanced Frontend Development",
            content: "My studies reached a new high as I completed several advanced Udemy courses and took on projects that brought together JavaScript, TypeScript, and React. Working full-time on my studies, I practiced RESTful APIs, built basic front-end applications, and grew more confident in handling asynchronous code.",
            tags: ["Frontend", "JavaScript", "React", "TypeScript"]
        },
        {
            date: "August 2023",
            title: "Full-time Learning Journey",
            content: "After a few months of juggling work and study, I decided to quit my job to focus fully on my development journey. I resumed my learning with renewed dedication and more structured study plans from Udemy. JavaScript has become second nature to me, and I'm growing more comfortable with React.",
            tags: ["Full-time Learning", "JavaScript", "React"]
        },
        {
            date: "July 2023",
            title: "Udemy Courses and Structured Learning",
            content: "To re-energize my studies, I signed up for some highly-rated courses on Udemy. The structured curriculum and guided exercises have helped me better understand JavaScript, React, and even introduced me to TypeScript.",
            tags: ["Udemy", "Structured Learning", "JavaScript", "React", "TypeScript"]
        },
        {
            date: "March - June 2023",
            title: "Balancing Work and Study",
            content: "These months were challenging as my full-time job took up most of my energy. Progress was slower than I'd hoped, with limited time for coding practice.",
            tags: ["Work-Life Balance", "Full-time Job", "Limited Progress"]
        },
        {
            date: "February 2023",
            title: "Exploring React and TypeScript",
            content: "Building on my initial enthusiasm, I dove deeper into JavaScript and started experimenting with TypeScript. I also began learning React, which opened up a new world of possibilities for interactive web applications.",
            tags: ["React", "TypeScript", "JavaScript", "Web Development"]
        },
        {
            date: "January 2023",
            title: "Starting the Coding Journey",
            content: "This month marked the beginning of my coding journey as I took my first steps into JavaScript, HTML, and CSS, learning independently.",
            tags: ["Coding Journey", "JavaScript", "HTML", "CSS", "Independent Learning"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="blog-container">
            <motion.div
                className="blog-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>My Journey in Tech</h1>
                <p className="blog-subtitle">
                    Documenting my progress, learnings, and achievements in the world of technology
                </p>
            </motion.div>

            <motion.div
                className="blog-entries"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {entries.map((entry, index) => (
                    <motion.article
                        key={index}
                        className="blog-entry"
                        variants={itemVariants}
                    >
                        <div className="entry-header">
                            <div className="entry-date">
                                <FaCalendar className="date-icon" />
                                <span>{entry.date}</span>
                            </div>
                            <FaBookmark className="bookmark-icon" />
                        </div>
                        
                        <h2 className="entry-title">{entry.title}</h2>
                        <p className="entry-content">{entry.content}</p>
                        
                        <div className="entry-tags">
                            {entry.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    );
};

export default Blog;
