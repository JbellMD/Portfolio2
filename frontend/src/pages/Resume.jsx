import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="resume-container">
            <motion.div 
                className="resume-header"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={fadeIn.transition}
            >
                <h1>My Resume</h1>
                <p className="resume-subtitle">
                    View or download my professional resume below
                </p>
            </motion.div>

            <motion.div 
                className="resume-content"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
                <div className="pdf-container">
                    <iframe
                        src="/JBResumeCloud.pdf"
                        title="Jonathan Bello Resume"
                        className="resume-pdf"
                        width="100%"
                        height="800px"
                        style={{ border: 'none' }}
                    />
                </div>
                
                <div className="download-section">
                    <a 
                        href="/JBResumeCloud.pdf" 
                        download="Jonathan_Bello_Resume.pdf"
                        className="download-button"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
