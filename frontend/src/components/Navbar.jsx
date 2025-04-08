// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [projectsOpen, setProjectsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (projectsOpen) setProjectsOpen(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setProjectsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[rgba(10,25,47,0.95)] backdrop-blur-md z-50 border-b border-[rgba(100,227,255,0.1)] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-[var(--accent-color)] font-bold text-xl hover:text-[var(--text-primary)] transition-colors" onClick={closeMenu}>
                            My Portfolio
                        </Link>
                    </div>

                    {/* Hamburger menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link to="/" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">About Me</Link>
                        <Link to="/presentation" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">AI/ML Projects</Link>
                        <Link to="/certifications" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">Certifications</Link>
                        <Link to="/blog" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">Blog</Link>
                        <Link to="/resume" className="text-gray-300 hover:text-[var(--accent-color)] transition-colors">Resume</Link>
                        
                        {/* Projects dropdown */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => setProjectsOpen(true)}
                            onMouseLeave={() => setProjectsOpen(false)}
                        >
                            <button
                                className="text-gray-300 hover:text-[var(--accent-color)] transition-colors flex items-center"
                            >
                                Projects <FaChevronDown className="ml-1" />
                            </button>
                            <div className={`absolute right-0 mt-2 w-48 bg-[rgba(10,25,47,0.95)] rounded-md shadow-lg py-1 transition-all duration-200 ${projectsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <Link to="/projects" className="block px-4 py-2 text-sm text-gray-300 hover:text-[var(--accent-color)]">
                                    Code Projects
                                </Link>
                                <Link to="/projects/architecture" className="block px-4 py-2 text-sm text-gray-300 hover:text-[var(--accent-color)]">
                                    Architecture Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>About Me</Link>
                        <Link to="/presentation" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>Documentation</Link>
                        <Link to="/certifications" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>Certifications</Link>
                        <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>Blog</Link>
                        <Link to="/resume" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>Resume</Link>
                        
                        {/* Mobile Projects dropdown */}
                        <div>
                            <button
                                onClick={() => setProjectsOpen(!projectsOpen)}
                                className="flex items-center w-full px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors"
                            >
                                Projects <FaChevronDown className="ml-1" />
                            </button>
                            {projectsOpen && (
                                <div className="pl-4">
                                    <Link to="/projects" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>
                                        Code Projects
                                    </Link>
                                    <Link to="/projects/architecture" className="block px-3 py-2 text-gray-300 hover:text-[var(--accent-color)] transition-colors" onClick={closeMenu}>
                                        Architecture Projects
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
