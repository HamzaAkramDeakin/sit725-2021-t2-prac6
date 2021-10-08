const { ObjectId } = require('mongodb');
const service = require('../services/contact.service');

// Get all contacts
exports.getAll = (req, res) => {
  service.getAll(res);
};

// Create one contact
exports.createOne = (req, res) => {
  const { body } = req;
  service.createOne(body, res);
};

// Get one contact
exports.getOne = (req, res) => {
  const { id } = req.params;
  service.getOne(ObjectId(id), res);
};

// Update one contact
exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  service.updateOne(ObjectId(id), body, res);
};

// Delete one contact
exports.deleteOne = (req, res) => {
  const { id } = req.params;
  service.deleteOne(ObjectId(id), res);
};

// Delete all contacts
exports.deleteAll = (req, res) => {
  service.deleteAll(res);
};
