const model = require("../models/studentModel");

exports.getStudents = (req, res) => {
  model.getAll((err, data) => res.json(data));
};

exports.addStudent = (req, res) => {
  model.create(req.body, () => res.json("Added"));
};

exports.updateStudent = (req, res) => {
  model.update(req.params.id, req.body, () => res.json("Updated"));
};

exports.deleteStudent = (req, res) => {
  model.delete(req.params.id, () => res.json("Deleted"));
};