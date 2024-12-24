import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    const certifications = [
        {
            title: 'IBM Full Stack Software Developer Professional Certificate',
            fileUrl: './ibmdev.pdf',
            description: 'Build, deploy, test, run, and manage full stack cloud native applications. GitHub, Node.js, React, CI/CD, Containers, Docker, Kubernetes, OpenShift, Istio, Databases, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing, and more.',
            issuer: 'IBM',
            date: 'August 2024',
            skills: ['Full Stack', 'Cloud Native', 'DevOps', 'Microservices']
        },
        {
            title: 'IBM AI Developer Professional Certificate',
            fileUrl: './ibmai.pdf',
            description: 'Mastered the fundamentals of software engineering, AI, generative AI, prompt engineering, HTML, JavaScript and Python programming. Gained proficiency in GoLang, LLMs, RAG, MLOps, and API integration for REST framework.',
            issuer: 'IBM',
            date: 'July 2024',
            skills: ['AI', 'Machine Learning', 'Python', 'MLOps']
        },
        {
            title: 'AWS Cloud Consultant Professional Certificate',
            fileUrl: './awsctc.pdf',
            description: 'Mastered making informed decisions about when and how to apply key AWS Services for compute, storage, database, networking, monitoring, and security.',
            issuer: 'AWS',
            date: 'June 2024',
            skills: ['AWS', 'Cloud Architecture', 'Security', 'Networking']
        },
        {
            title: 'AWS Cloud Solutions Architect Professional Certificate',
            fileUrl: './awssa.pdf',
            description: 'Designed architectural solutions, whether designing for cost, performance, and/or operational excellence, to address common business challenges.',
            issuer: 'AWS',
            date: 'May 2024',
            skills: ['Cloud Architecture', 'AWS', 'Solution Design', 'Cost Optimization']
        },
        {
            title: 'Architecting on Google Compute Engine',
            fileUrl: './google.pdf',
            description: 'Threat mitigation strategies from an enterprise perspective, apply effective cybersecurity policy measures within an Azure environment, & practice on tools like MS defender, Azure Active Directory.',
            issuer: 'Google',
            date: 'April 2024',
            skills: ['Google Cloud', 'Compute Engine', 'Cybersecurity', 'Azure']
        },
        {
            title: 'IBM IT Support Professional Certificate',
            fileUrl: './ibmit.pdf',
            description: 'Latest skills and tools used by IT support professionals including hardware and software setup, technical support, customer service, ticketing systems, service level agreements, and troubleshooting.',
            issuer: 'IBM',
            date: 'March 2024',
            skills: ['IT Support', 'Hardware', 'Software', 'Troubleshooting']
        },
        {
            title: 'Microsoft IT Support Specialist Professional Certificate',
            fileUrl: '/path/to/ms-it-support-cert.pdf',
            description: 'Strong foundation in IT support fundamentals, networking, software, hardware and data backup, cybersecurity, Microsoft 365 ecosystem, and Troubleshooting Diagnostics. Gained competency in how generative AI tools and techniques are used in IT Support.',
            issuer: 'Microsoft',
            date: 'February 2024',
            skills: ['IT Support', 'Microsoft 365', 'Networking', 'Cybersecurity']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <div className="certifications-container">
            <motion.div
                className="certifications-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Professional Certifications</h1>
                <p className="certifications-subtitle">
                    A collection of my professional certifications and achievements in technology
                </p>
            </motion.div>

            <motion.div
                className="certifications-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="certification-card"
                        variants={itemVariants}
                    >
                        <div className="card-header">
                            <FaAward className="cert-icon" />
                            <span className="issuer">{cert.issuer}</span>
                            <span className="date">{cert.date}</span>
                        </div>

                        <h2 className="cert-title">{cert.title}</h2>
                        <p className="cert-description">{cert.description}</p>

                        <div className="skills-container">
                            {cert.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <a
                            href={cert.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-certificate"
                        >
                            View Certificate
                            <FaExternalLinkAlt className="link-icon" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Certifications;
