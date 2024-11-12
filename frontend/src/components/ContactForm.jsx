import React, { useState } from 'react';
import './ContactForm.css'; // Import the new CSS file

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
