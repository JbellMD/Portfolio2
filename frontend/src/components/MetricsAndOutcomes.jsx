// components/MetricsAndOutcomes.jsx
import React from 'react';
import './MetricsAndOutcomes.css';

const metrics = [
  {
    category: 'Performance',
    items: [
      {
        title: 'Response Time',
        value: '-60%',
        description: 'Average response time reduction across all services'
      },
      {
        title: 'Throughput',
        value: '10x',
        description: 'Increase in system throughput capacity compared to legacy systems'
      }
    ]
  },
  {
    category: 'Reliability',
    items: [
      {
        title: 'Uptime',
        value: '99.99%',
        description: 'System availability achieved over a period of time'
      },
      {
        title: 'Recovery',
        value: '<5min',
        description: 'Average time to recover from failures for all services'
      }
    ]
  },
  {
    category: 'Scalability',
    items: [
      {
        title: 'Load Handling',
        value: '5M+',
        description: 'Concurrent users supported based on usage patterns'
      },
      {
        title: 'Auto-scaling',
        value: '100%',
        description: 'Automated resource scaling based on demand'
      }
    ]
  },
  {
    category: 'Cost Efficiency',
    items: [
      {
        title: 'Infrastructure',
        value: '-40%',
        description: 'Reduction in infrastructure costs across all services'
      },
      {
        title: 'Maintenance',
        value: '-50%',
        description: 'Reduction in maintenance effort across all services'
      }
    ]
  }
];

const MetricsAndOutcomes = () => {
  return (
    <div className="metrics-section">
      <h2 className="section-title">Performance Metrics</h2>
      <div className="metrics-grid">
        {metrics.map((category, index) => (
          <div key={index} className="metric-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="metric-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="metric-item">
                  <div className="metric-header">
                    <span className="metric-value">{item.value}</span>
                    <span className="metric-title">{item.title}</span>
                  </div>
                  <p className="metric-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsAndOutcomes;
