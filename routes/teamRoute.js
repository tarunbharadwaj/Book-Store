// const { urlencoded } = require('body-parser');
const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

/**
 * @description Root Routr
 * @method GET /
 */
router.get('/', teamController.getAllTeams);

/**
 * @description Add Team
 * @method GET /add-team
 */
router.get('/add-team', teamController.getAddUser);

/**
 * @description for update user
 * @method GET /update-user
 */
router.get('/update-team', teamController.getUpdateUser);

/**
 * @description Root Routr
 * @method GET /
 */

module.exports = router;


