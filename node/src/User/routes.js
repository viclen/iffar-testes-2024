// This file initiates the app

const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

// User routes
const user = new UserController();

router.post('/register', (req, res) => user.register(req, res));
router.post('/login', (req, res) => user.login(req, res));
router.get('/info', (req, res) => user.getInfo(req, res));

module.exports = router;
