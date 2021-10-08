const express = require('express');
const controller = require('../controllers/contact.controller');

const router = express.Router();

// Get all contacts
router.get('/', controller.getAll);

// Create one contact
router.post('/', controller.createOne);

// Delete all contacts
router.delete('/', controller.deleteAll);

// Get one contact
router.get('/:id', controller.getOne);

// Update one contact
router.put('/:id', controller.updateOne);

// Delete one contact
router.delete('/:id', controller.deleteOne);

module.exports = router;
