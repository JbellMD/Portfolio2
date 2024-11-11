// backend/controllers/contactController.js
const submitContactForm = (req, res) => {
    const { name, email, message } = req.body;

    // Here you could integrate email sending logic or save to a database
    console.log(`Contact form submission: ${name} (${email}) - ${message}`);

    res.json({ success: true, message: 'Message received!' });
};

module.exports = { submitContactForm };
