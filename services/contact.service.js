const Contact = require('../models/Contact');

// Get all Contacts
exports.getAll = async (res) => {
  try {
    const result = await Contact.find().sort({ name: 1 });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Create one Contact
exports.createOne = async (body, res) => {
  try {
    const result = await Contact.create(body);
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Get one Contact
exports.getOne = async (id, res) => {
  try {
    const result = await Contact.findOne({ _id: id });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Update one Contact
exports.updateOne = async (id, body, res) => {
  try {
    const result = await Contact.updateOne({ _id: id }, { $set: body });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Delete one Contact
exports.deleteOne = async (id, res) => {
  try {
    const result = await Contact.deleteOne({ _id: id });
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};

// Delete all Contacts
exports.deleteAll = async (res) => {
  try {
    const result = await Contact.deleteMany();
    res.json(result);
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
};
