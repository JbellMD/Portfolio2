import React, { useState } from 'react';
import styles from '../styles/SystemDesign.module.css';

const SystemDesign = () => {
    const [selectedDesign, setSelectedDesign] = useState(null);
    
    const architectureDesigns = [
        {
            id: 1,
            title: 'Conversational AI Platform with Bedrock',
            description: 'Enterprise-grade conversational AI platform leveraging Amazon Bedrock for LLM integration, with real-time analysis capabilities and comprehensive security controls.',
            image: '/aws-1.png',
            services: ['Amazon Bedrock', 'AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Amazon CloudFront', 'AWS IAM', 'Amazon Cognito'],
            keyFeatures: [
                'Secure enterprise LLM integration with fine-tuning capabilities using Amazon Bedrock with IAM and Cognito for role-based access and authentication.',
                'Multi-model selection and version control facilitated through Amazon Bedrock’s model provider interface and dynamic Lambda invocations.',
                'Comprehensive logging and monitoring achieved via integrated CloudWatch dashboards and custom metrics across Lambda and DynamoDB.',
                'Scalable serverless architecture utilizing AWS Lambda for compute, S3 for persistence, and CloudFront for global content delivery.'
            ]
        },
        {
            id: 2,
            title: 'SageMaker MLOps Pipeline',
            description: 'End-to-end MLOps pipeline utilizing Amazon SageMaker for model training, monitoring, and deployment with CI/CD integration.',
            image: '/aws-2.png',
            services: ['Amazon SageMaker', 'AWS CodePipeline', 'AWS Lambda', 'Amazon CloudWatch', 'Amazon S3', 'AWS Step Functions'],
            keyFeatures: [
                'Automated model training and validation orchestrated by AWS Step Functions and SageMaker pipelines.',
                'A/B testing for model deployment managed using custom endpoints in SageMaker and versioned routing logic in Lambda.',
                'Drift detection and monitoring via CloudWatch metrics and alerts paired with automated model checks.',
                'Model versioning and lineage tracking supported through S3 versioning and SageMaker Model Registry.'
            ]            
        },
        {
            id: 3,
            title: 'Serverless Data Processing Architecture',
            description: 'Event-driven, serverless architecture for real-time and batch data processing with comprehensive analytics capabilities.',
            image: '/aws-3.png',
            services: ['AWS Lambda', 'Amazon Kinesis', 'Amazon S3', 'Amazon Athena', 'Amazon QuickSight', 'AWS Glue'],
            keyFeatures: [
                'Real-time data streaming and processing powered by Amazon Kinesis integrated with AWS Lambda for on-the-fly transformations.',
                'Automated ETL pipelines built with AWS Glue and Lambda triggered by S3 events.',
                'Cost-effective serverless compute ensured by pay-per-use Lambda functions and event-based architecture.',
                'Comprehensive data lake architecture implemented using Amazon S3, queried through Athena and visualized in QuickSight.'
            ]                     
        },
        {
            id: 4,
            title: 'Hybrid Machine Learning Platform',
            description: 'Hybrid ML platform combining custom models with pre-trained AI services from AWS, designed for enterprise scalability.',
            image: '/aws-4.png',
            services: ['Amazon SageMaker', 'Amazon Bedrock', 'Amazon Comprehend', 'Amazon Rekognition', 'AWS Lambda', 'Amazon API Gateway'],
            keyFeatures: [
                'Integration of custom models (SageMaker) with AWS AI services like Comprehend and Bedrock for multi-modal inference.',
                'Centralized model governance managed via versioned SageMaker models and IAM-controlled access policies.',
                'Scalable inference endpoints hosted on SageMaker with auto-scaling and invocation via API Gateway.',
                'Enterprise-grade security controls using IAM roles, logging with CloudWatch, and Lambda execution control.'
            ]                     
        },
        {
            id: 5,
            title: 'Generative AI Document Processing',
            description: 'Document analysis and extraction pipeline leveraging generative AI for unstructured data processing and knowledge extraction.',
            image: '/aws-5.png',
            services: ['Amazon Textract', 'Amazon Bedrock', 'Amazon Comprehend', 'AWS Lambda', 'Amazon S3', 'Amazon OpenSearch Service'],
            keyFeatures: [
                'Automated document extraction and classification using Amazon Textract and Bedrock for downstream LLM-based analysis.',
                'Entity recognition and relationship mapping via Amazon Comprehend for semantic understanding.',
                'Knowledge graph construction by indexing entities into Amazon OpenSearch Service.',
                'Semantic search capabilities through OpenSearch paired with contextual enrichment from Bedrock-generated summaries.'
            ]            
        },
        {
            id: 6,
            title: 'Multi-Region AI Inference Architecture',
            description: 'Globally distributed AI inference architecture with low-latency responses and high availability design.',
            image: '/aws-6.png',
            services: ['Amazon SageMaker', 'Amazon CloudFront', 'AWS Global Accelerator', 'Amazon DynamoDB Global Tables', 'Amazon Route 53'],
            keyFeatures: [
                'Global model deployment with regional customization using SageMaker endpoints in multiple regions.',
                'Edge-optimized inference with CloudFront and Global Accelerator reducing latency for end users.',
                'Disaster recovery capabilities enabled by cross-region DynamoDB Global Tables and health-checked Route 53 routing.',
                'Multi-region failover design automatically reroutes traffic during outages using Route 53’s failover policies.'
            ]            
        },
        {
            id: 7,
            title: 'Real-time AI Recommendation Engine',
            description: 'Scalable recommendation system combining collaborative filtering and content-based approaches with real-time personalization.',
            image: '/aws-7.png',
            services: ['Amazon Personalize', 'Amazon Kinesis', 'AWS Lambda', 'Amazon DynamoDB', 'Amazon SageMaker', 'Amazon ElastiCache'],
            keyFeatures: [
                'Real-time personalization with low latency using Amazon Personalize, Lambda triggers, and Kinesis event streams.',
                'A/B testing framework for recommendation strategies implemented via SageMaker variants and DynamoDB flags.',
                'User behavior tracking and analysis by aggregating events through Kinesis and analyzing patterns with SageMaker.',
                'Integration with existing product catalogs via ElastiCache-backed lookups and DynamoDB key-value access.'
            ]            
        },
        {
            id: 8,
            title: 'Enterprise LLM Integration Platform',
            description: 'Secure enterprise platform for LLM integration with private data sources, comprehensive governance, and compliance controls.',
            image: '/aws-8.png',
            services: ['Amazon Bedrock', 'AWS PrivateLink', 'Amazon RDS', 'AWS KMS', 'Amazon CloudWatch', 'AWS WAF'],
            keyFeatures: [
                'Private VPC deployment with secure data access',
                'Fine-tuning on proprietary datasets',
                'Comprehensive audit logging',
                'Content filtering and moderation'
            ]
        },
        {
            id: 9,
            title: 'AI-Powered Content Moderation System',
            description: 'Scalable, multi-stage content moderation system leveraging both pre-trained and custom AI models for text, image, and video analysis.',
            image: '/aws-9.png',
            services: ['Amazon Rekognition', 'Amazon Comprehend', 'Amazon SageMaker', 'AWS Lambda', 'Amazon SNS', 'Amazon SQS'],
            keyFeatures: [
                'Multi-modal content analysis',
                'Human-in-the-loop review process',
                'Configurable policy enforcement',
                'Real-time monitoring and alerting'
            ]
        },
        {
            id: 10,
            title: 'Hybrid Knowledge Management System',
            description: 'Enterprise knowledge management system combining structured and unstructured data with AI-powered search and retrieval capabilities.',
            image: '/aws-10.png',
            services: ['Amazon Kendra', 'Amazon Bedrock', 'Amazon S3', 'Amazon RDS', 'Amazon OpenSearch Service', 'AWS Lambda'],
            keyFeatures: [
                'Natural language querying of enterprise data',
                'Document understanding and semantic indexing',
                'Integration with existing knowledge bases',
                'Role-based access controls'
            ]
        },
        {
            id: 11,
            title: 'Federated Learning Architecture',
            description: 'Privacy-preserving federated learning architecture allowing model training across distributed data sources without centralizing sensitive data.',
            image: '/aws-11.png',
            services: ['Amazon SageMaker', 'AWS Lambda', 'AWS IoT Core', 'Amazon S3', 'AWS Step Functions', 'AWS KMS'],
            keyFeatures: [
                'Decentralized model training',
                'Privacy-preserving analytics',
                'Edge device integration',
                'Secure model aggregation'
            ]
        },
        {
            id: 12,
            title: 'Multimodal AI Processing Pipeline',
            description: 'End-to-end pipeline for processing and analyzing multimedia content including text, images, audio, and video using specialized AI models.',
            image: '/aws-12.png',
            services: ['Amazon Rekognition', 'Amazon Transcribe', 'Amazon Comprehend', 'Amazon Bedrock', 'AWS Step Functions', 'Amazon S3'],
            keyFeatures: [
                'Coordinated multimodal analysis',
                'Scene understanding and contextual awareness',
                'Automated content tagging and organization',
                'Scalable media processing workflows'
            ]
        },
        {
            id: 13,
            title: 'AI-Driven DevOps Platform',
            description: 'Intelligent DevOps platform utilizing AI for anomaly detection, predictive scaling, and automated incident response.',
            image: '/aws-13.png',
            services: ['Amazon DevOps Guru', 'AWS Lambda', 'Amazon EventBridge', 'Amazon CloudWatch', 'AWS Systems Manager', 'Amazon SageMaker'],
            keyFeatures: [
                'Predictive maintenance and anomaly detection',
                'Automated incident response',
                'Infrastructure optimization',
                'Performance analytics and trend analysis'
            ]
        },
        {
            id: 14,
            title: 'Secure AI Development Environment',
            description: 'Isolated, compliance-ready AI development environment with comprehensive security controls and governance processes.',
            image: '/aws-14.png',
            services: ['Amazon SageMaker', 'AWS CodeArtifact', 'AWS IAM', 'AWS CloudTrail', 'AWS Config', 'Amazon VPC'],
            keyFeatures: [
                'Secure model development lifecycle',
                'Compliance monitoring and enforcement',
                'Data lineage tracking',
                'Isolated development environments'
            ]
        },
        {
            id: 15,
            title: 'Real-time Analytics with AI Insights',
            description: 'Comprehensive real-time analytics platform enhanced with AI-driven insights and anomaly detection capabilities.',
            image: '/aws-15.png',
            services: ['Amazon Kinesis', 'Amazon SageMaker', 'Amazon Managed Service for Apache Flink', 'Amazon QuickSight', 'Amazon SNS', 'AWS Lambda'],
            keyFeatures: [
                'Real-time data processing and visualization',
                'AI-enhanced anomaly detection',
                'Automated alerting and notifications',
                'Interactive dashboards with predictive capabilities'
            ]
        },
        {
            id: 16,
            title: 'AI-Powered Customer Service Platform',
            description: 'Intelligent customer service platform combining chatbots, sentiment analysis, and agent assistance for enhanced customer experiences.',
            image: '/aws-16.png',
            services: ['Amazon Lex', 'Amazon Connect', 'Amazon Comprehend', 'Amazon Bedrock', 'Amazon DynamoDB', 'AWS Lambda'],
            keyFeatures: [
                'Intelligent conversation routing',
                'Real-time sentiment analysis',
                'Agent assistance with knowledge retrieval',
                'Comprehensive interaction analytics'
            ]
        },
        {
            id: 17,
            title: 'Edge AI Infrastructure',
            description: 'Distributed edge AI infrastructure allowing model deployment and inferencing on edge devices with central management.',
            image: '/aws-17.png',
            services: ['AWS IoT Greengrass', 'Amazon SageMaker Edge', 'AWS Lambda', 'Amazon S3', 'AWS IoT Core', 'AWS Step Functions'],
            keyFeatures: [
                'Edge-optimized model deployment',
                'Offline inferencing capabilities',
                'Remote management and monitoring',
                'Efficient model updates and versioning'
            ]
        },
        {
            id: 18,
            title: 'Complete Enterprise AI Platform',
            description: 'Comprehensive enterprise AI platform integrating all components from data ingestion to model deployment and monitoring.',
            image: '/aws-18.png',
            services: ['Amazon SageMaker', 'Amazon Bedrock', 'AWS Glue', 'Amazon S3', 'Amazon CloudWatch', 'AWS Step Functions', 'Amazon API Gateway'],
            keyFeatures: [
                'End-to-end AI development lifecycle',
                'Centralized model governance',
                'Comprehensive security and compliance controls',
                'Integration with enterprise systems'
            ]
        },
        {
            id: 19,
            title: 'Comprehensive AWS Cloud Architecture',
            description: 'Complete overview of the entire AWS Cloud Architecture showcasing the integration of all components.',
            image: '/aws-fulldesign.png',
            services: ['Amazon Bedrock', 'Amazon SageMaker', 'AWS Lambda', 'Amazon S3', 'Amazon DynamoDB', 'Amazon API Gateway', 'Amazon CloudFront', 'AWS Step Functions'],
            keyFeatures: [
                'Enterprise-scale architecture',
                'Comprehensive security implementation',
                'End-to-end AI and ML integration',
                'Optimized for high availability and fault tolerance'
            ]
        }
    ];
    
    const filteredServices = [
        'Amazon Bedrock',
        'Amazon SageMaker', 
        'AWS Lambda', 
        'Amazon S3', 
        'AWS Step Functions', 
        'Amazon DynamoDB', 
        'Amazon API Gateway',
        'Amazon Comprehend',
        'Amazon Rekognition',
        'Amazon OpenSearch Service',
        'Amazon Kinesis',
        'AWS Glue'
    ];
    
    const [selectedService, setSelectedService] = useState(null);
    
    const filterDesignsByService = (service) => {
        if (!service) return architectureDesigns;
        return architectureDesigns.filter(design => 
            design.services.includes(service)
        );
    };
    
    const handleServiceClick = (service) => {
        setSelectedService(service === selectedService ? null : service);
        setSelectedDesign(null);
    };
    
    const displayedDesigns = filterDesignsByService(selectedService);
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>AWS Cloud Architecture Designs</h1>
                <p className={styles.subtitle}>
                    Explore enterprise-grade AWS architectures showcasing expertise in AI, ML, and cloud-native solutions
                </p>
            </div>
            
            <div className={styles.servicesFilter}>
                <h3 className={styles.filterTitle}>Filter by AWS Service:</h3>
                <div className={styles.servicesTags}>
                    {filteredServices.map(service => (
                        <button 
                            key={service}
                            className={`${styles.serviceTag} ${selectedService === service ? styles.activeTag : ''}`}
                            onClick={() => handleServiceClick(service)}
                        >
                            {service}
                        </button>
                    ))}
                </div>
            </div>
            
            {selectedDesign ? (
                <div className={styles.detailedView}>
                    <button 
                        className={styles.backButton}
                        onClick={() => setSelectedDesign(null)}
                    >
                        ← Back to all designs
                    </button>
                    
                    <div className={styles.detailedContent}>
                        <h2 className={styles.detailedTitle}>{selectedDesign.title}</h2>
                        <p className={styles.detailedDescription}>{selectedDesign.description}</p>
                        
                        <div className={styles.imageContainer}>
                            <img 
                                src={selectedDesign.image} 
                                alt={selectedDesign.title} 
                                className={styles.detailedImage}
                            />
                        </div>
                        
                        <div className={styles.detailsSection}>
                            <div className={styles.servicesSection}>
                                <h3 className={styles.sectionTitle}>AWS Services Used</h3>
                                <div className={styles.servicesList}>
                                    {selectedDesign.services.map(service => (
                                        <span key={service} className={styles.serviceItem}>
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className={styles.featuresSection}>
                                <h3 className={styles.sectionTitle}>Key Features</h3>
                                <ul className={styles.featuresList}>
                                    {selectedDesign.keyFeatures.map((feature, index) => (
                                        <li key={index} className={styles.featureItem}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.designsGrid}>
                    {displayedDesigns.map(design => (
                        <div 
                            key={design.id} 
                            className={styles.designCard}
                            onClick={() => setSelectedDesign(design)}
                        >
                            <div className={styles.cardImageContainer}>
                                <img 
                                    src={design.image} 
                                    alt={design.title} 
                                    className={styles.cardImage} 
                                />
                                <div className={styles.overlay}>
                                    <button className={styles.viewButton}>
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{design.title}</h3>
                                <p className={styles.cardDescription}>
                                    {design.description.length > 100 
                                        ? `${design.description.substring(0, 100)}...` 
                                        : design.description
                                    }
                                </p>
                                <div className={styles.cardServices}>
                                    {design.services.slice(0, 3).map(service => (
                                        <span key={service} className={styles.serviceTag}>
                                            {service}
                                        </span>
                                    ))}
                                    {design.services.length > 3 && (
                                        <span className={styles.moreServices}>
                                            +{design.services.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SystemDesign;