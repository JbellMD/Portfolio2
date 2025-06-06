import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaBookmark } from 'react-icons/fa';

const Blog = () => {
    const entries = [
        {
            date: "May 2025",
            title: "Milestone: Amazon Mechanical Turk",
            content: "I have officially been with Amazon MTurk for half a year, I am grateful for the opportunity to work with such a talented team and to be able to contribute to such important projects. I am also grateful for the opportunity to work with such a talented team and to be able to contribute to such important projects.",
            tags: ["Certification", "Cloud Developer", "AWS", "Achievement"]
        },
        {
            date: "April 2025",
            title: "Milestone: Graduated from AWS Cloud Institute",
            content: "This month was a milestone, as I graduated from the AWS Cloud Institute! This coursework has prepared me to become a successful Cloud Developer. This certification has not only validated my skills but also given me confidence in my ability to navigate the full stack. I'm now looking forward to deepening my understanding of backend and cloud technologies as I prepare for more advanced projects.",
            tags: ["Certification", "Cloud Developer", "AWS", "Achievement"]
        },
        {
            date: "March 2025",
            title: "Onboarding and beyond",
            content: "The first month as an AI/ML Engineer was mostly onboarding and learning the ropes with onboarding and strategy meetings being the majority of tasks so far. I am excited for the next month as we will get into LLMs and Generative AI and the execution of our first project.",
            tags: ["ML Engineer", "AI/ML", "Start Up", "Onboarding"]
        },
        {
            date: "February 2025",
            title: "Milestone: Landed my ideal role as an AI/ML Engineer",
            content: "This month was a milestone, as I landed my ideal role as an AI/ML Engineer at a startup in New York City! I'm excited to start my new role and continue to grow my skills in the field and gain experience with Python, Machine Learning, and Generative AI.",
            tags: ["AI/ML", "ML Engineer", "AI Engineer", "Achievement"]
        },
        {
            date: "February 2025",
            title: "AWS Cloud Institute - Final Semester",
            content: "In this final semester, I have been provided with mock interviews, resume reviews, and job shadowing. This has prepared me for the next level of cloud development and has given me confidence in my ability to navigate the full stack.",
            tags: ["Interviews", "Resumes", "Job Shadowing", "Cloud Developer", "AWS", "Solutions Architect"]
        },
        {
            date: "January 2025",
            title: "AWS Cloud Institute - Final Semester",
            content: "Excited to announce that I am entering my fourth and final semester pursuing my AWS Cloud Institute certification. This course has prepared me for the next level of cloud development, and I am excited to continue building my skills and knowledge in this exciting field.",
            tags: ["Certification", "Cloud Developer", "AWS", "Solutions Architect"]
        },
        {
            date: "December 2024",
            title: "Microsoft Azure - Training",
            content: "I have completed four courses on Microsoft Azure and am now ready to start my training. This training will help me become a proficient Azure developer and prepare me for future projects that leverage Microsoft Azure for multi-tenant applications. I have the fundamentals of Azure in place and am excited to apply them to real-world projects. My goal is to become a certified Azure Solutions Architect.",
            tags: ["Certification", "Cloud Developer", "Azure", "Microsoft"]
        },
        {
            date: "November 2024",
            title: "AWS Cloud Institute Journey - Semester 3",
            content: "I have offically began preparing for my AWS Certified Solutions Architect! This training will help me become a proficient AWS developer and prepare me for future projects that leverage AWS for multi-tenant applications. I have the fundamentals of AWS in place and am excited to apply them to real-world projects. My goal is to become a certified AWS Solutions Architect.",
            tags: ["AWS", "Cloud Computing", "Professional Development", "Learning"]
        },
        {
            date: "October 2024",
            title: "AWS Cloud Institute Journey - Semester 3",
            content: "Excited to announce that I've begun my third semester at the AWS Cloud Institute! After completing my IBM Full Stack certification, I have much more confidence starting this new semester. The curriculum is comprehensive training in AWS services, cloud architecture, and best practices. I'm particularly looking forward to learning about AWS Lambda, EC2, and S3 services. This training will complement my full stack skills and help me build more scalable and robust applications.",
            tags: ["AWS", "Cloud Computing", "Professional Development", "Learning"]
        },
        {
            date: "August 2024",
            title: "Milestone: IBM Full Stack Developer Certification",
            content: "This month was a milestone, as I earned the IBM Full Stack Developer Professional Certificate! This certification has not only validated my skills but also given me confidence in my ability to navigate the full stack. I'm now looking forward to deepening my understanding of backend and cloud technologies as I prepare for more advanced projects.",
            tags: ["Certification", "Full Stack", "IBM", "Achievement"]
        },
        {
            date: "August 2024",
            title: "Milestone: IBM AI Developer Certification",
            content: "This month was a milestone, as I earned the IBM AI Developer Professional Certificate! This certification has not only validated my skills but also given me confidence in my ability to navigate Python, Machine Learning, and Generative AI. I'm now looking forward to deepening my understanding of AI/ML and cloud technologies as I prepare for more advanced projects.",
            tags: ["Certification", "AI Developer", "IBM", "Achievement"]
        },
        {
            date: "July 2024",
            title: "AWS Cloud Institute Journey - Semester 2",
            content: "Excited to announce that I've begun my second semester at the AWS Cloud Institute! I have much more confidence starting this new semester. The curriculum is comprehensive training in AWS services, cloud architecture, and best practices. I'm particularly looking forward to learning about AWS Lambda, EC2, and S3 services. This training will complement my full stack skills and help me build more scalable and robust applications.",
            tags: ["AWS", "Cloud Computing", "Professional Development", "Learning"]
        },
        {
            date: "May 2024",
            title: "Multi-Cloud Learning Path Continued",
            content: "I have gained an overall understanding of cloud platforms and their services. I have noticed that the services they offer are very similar, but with different names. I have also learned about the differences between cloud providers, such as AWS, Azure, and Google Cloud. I understand cloud concepts much more having explored Microsoft Azure, IBM Cloud, and Google Cloud. They offer a free tier which is very helpful in building a basic application.",
            tags: ["Cloud Platforms", "Coursera", "Professional Development"]
        },
        {
            date: "April 2024",
            title: "Starting AWS Cloud Institute Journey - Semester 1",
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
