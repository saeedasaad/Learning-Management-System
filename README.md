```
learning-management-system/
│
├── backend/                        → All server-side code
│   │
│   ├── config/                     → App configuration files
│   │   ├── db.js                   → MongoDB connection setup
│   │   └── keys.js                 → Environment keys & secrets
│   │
│   ├── controllers/                → Business logic for each role
│   │   ├── adminController.js      → Admin actions & management
│   │   ├── authController.js       → Login, signup, token handling
│   │   ├── courseController.js     → Course CRUD operations
│   │   ├── instructorController.js → Instructor dashboard logic
│   │   └── studentController.js   → Student enrollment & progress
│   │
│   ├── middleware/                 → Request processing layers
│   │   ├── authMiddleware.js       → JWT verification & route protection
│   │   └── errorMiddleware.js      → Global error handling
│   │
│   ├── models/                     → MongoDB database schemas
│   │   ├── ChatMessage.js          → Real-time chat data structure
│   │   ├── Course.js               → Course schema & fields
│   │   ├── Enrollment.js           → Student-course relationship
│   │   ├── Payment.js              → Payment records schema
│   │   └── User.js                 → User schema with roles
│   │
│   ├── routes/                     → API endpoint definitions
│   │   ├── admin.js                → Admin routes
│   │   ├── auth.js                 → Authentication routes
│   │   ├── course.js               → Course routes
│   │   ├── instructor.js           → Instructor routes
│   │   └── student.js              → Student routes
│   │
│   ├── seed/                       → Sample data for development
│   │   ├── adminSeed.js            → Default admin account
│   │   ├── courseSeed.js           → Sample courses
│   │   ├── instructorSeed.js       → Sample instructors
│   │   └── studentSeed.js          → Sample students
│   │
│   ├── uploads/                    → Stored files & certificates
│   │
│   ├── utils/                      → Reusable helper functions
│   │   ├── generateToken.js        → JWT token generator
│   │   └── logger.js               → Activity logging utility
│   │
│   ├── .env                        → Environment variables (private)
│   └── server.js                   → App entry point & server setup
│
└── frontend/                       → All client-side React code

````