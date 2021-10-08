const { ObjectId } = require('mongodb');
const service = require('../services/service.service');

// Get all services
exports.getAll = (req, res) => {
  service.getAll(res);
};

// Create one service
exports.createOne = (req, res) => {
  const { body } = req;
  service.createOne(body, res);
};

// Get one service
exports.getOne = (req, res) => {
  const { id } = req.params;
  service.getOne(ObjectId(id), res);
};

// Update one service
exports.updateOne = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  service.updateOne(ObjectId(id), body, res);
};

// Delete one service
exports.deleteOne = (req, res) => {
  const { id } = req.params;
  service.deleteOne(ObjectId(id), res);
};

// Delete all services
exports.deleteAll = (req, res) => {
  service.deleteAll(res);
};
