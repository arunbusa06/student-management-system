# 🎓 Student Management System

## 📌 Project Description

The **Student Management System** is a full-stack web application developed to manage student records efficiently. It allows administrators to perform operations such as adding, updating, deleting, and viewing student data with secure authentication.

---

## 🚀 Technologies Used

### 🔹 Frontend

* React.js
* React Router
* CSS / Bootstrap

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MySQL

### 🔹 Authentication & Security

* JWT (JSON Web Token)
* bcrypt (Password Hashing)

---

## ✨ Features

* 🔐 User Registration & Login
* 🔑 JWT-based Authentication
* 🔒 Password Encryption using bcrypt
* 👨‍🎓 Add Student
* 📋 View Student List
* ✏️ Update Student Details
* ❌ Delete Student
* 🔁 Full CRUD Operations
* 🛡️ Protected Routes

---

## 📂 Project Structure

```
student-management-system/
├── client/        # React frontend
├── server/        # Node.js backend
├── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone https://github.com/arunbusa06/student-management-system.git
cd student-management-system
```

---

### 🔹 2. Setup Backend

```
cd server
npm install
npm start
```

---

### 🔹 3. Setup Frontend

```
cd client
npm install
npm start
```

---

## 🌐 Running the Project

* Frontend: http://localhost:3000
* Backend: http://localhost:5000

---

## 🗄️ Database Configuration (MySQL)

Create a MySQL database and update your `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=student_db
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🔐 Authentication Flow

1. User registers → password hashed using bcrypt
2. User logs in → JWT token generated
3. Token used for accessing protected routes
4. Unauthorized users are restricted

---

## 📸 Screenshots (Optional)

(Add screenshots of your UI here for better presentation)

---

## 📌 Future Improvements

* Add search & filter functionality
* Improve UI/UX
* Role-based dashboard
* Deployment on cloud

---

## 👨‍💻 Author

**Arun Busa**
GitHub: https://github.com/arunbusa06

---

## 📄 License

This project is for educational purposes.
