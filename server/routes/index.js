const express = require('express');
const { resolve } = require('path');

const helloWorldController = require('../controllers/helloWorldController');

const router = express.Router();

// **
// API
// **
router.get('/api/helloworld', helloWorldController.helloWorld);
router.post('/api/pathBodyTest/:id', helloWorldController.pathBodyTest);

// **
// React
// **
router.get('/*', (req, res) => {
  res.sendFile(resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = router;
