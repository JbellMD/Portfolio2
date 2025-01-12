// Presentation.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiMonitor, FiSmartphone, FiSettings } from 'react-icons/fi';
import './Presentation.css';

function Presentation() {
    const [activeTab, setActiveTab] = useState('api');

    const categories = {
        api: {
            icon: <FiCode />,
            title: 'API Development',
            sections: [
                {
                    title: 'RESTful API Design',
                    content: 'Implementation of REST APIs following industry best practices:',
                    details: [
                        'Authentication & Authorization',
                        'Rate Limiting',
                        'Versioning',
                        'Documentation with Swagger/OpenAPI'
                    ]
                },
                {
                    title: 'GraphQL APIs',
                    content: 'Modern API development using GraphQL:',
                    details: [
                        'Schema Design',
                        'Query Resolution',
                        'Mutations & Subscriptions',
                        'Performance Optimization'
                    ]
                }
            ]
        },
        cloud: {
            icon: <FiCloud />,
            title: 'Cloud Architecture',
            sections: [
                {
                    title: 'AWS Solutions',
                    content: 'Enterprise-scale AWS architecture:',
                    details: [
                        'Lambda Functions',
                        'API Gateway',
                        'S3 & DynamoDB',
                        'ECS & EKS Deployment'
                    ]
                },
                {
                    title: 'Azure Services',
                    content: 'Microsoft Azure implementation:',
                    details: [
                        'Azure Functions',
                        'Service Bus',
                        'Cosmos DB',
                        'AKS Orchestration'
                    ]
                }
            ]
        },
        web: {
            icon: <FiMonitor />,
            title: 'Web Development',
            sections: [
                {
                    title: 'Frontend Stack',
                    content: 'Modern web application development:',
                    details: [
                        'React.js Components',
                        'State Management',
                        'Performance Optimization',
                        'Responsive Design'
                    ]
                },
                {
                    title: 'Backend Stack',
                    content: 'Server-side implementation:',
                    details: [
                        'Node.js/Express',
                        'Django/Python',
                        '.NET Core/WASM',
                        'Database Design'
                    ]
                }
            ]
        },
        mobile: {
            icon: <FiSmartphone />,
            title: 'Mobile Development',
            sections: [
                {
                    title: 'Cross-Platform',
                    content: 'Mobile app development:',
                    details: [
                        'React Native',
                        'Flutter',
                        'Native APIs',
                        'Push Notifications'
                    ]
                }
            ]
        },
        devops: {
            icon: <FiSettings />,
            title: 'DevOps & Automation',
            sections: [
                {
                    title: 'CI/CD Pipeline',
                    content: 'Automated deployment workflow:',
                    details: [
                        'GitHub Actions',
                        'Jenkins Pipeline',
                        'Docker Containers',
                        'Kubernetes Clusters'
                    ]
                },
                {
                    title: 'Monitoring',
                    content: 'System monitoring and maintenance:',
                    details: [
                        'CloudWatch Metrics',
                        'Application Insights',
                        'Log Analytics',
                        'Alert Management'
                    ]
                }
            ]
        }
    };

    return (
        <motion.div 
            className="presentation-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="presentation-header">
                <h1>Technical Documentation</h1>
                <p>Comprehensive guide to my technical expertise and implementations</p>
            </div>
            
            <div className="tab-container">
                {Object.keys(categories).map(key => (
                    <motion.button
                        key={key}
                        className={`tab-button ${activeTab === key ? 'active' : ''}`}
                        onClick={() => setActiveTab(key)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="tab-icon">{categories[key].icon}</span>
                        {categories[key].title}
                    </motion.button>
                ))}
            </div>

            <motion.div 
                className="content-container"
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {categories[activeTab].sections.map((section, index) => (
                    <motion.div 
                        key={index} 
                        className="section-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h2>{section.title}</h2>
                        <p>{section.content}</p>
                        <ul>
                            {section.details.map((detail, idx) => (
                                <motion.li 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                                >
                                    {detail}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Presentation;