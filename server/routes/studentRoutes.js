const express = require("express");
const router = express.Router();

const db = require("../config/db");
const auth = require("../middleware/authMiddleware");

// GET ALL
router.get("/", auth, (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ADD
router.post("/", auth, (req, res) => {
  const { name, email, course, phone } = req.body;

  const sql = "INSERT INTO students (name, email, course, phone) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, course, phone], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Student added");
  });
});

// UPDATE
router.put("/:id", auth, (req, res) => {
  const { name, email, course, phone } = req.body;

  const sql = "UPDATE students SET name=?, email=?, course=?, phone=? WHERE id=?";

  db.query(sql, [name, email, course, phone, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Updated");
  });
});

// DELETE
router.delete("/:id", auth, (req, res) => {
  db.query("DELETE FROM students WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Deleted");
  });
});

module.exports = router;