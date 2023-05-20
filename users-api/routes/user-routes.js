const express = require('express');

const userActions = require('../controllers/user-actions');

const router = express.Router();

router.post('/signup', userActions.createUser);

router.post('/login', userActions.verifyUser);

// the log file in user-actions.js that is created with a new user gets read when sending
// a GET request to /logs url 
router.get('/logs', userActions.getLogs);

module.exports = router;