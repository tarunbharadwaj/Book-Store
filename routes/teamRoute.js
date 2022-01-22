const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Get all teams
router.get('/', teamController.getAllTeams);

// To add a team
router.get('/add-team', teamController.getAddUser);

// To update a team
router.get('/update-team', teamController.getUpdateUser);

// APIp
router.get('/api/users', teamController.find);
router.post('/api/users', teamController.create);
router.put('/api/users/:id', teamController.update);
router.delete('/api/users/:id', teamController.delete);

module.exports = router;
