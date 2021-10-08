const Service = require('../models/Service');

// Get all services
exports.getAll = async (res) => {
  try {
    const result = await Service.find().sort({ name: 1 });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Create one service
exports.createOne = async (body, res) => {
  try {
    const result = await Service.create(body);
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Get one service
exports.getOne = async (id, res) => {
  try {
    const result = await Service.findOne({ _id: id });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Update one service
exports.updateOne = async (id, body, res) => {
  try {
    const result = await Service.updateOne({ _id: id }, { $set: body });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Delete one service
exports.deleteOne = async (id, res) => {
  try {
    const result = await Service.deleteOne({ _id: id });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Delete all services
exports.deleteAll = async (res) => {
  try {
    const result = await Service.deleteMany();
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};
