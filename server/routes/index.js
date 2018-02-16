const express = require('express');

const helloWorldController = require('../controllers/helloWorldController');

const router = express.Router();

router.get('/api/helloworld', helloWorldController.helloWorld);

module.exports = router;
