// backend/controllers/projectController.js
const getProjects = (req, res) => {
    // Example data - replace with database logic if needed
    const projects = [
        { id: 1, title: 'Project One', description: 'A coding project.' },
        { id: 2, title: 'Project Two', description: 'An architecture project.' }
    ];
    res.json(projects);
};

const getProjectById = (req, res) => {
    const { id } = req.params;
    // Example data - replace with database logic if needed
    const project = { id: id, title: `Project ${id}`, description: `Description for project ${id}` };
    res.json(project);
};

module.exports = { getProjects, getProjectById };
