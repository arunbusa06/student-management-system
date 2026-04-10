# 🎓 Student Management System

A comprehensive Full-Stack web application designed for educational institutions to manage student records efficiently. Built with the Full Stack (React, Node.js, Express, MySQL) architecture, featuring secure authentication and a modern administrative dashboard.

---

## 🌎 Live Links

- **🚀 Live Demo (Vercel):** [https://student-management-system-flax-mu.vercel.app/](https://student-management-system-flax-mu.vercel.app/)
- **⚙️ Backend API (Render):** [https://student-backend-e4fq.onrender.com/](https://student-backend-e4fq.onrender.com/)
- **🗄️ Database Dashboard (Railway):** [https://railway.com/project/7666068d...](https://railway.com/project/7666068d-127f-4ade-bdb7-b876061c1655/service/d465ca04-828b-4476-94e5-1cec75f8ad1b/database?environmentId=3fb01f14-9056-4a96-a5ba-6fa9ab197d09)
- **📂 Git Repository:** [https://github.com/arunbusa06/student-management-system](https://github.com/arunbusa06/student-management-system)

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, React Router, Axios, CSS Layouts |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL (Railway Hosting) |
| **Security** | JWT (JSON Web Tokens), bcrypt.js (Password Hashing) |
| **Deployment** | Vercel (Frontend), Render (Backend), Railway (Database) |

---

## ✨ Key Features

- **🔐 Secure Authentication:** User registration and login system with JWT-secured sessions.
- **🛡️ Protected Routes:** Access to student management is restricted to authorized users only.
- **👨‍🎓 Student Management (CRUD):**
  - **Create:** Add new students with details (Name, Email, Course, Phone).
  - **Read:** View a complete, stylized list of all students.
  - **Update:** Modify existing student information seamlessly.
  - **Delete:** Remove student records with a single click.
- **📊 Analytics Dashboard:** At-a-glance metrics for total students, courses, and active users.
- **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **💾 Auto-Schema Initialization:** Backend automatically creates required MySQL tables on startup if they don't exist.

---

## 📂 Project Structure

```bash
student-management-system/
├── client/                 # React Frontend Application
│   ├── src/
│   │   ├── components/     # Reusable UI (Navbar, Sidebar, etc.)
│   │   ├── pages/          # Full page views (Dashboard, Login, Students)
│   │   ├── utils/          # API configuration (Axios)
│   │   └── App.js          # Main Routing & Entry point
│   └── vercel.json         # Vercel SPA Routing Configuration
├── server/                 # Node/Express Backend API
│   ├── config/             # Database connection & pooling
│   ├── controllers/        # Request handling logic
│   ├── models/             # MySQL Query logic
│   ├── routes/             # API Endpoints definition
│   └── server.js           # Server initialization & middleware
└── README.md               # Project Documentation
```

---

## ⚙️ Local Setup Instructions

### 1. Prerequisites
- Node.js installed
- MySQL Database instance running

### 2. Clone the Repository
```bash
git clone https://github.com/arunbusa06/student-management-system.git
cd student-management-system
```

### 3. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory:
```env
PORT=5000
DATABASE_URL=mysql://root:password@localhost:3306/student_management
JWT_SECRET=your_super_secret_key
```
Run the server:
```bash
npm start
```

### 4. Frontend Setup
```bash
cd ../client
npm install
```
Start the development server:
```bash
npm start
```
---

## 👨‍💻 Author

**Arun Busa**
- GitHub: [@arunbusa06](https://github.com/arunbusa06)

---

## 📄 License

This project is developed for the **Final Project Submission** and is licensed under the MIT License.
