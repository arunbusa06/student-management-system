const db = require("../config/db");

exports.getAll = (cb) => {
  db.query("SELECT * FROM students", cb);
};

exports.create = (data, cb) => {
  db.query(
    "INSERT INTO students (name,email,course,phone) VALUES (?,?,?,?)",
    [data.name, data.email, data.course, data.phone],
    cb
  );
};

exports.update = (id, data, cb) => {
  db.query(
    "UPDATE students SET name=?,email=?,course=?,phone=? WHERE id=?",
    [data.name, data.email, data.course, data.phone, id],
    cb
  );
};

exports.delete = (id, cb) => {
  db.query("DELETE FROM students WHERE id=?", [id], cb);
};