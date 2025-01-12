// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Dropdown icon
import './Navbar.css';

const Navbar = () => {
    const [projectsOpen, setProjectsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">My Portfolio</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/presentation" className="nav-link">Documentation</Link>
                <Link to="/certifications">Certifications</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact Me</Link>
                <div
                    className="navbar-projects"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                >
                    <span>Projects <FaChevronDown /></span>
                    {projectsOpen && (
                        <div className="dropdown-menu">
                            <Link to="/projects">Code Projects</Link>
                            <Link to="/projects/architecture">Architecture Projects</Link>
                            {/* Add individual project links here if needed */}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
