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
                    title: 'Authentication & Authorization',
                    content: 'Secure API access using token-based mechanisms like OAuth 2.0 or JWT.',
                    details: [
                        'Use HTTPS for all API endpoints.',
                        'Issue and validate JSON Web Tokens (JWT) for session handling.',
                        'Role-Based Access Control (RBAC) for enforcing permissions.',
                        'Environment-based secure storage for API keys and secrets.'
                    ]
                },
                {
                    title: 'Rate Limiting',
                    content: 'Control API usage to prevent abuse and ensure fair resource allocation.',
                    details: [
                        'Implement rate limiting with libraries like express-rate-limit.',
                        'Leverage distributed rate-limiting systems using Redis for scalability.',
                        'Differentiate rate limits for public and private APIs.',
                        'Provide meaningful error responses for clients exceeding limits.'
                    ]
                },
                {
                    title: 'Versioning',
                    content: 'Maintain backward compatibility and ensure smooth upgrades with API versions.',
                    details: [
                        'Use URL-based versioning (e.g., /v1/resource).',
                        'Support versioning via headers for advanced flexibility.',
                        'Clearly document deprecation timelines for older versions.',
                        'Communicate changes through API response headers (e.g., Deprecation header).'
                    ]
                },
                {
                    title: 'Documentation with Swagger/OpenAPI',
                    content: 'Provide comprehensive, interactive API documentation for developers.',
                    details: [
                        'Define API endpoints, parameters, and responses using OpenAPI specifications.',
                        'Generate interactive documentation using Swagger UI or ReDoc.',
                        'Include example request/response payloads for better clarity.',
                        'Automate documentation generation with tools like swagger-jsdoc.'
                    ]
                }
            ]
        },
        cloud: {
            icon: <FiCloud />,
            title: 'Cloud Architecture',
            sections: [
                {
                    title: 'AWS Solutions - E-Commerce Platform',
                    content: 'Enterprise-scale AWS architecture for e-commerce platform:',
                    details: [
                'Frontend: React SPA with CloudFront CDN distribution',
                'Backend: Node.js on EC2 with Auto Scaling Groups',
                'Database: Aurora PostgreSQL (Multi-AZ) with ElastiCache',
                'Storage: S3 for static assets, EBS for EC2 storage',
                'Messaging: SQS for order processing, SNS for notifications',
                'Security: IAM, Cognito, Security Groups & NACLs',
                'Monitoring: CloudWatch metrics, CloudTrail audit logs',
                'Network: Route 53 DNS, VPC for secure networking'
            ]
                },
                {
                    title: 'High Availability Design',
                    content: 'Resilient architecture patterns for 24/7 operation:',
                    details: [
                        'Multi-AZ deployment for database redundancy',
                        'Auto Scaling Groups for compute elasticity',
                        'CloudFront edge caching for global performance',
                        'S3 versioning and lifecycle policies',
                        'Dead Letter Queues for failed message handling'
                    ]
                },
                {
                    title: 'Cost Optimization',
                    content: 'Efficient resource utilization strategies:',
                    details: [
                        'Reserved Instances for predictable workloads',
                        'S3 Intelligent-Tiering for storage optimization',
                        'Aurora auto-scaling for read replicas',
                        'ElastiCache TTL policies for memory management',
                        'Resource tagging for cost allocation'
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
                    content: 'Build modern web applications with responsive designs and efficient performance.',
                    details: [
                        'React.js for dynamic component-based development.',
                        'State management tools like Redux or Context API.',
                        'Responsive design for multi-device compatibility.',
                        'Performance optimization through code splitting and lazy loading.'
                    ]
                },
                {
                    title: 'Backend Stack',
                    content: 'Server-side development for robust and scalable applications.',
                    details: [
                        'Node.js with Express for REST APIs.',
                        'Django with Python for advanced data processing.',
                        '.NET Core for enterprise-grade backend solutions.',
                        'Database design using SQL and NoSQL solutions like MongoDB or PostgreSQL.'
                    ]
                }
            ]
        },
        mobile: {
            icon: <FiSmartphone />,
            title: 'Mobile Development',
            sections: [
                {
                    title: 'Cross-Platform Development',
                    content: 'Create mobile applications compatible with Android and iOS.',
                    details: [
                        'React Native for cross-platform development.',
                        'Flutter for beautiful and high-performance apps.',
                        'Integration with native device APIs (e.g., camera, GPS).',
                        'Push notifications for real-time updates and user engagement.'
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
                    content: 'Streamline development with continuous integration and deployment.',
                    details: [
                        'GitHub Actions for automated workflows.',
                        'Jenkins for robust CI/CD pipelines.',
                        'Containerization with Docker for consistent deployments.',
                        'Kubernetes for orchestration and scaling of microservices.'
                    ]
                },
                {
                    title: 'Monitoring and Maintenance',
                    content: 'Ensure application reliability with proactive monitoring.',
                    details: [
                        'CloudWatch for system metrics and alerts.',
                        'Application Insights for performance tracking.',
                        'Centralized log analytics with ELK Stack.',
                        'Automated alerting and incident management.'
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