const express = require('express');

const helloWorldController = require('../controllers/helloWorldController');

const router = express.Router();

router.get('/api/helloworld', helloWorldController.helloWorld);
router.post('/api/pathBodyTest/:id', helloWorldController.pathBodyTest);

module.exports = router;
