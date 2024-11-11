// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setVisible(window.pageYOffset > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        visible && (
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
                ↑ Top
            </button>
        )
    );
};

export default BackToTopButton;
