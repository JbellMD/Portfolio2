import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => (
    <div className="contact-me">
        <h1>Contact Me</h1>
        <ContactForm />
        
        {/* Social Links Section */}
        <div className="social-links">
            <h2>Connect with Me</h2>
            <div className="links">
                {/* Gmail */}
                <a href="mailto:ijbello29@gmail.com" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                    <span>Gmail</span>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/jonathan-bello-818723116/" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/JbellMD" className="icon" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </div>
);

export default ContactMe;
