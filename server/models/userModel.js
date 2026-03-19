const db = require("../config/db");

exports.createUser = (name, email, password, role, cb) => {
  db.query(
    "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
    [name, email, password, role],
    cb
  );
};

exports.findUserByEmail = (email, cb) => {
  db.query("SELECT * FROM users WHERE email=?", [email], cb);
};