// backend/controllers/testimonialController.js
const getTestimonials = (req, res) => {
    // Example data - replace with database logic if needed
    const testimonials = [
        { id: 1, quote: "Great work!", author: "Client A" },
        { id: 2, quote: "Highly recommend!", author: "Client B" }
    ];
    res.json(testimonials);
};

module.exports = { getTestimonials };
