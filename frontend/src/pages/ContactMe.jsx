import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactMe = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const socialLinks = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            text: 'ijbello29@gmail.com',
            href: 'mailto:ijbello29@gmail.com'
        },
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            text: 'Connect on LinkedIn',
            href: 'https://www.linkedin.com/in/jonathan-bello-818723116/'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            text: 'View my projects',
            href: 'https://github.com/JbellMD'
        }
    ];

    return (
        <div className="contact-container">
            <motion.div 
                className="contact-header"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
            >
                <h1>Let's Connect</h1>
                <p className="contact-subtitle">
                    I'm always open to new opportunities and collaborations in the tech industry. Whether you have a project in mind or just want to chat, feel free to reach out.
                </p>
            </motion.div>

            <div className="contact-content">
                <motion.div 
                    className="contact-info"
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                >
                    <div className="location-card">
                        <div className="location-header">
                            <FaMapMarkerAlt className="location-icon" />
                            <h3>Location</h3>
                        </div>
                        <p>New York City, NY</p>
                    </div>

                    <div className="contact-links">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="contact-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="link-icon">{link.icon}</span>
                                <div className="link-info">
                                    <h3>{link.label}</h3>
                                    <p>{link.text}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="contact-form-wrapper"
                    initial={fadeIn.initial}
                    animate={fadeIn.animate}
                    transition={{ ...fadeIn.transition, delay: 0.4 }}
                >
                    <div className="contact-form-card">
                        <h2>Send me a message</h2>
                        <p>I'll get back to you as soon as possible</p>
                        <ContactForm />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactMe;
