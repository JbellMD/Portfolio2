// backend/routes/testimonialRoutes.js
const express = require('express');
const { getTestimonials } = require('../controllers/testimonialController');

const router = express.Router();

router.get('/', getTestimonials); // Get all testimonials

module.exports = router;
