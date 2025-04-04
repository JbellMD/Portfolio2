// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ArchitectureProjects from './pages/ArchitectureProjects';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import Presentation from './pages/Presentation';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <BackToTopButton />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/architecture" element={<ArchitectureProjects />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/presentation" element={<Presentation />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
