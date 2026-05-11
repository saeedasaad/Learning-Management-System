#  EduMaster — Learning Management System

A full-stack Learning Management System built with the MERN stack, 
designed to manage courses, students, instructors, and enrollments 
with role-based access control.

##  Live Demo
[Frontend](#) | [Backend API](#) | [Admin Panel](#)

##  Features

-  JWT Authentication with role-based access (Admin, Instructor, Student)
-  Course creation, management, and enrollment system
-  Instructor dashboard with course and student management
-  Student portal with enrollment and progress tracking
-  Payment integration for course purchases
-  Real-time chat messaging system
-  Admin panel for full platform control
-  Database seeding for quick setup

##  Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| Tools | Postman, Git, GitHub, VS Code |

## Project Structure

### Backend

```
backend/
├── config/              # DB & keys
├── controllers/         # Business logic
├── middleware/          # Auth & error handling
├── models/              # Mongoose schemas
├── routes/              # API routes
├── seed/                # Seed scripts
├── uploads/             # File uploads
├── utils/               # Helpers (token, logger)
├── .env                 # Environment variables
└── server.js            # Entry point

```

### Frontend

```
frontend/
├── public/              # index.html, favicon
├── src/
│   ├── assets/          # Images, icons
│   ├── components/      # Reusable UI
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Dashboard & Public layouts
│   ├── pages/           # Role-based pages
│   ├── redux/           # State management
│   ├── utils/           # API helpers
│   ├── App.jsx          # Routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── vite.config.js

```

##  Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/saeedasaad/learning-management-system.git
cd learning-management-system
```

### 2. Backend setup
```bash
cd backend
npm install
```

### 3. Configure environment variables
Create a `.env` file in the backend folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Seed the database
```bash
node seed/adminSeed.js
node seed/courseSeed.js
node seed/instructorSeed.js
node seed/studentSeed.js
```

### 5. Run the server
```bash
npm run dev
```

### 6. Frontend setup
```bash
cd ../frontend
npm install
npm run dev
```

##  Default Roles

| Role | Access |
|---|---|
| Admin | Full platform control |
| Instructor | Course and student management |
| Student | Course enrollment and progress |

##  Screenshots
<!-- Add your screenshots here -->



##  License
This project is open source and available under the MIT License.
