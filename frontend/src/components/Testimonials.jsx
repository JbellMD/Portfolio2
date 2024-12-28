import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc.",
    content: "Jonathan's implementation of microservices design patterns significantly improved our system's scalability and reduced deployment time by 70%.",
    image: "/testimonial1.svg",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer, CloudScale",
    content: "The cloud migration strategy was brilliant. Zero downtime migration with 40% cost reduction in cloud resources.",
    image: "/testimonial2.svg",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Product Manager, DataFlow",
    content: "Jonathan's expertise in real-time analytics helped us process data 10x faster with elegant, future-proof solutions.",
    image: "/testimonial3.svg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-content">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-glow"></div>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
