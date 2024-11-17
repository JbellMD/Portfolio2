import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            title: 'IBM Full Stack Software Developer Professional Certificate',
            fileUrl: './ibmdev.pdf',
            description: 'Build, deploy, test, run, and manage full stack cloud native applications. GitHub, Node.js, React, CI/CD, Containers, Docker, Kubernetes, OpenShift, Istio, Databases, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing, and more.'
        },
        {
            title: 'IBM AI Developer Professional Certificate',
            fileUrl: './ibmai.pdf',
            description: 'Mastered the fundamentals of software engineering, AI, generative AI, prompt engineering, HTML, JavaScript and Python programming. Gained proficiency in GoLang, LLMs, RAG, MLOps, and API integration for REST framework.'
        },
        {
            title: 'AWS Cloud Consultant Professional Certificate',
            fileUrl: './awsctc.pdf',
            description: 'Mastered making informed decisions about when and how to apply key AWS Services for compute, storage, database, networking, monitoring, and security.'
        },
        {
            title: 'AWS Cloud Solutions Architect Professional Certificate',
            fileUrl: './awssa.pdf',
            description: 'Designed architectural solutions, whether designing for cost, performance, and/or operational excellence, to address common business challenges.'
        },
        {
            title: 'Architecting on Google Compute Engine',
            fileUrl: './google.pdf',
            description: 'Threat mitigation strategies from an enterprise perspective, apply effective cybersecurity policy measures within an Azure environment, & practice on tools like MS defender, Azure Active Directory.'
        },
        {
            title: 'IBM IT Support Professional Certificate',
            fileUrl: './ibmit.pdf',
            description: 'Latest skills and tools used by IT support professionals including hardware and software setup, technical support, customer service, ticketing systems, service level agreements, and troubleshooting.'
        },
        {
            title: 'Microsoft IT Support Specialist Professional Certificate',
            fileUrl: '/path/to/ms-it-support-cert.pdf',
            description: 'Strong foundation in IT support fundamentals, networking, software, hardware and data backup, cybersecurity, Microsoft 365 ecosystem, and Troubleshooting Diagnostics. Gained competency in how generative AI tools and techniques are used in IT Support.'
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Certifications</h1>
            {certifications.map((cert, index) => (
                <div key={index} style={{ marginBottom: '40px' }}>
                    <h2 className="cert-title">
                        <a href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                            {cert.title}
                        </a>
                    </h2>
                    <p>{cert.description}</p>
                    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
                        <iframe
                            src={cert.fileUrl}
                            width="100%"
                            height="500px"
                            style={{ border: 'none' }}
                            title={cert.title}
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certifications;
