// src/components/Testimonial.jsx
import React from 'react';


const Testimonial = ({ quote, author }) => (
    <div className="testimonial">
        <p>“{quote}”</p>
        <h4>- {author}</h4>
    </div>
);

export default Testimonial;
