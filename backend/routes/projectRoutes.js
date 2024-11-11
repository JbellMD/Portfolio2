// backend/routes/projectRoutes.js
const express = require('express');
const { getProjects, getProjectById } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getProjects);          // Get all projects
router.get('/:id', getProjectById);     // Get a single project by ID

module.exports = router;
