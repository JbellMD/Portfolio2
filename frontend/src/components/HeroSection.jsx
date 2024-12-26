// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Testimonials from './Testimonials';
import './HeroSection.css';

const HeroSection = () => (
    <div className="hero-section">
        <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Jonathan Bello</h1>
            <p><b>Full Stack Developer | Cloud Solutions Architect | AWS Cloud Institute Graduate</b></p>
            <motion.button
                className="hero-button"
                whileHover={{ scale: 1.1 }}
                onClick={() => window.location.href = '/projects'}
            >
                Explore My Work <FaArrowRight style={{ marginLeft: '8px' }} />
            </motion.button>
            <div className="testimonials-compact">
                <Testimonials />
            </div>
        </motion.div>
    </div>
);

export default HeroSection;
