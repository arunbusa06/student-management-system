# 📚 Student Management System

## 📌 Project Description

The **Student Management System** is a full-stack web application designed to manage student records efficiently. It allows administrators to perform operations such as adding, updating, deleting, and viewing student data. The system reduces manual work and ensures data accuracy.

---

## 🎯 Objectives

* To digitize student record management
* To provide an easy-to-use interface for managing data
* To implement secure authentication and authorization
* To perform CRUD operations efficiently

---

## 🚀 Features

* 🔐 User Authentication (Login/Register using JWT)
* 👨‍🎓 Add New Students
* 📋 View Student List
* ✏️ Update Student Details
* ❌ Delete Student Records
* 🛡️ Protected Routes (Only authorized users can access)
* 📱 Responsive UI

---

## 🏗️ Tech Stack

### Frontend:

* React JS
* React Router
* CSS / Bootstrap

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

### Security:

* JWT (JSON Web Token)
* bcrypt (Password Hashing)

---

## 📂 Project Structure

```
student-management-system/
│
├── client/                # Frontend (React)
│   ├── src/
│   ├── package.json
│
├── server/                # Backend (Node.js + Express)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Step 1: Clone Repository

```
git clone <your-repo-link>
cd student-management-system
```

---

### 🔹 Step 2: Install Frontend Dependencies

```
cd client
npm install
```

---

### 🔹 Step 3: Install Backend Dependencies

```
cd ../server
npm install
```

---

### 🔹 Step 4: Setup Environment Variables

Create a `.env` file in the `server` folder and add:

```
PORT=5000
MONGO_URI=your_database_connection_string
JWT_SECRET=your_secret_key
```

---

### 🔹 Step 5: Run the Project

#### Start Backend:

```
cd server
npm start
```

#### Start Frontend:

```
cd client
npm start
```

---

## 🔐 Authentication Flow

1. User registers/logs in
2. Password is hashed using bcrypt
3. JWT token is generated
4. Token is used to access protected routes

---

## 📦 Deployment (Optional)

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 🧠 Future Enhancements

* Add role-based dashboards
* Export student data (PDF/Excel)
* Add search & filter functionality
* Improve UI/UX design

---

## 👨‍💻 Author

**Name:** Arun Busa
**Course:** B.Tech (2nd Year)
**University:** Marwadi University

---

## 📜 License

This project is for educational purposes only.
