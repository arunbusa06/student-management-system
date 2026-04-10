# 🎓 Student Management System (Full Stack Web Application)

A comprehensive Full-Stack web application designed for educational institutions to manage student records efficiently. Built using **React, Node.js, Express, and MySQL**, featuring secure authentication and a modern administrative dashboard.

---

## 🌎 Live Links

* 🚀 **Live Demo (Frontend - Vercel):**
  https://student-management-system-flax-mu.vercel.app/

* ⚙️ **Backend API (Render):**
  https://student-backend-e4fq.onrender.com/

* 📂 **GitHub Repository:**
  https://github.com/arunbusa06/student-management-system

---

## 🛠️ Technology Stack

| Layer          | Technologies                                       |
| :------------- | :------------------------------------------------- |
| **Frontend**   | React.js, React Router, Axios                      |
| **Backend**    | Node.js, Express.js                                |
| **Database**   | MySQL (Railway Hosting)                            |
| **Security**   | JWT (Authentication), bcrypt.js (Password Hashing) |
| **Deployment** | Vercel, Render, Railway                            |

---

## 🚀 Deployment Architecture

* **Frontend (Vercel):** Handles UI and sends API requests
* **Backend (Render):** Processes requests and handles logic
* **Database (Railway):** Stores application data

### 🔄 Flow:

User → Frontend (Vercel) → Backend (Render API) → Database (Railway MySQL)

---

## 🔗 API Configuration

Frontend communicates with backend using:

https://student-backend-e4fq.onrender.com/api

---

## 🔐 Authentication Flow

1. User logs in using email and password
2. Backend verifies credentials using bcrypt
3. JWT token is generated
4. Token is stored in browser (localStorage)
5. Token is sent in Authorization header for protected routes

---

## ✨ Key Features

* 🔐 Secure Login & Registration system
* 🛡️ Protected routes using JWT authentication
* 👨‍🎓 Student Management (CRUD):

  * Add new students
  * View student list
  * Update student details
  * Delete student records
* 📱 Responsive design
* ⚡ Fast and lightweight frontend

---

## 📂 Project Structure

```bash
student-management-system/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/          # Login, Register, Students
│   │   ├── utils/          # API configuration
│   │   └── App.js
│
├── server/                 # Node.js Backend
│   ├── config/             # Database connection
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   ├── middleware/         # Auth middleware
│   └── server.js
```

---

## ⚙️ Local Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/arunbusa06/student-management-system.git
cd student-management-system
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
DB_HOST=your_database_host
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
DB_PORT=your_port

JWT_SECRET=your_secret_key
PORT=5000
```

Run backend:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

---

## 🧪 Testing

API tested using Postman:

* Authentication (login/register)
* Student CRUD operations
* Token-based authorization

---

## ⚠️ Known Issues

* Backend may take **10–20 seconds** to respond initially due to Render free tier sleep mode.

---

## 🔐 Security Note

All sensitive credentials (database connection & JWT secret) are stored securely using environment variables and are not exposed in the source code.

---

## 🚀 Future Improvements

* Role-based access (Admin/User)
* Search and filtering for students
* Pagination support
* UI enhancements

---

## 👨‍💻 Author

**Arun Busa**
GitHub: https://github.com/arunbusa06

---

## 📄 License

This project is developed for **academic submission** and is licensed under the MIT License.
