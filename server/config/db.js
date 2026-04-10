const mysql = require("mysql2");
require("dotenv").config();

const dbUrl = process.env.DATABASE_URL || process.env.MYSQL_URL;

const db = dbUrl 
  ? mysql.createConnection(dbUrl)
  : mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
    });

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected...");
    
    // Auto-create tables if they don't exist (useful for Railway)
    const createUserTable = `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(255),
      role ENUM('admin','user') DEFAULT 'user'
    )`;

    const createStudentsTable = `CREATE TABLE IF NOT EXISTS students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100),
      course VARCHAR(100),
      phone VARCHAR(15)
    )`;

    db.query(createUserTable, (err) => {
      if (err) console.error("❌ Error creating users table", err);
    });
    db.query(createStudentsTable, (err) => {
      if (err) console.error("❌ Error creating students table", err);
    });
  }
});

module.exports = db;