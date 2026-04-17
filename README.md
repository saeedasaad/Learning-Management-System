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

```
learning-management-system/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── keys.js
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── instructorController.js
│   │   └── studentController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── ChatMessage.js
│   │   ├── Course.js
│   │   ├── Enrollment.js
│   │   ├── Payment.js
│   │   └── User.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── course.js
│   │   ├── instructor.js
│   │   └── student.js
│   ├── seed/
│   │   ├── adminSeed.js
│   │   ├── courseSeed.js
│   │   ├── instructorSeed.js
│   │   └── studentSeed.js
│   ├── uploads/
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── logger.js
│   ├── .env
│   └── server.js
└── frontend/
````

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
