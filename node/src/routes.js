// This file initiates the app

const express = require('express');
const userRoutes = require('./User/routes');

const router = express.Router();

router.use(userRoutes);

module.exports = router;
