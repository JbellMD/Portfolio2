// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import CodeProjects from './pages/CodeProjects';
import ArchitectureProjects from './pages/ArchitectureProjects';
import Certifications from './pages/Certifications';
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
                    <Route path="/contact" element={<ContactMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/code" element={<CodeProjects />} />
                    <Route path="/projects/architecture" element={<ArchitectureProjects />} />
                    <Route path="/certifications" element={<Certifications />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
