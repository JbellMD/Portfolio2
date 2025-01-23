import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Talha Sabri",
    role: "CTO, Reality AI",
    content: "Jonathan's unique blend of software developerment and cloud solutions expertise made our project a success. The implementation of microservices design patterns significantly improved our system's scalability and reliability.",
    image: "/testimonial1.svg",
    rating: 5
  },
  {
    name: "Sara Al-Hassan",
    role: "Lead Developer, AWS",
    content: "I have had the pleasure of working with Jonathan on a cloud migration project. The cloud migration strategy was brilliant, zero downtime migration with 40% cost reduction in cloud resources, his collaboration and communication were exceptional.",
    image: "/testimonial2.svg",
    rating: 5
  },
  {
    name: "Raymond Hernandez",
    role: "Senior Software Engineer, Apple",
    content: "Jonathan's ability to leverage his expertise in AWS and Python for real-time analytics helped us process data 10x faster with elegant, future-proof solutions. He demonstrates a deep understanding of the industry and his ability to approach complex problems with a creative approach.",
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
