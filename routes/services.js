const express = require('express');
const controller = require('../controllers/service.controller');

const router = express.Router();

// Get all services
router.get('/', controller.getAll);

// Create one service
router.post('/', controller.createOne);

// Delete all services
router.delete('/', controller.deleteAll);

// Get one service
router.get('/:id', controller.getOne);

// Update one service
router.put('/:id', controller.updateOne);

// Delete one service
router.delete('/:id', controller.deleteOne);

module.exports = router;
