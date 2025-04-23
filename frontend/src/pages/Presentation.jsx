// Presentation.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projectData = [
    {
        title: 'DeepMind RAG Implementation',
        description: 'Advanced Retrieval-Augmented Generation (RAG) system built with Python, leveraging state-of-the-art language models and vector databases for enhanced information retrieval and generation.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/DeepMind',
        techStack: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'RAG', 'NLP']
    },
    {
        title: 'Higher Self Chatbot',
        description: 'Advanced Chatbot featuring Retrieval-Augmented Generation (RAG) system built with Python, leveraging state-of-the-art language models with a focus on user experience and personalized interactions.',
        imageUrl: '/chatbot.jpg',
        codeLink: 'https://github.com/JbellMD/higher-self',
        demoLink: 'https://laughingsmile.netlify.app/',
        techStack: ['Python', 'LangChain', 'OpenAI', 'Vector DB', 'FastAPI', 'RAG', 'NLP']
    },
    {
        title: 'AI Fitness Coach',
        description: 'Intelligent fitness coaching system that uses machine learning to analyze workout patterns and provide personalized exercise recommendations and form corrections.',
        imageUrl: '/core.png',
        codeLink: 'https://github.com/JbellMD/ai-fitness-next',
        techStack: ['Python', 'TensorFlow', 'Computer Vision', 'Next.js', 'OpenAI', 'Machine Learning']
    },
    {
        title: 'MarvelAI Platform',
        description: 'AI-powered creative platform that generates and manipulates comic-style artwork using advanced image generation and manipulation techniques.',
        imageUrl: '/marvel.png',
        codeLink: 'https://github.com/JbellMD/MarvelAI',
        techStack: ['Python', 'Stable Diffusion', 'GANs', 'React', 'Firebase', 'Computer Vision']
    },
    {
        title: 'LLM Fine-Tuning Pipeline',
        description: 'End-to-end pipeline for fine-tuning large language models on custom datasets, featuring automated data preprocessing, training, and evaluation workflows.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/llm-finetuning',
        techStack: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'MLOps', 'HuggingFace']
    },
    {
        title: 'Intelligent Document Processing',
        description: 'Document processing system using OCR and NLP to extract, classify, and analyze information from various document types with high accuracy.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/doc-processor',
        techStack: ['Python', 'Tesseract', 'spaCy', 'BERT', 'FastAPI', 'OCR', 'NLP']
    },
    {
        title: 'Sentiment Analysis Engine',
        description: 'Real-time sentiment analysis system for social media and customer feedback, utilizing advanced NLP techniques and deep learning models for accurate emotion detection.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/sentiment-engine',
        techStack: ['Python', 'BERT', 'RoBERTa', 'FastAPI', 'Redis', 'Docker', 'NLP']
    },
    {
        title: 'Neural Style Transfer App',
        description: 'Web application that applies artistic styles to images using deep neural networks, featuring real-time processing and custom style preservation techniques.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/neural-style',
        techStack: ['Python', 'TensorFlow', 'CNN', 'Flask', 'React', 'AWS Lambda']
    },
    {
        title: 'Time Series Forecasting API',
        description: 'Advanced time series forecasting system using ensemble methods and deep learning for accurate predictions in financial and business applications.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/time-series-api',
        techStack: ['Python', 'Prophet', 'LSTM', 'FastAPI', 'PostgreSQL', 'Docker']
    },
    {
        title: 'Reinforcement Learning Game AI',
        description: 'Game AI system trained using reinforcement learning to master complex strategic gameplay, featuring multi-agent training and adaptive difficulty scaling.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/rl-game-ai',
        techStack: ['Python', 'PyTorch', 'OpenAI Gym', 'DQN', 'A3C', 'TensorBoard']
    },
    {
        title: 'Speech Recognition System',
        description: 'Custom speech recognition system with noise reduction and accent adaptation capabilities, built using deep learning and signal processing techniques.',
        imageUrl: '/builder.jpg',
        codeLink: 'https://github.com/JbellMD/speech-recognition',
        techStack: ['Python', 'Wav2Vec', 'PyDub', 'TensorFlow', 'FastAPI', 'WebRTC']
    }
];

const AIMLProjects = () => {
    const [hoveredTechStack, setHoveredTechStack] = useState(null);

    const handleProjectHover = (techStack) => {
        setHoveredTechStack(techStack);
    };

    const getTechTagClassName = (tech) => {
        const baseClass = styles['tech-tag'];
        if (!hoveredTechStack) return baseClass;
        
        return `${baseClass} ${
            hoveredTechStack.includes(tech) 
                ? styles['tech-tag-highlighted']
                : styles['tech-tag-dimmed']
        }`;
    };

    return (
        <div className={styles['projects-container']}>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        onHover={handleProjectHover}
                        getTechTagClassName={getTechTagClassName}
                    />
                ))}
            </div>
        </div>
    );
};

export default AIMLProjects;