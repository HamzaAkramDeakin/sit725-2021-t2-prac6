const { ObjectId } = require('mongodb');
const service = require('../services/customer.service');

// Get all customers
exports.getAll = (req, res) => {
  service.getAll(res);
};

// Create one customer
exports.createOne = (req, res) => {
  const { body } = req;
  service.createOne(body, res);
};

// Get one customer
exports.getOne = (req, res) => {
  const { id } = req.params;
  service.getOne(ObjectId(id), res);
};

// Update one customer
exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  service.updateOne(ObjectId(id), body, res);
};

// Delete one customer
exports.deleteOne = (req, res) => {
  const { id } = req.params;
  service.deleteOne(ObjectId(id), res);
};

// Delete all customers
exports.deleteAll = (req, res) => {
  service.deleteAll(res);
};
