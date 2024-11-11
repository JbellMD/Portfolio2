// backend/routes/contactRoutes.js
const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

router.post('/', submitContactForm); // Submit contact form

module.exports = router;

