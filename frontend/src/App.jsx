import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import Home from "./pages/public/Home";
import Courses from "./pages/public/Courses";
import CourseDetails from "./pages/public/CourseDetails";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Unauthorized from "./pages/shared/Unauthorized";
import NotFound from "./pages/shared/NotFound";

// Student Pages
import DashboardOverview from "./pages/student/DashboardOverview";
import MyCourses from "./pages/student/MyCourses";
import CourseLearning from "./pages/student/CourseLearning";
import VideoPlayer from "./pages/student/VideoPlayer";
import StudentDiscussions from "./pages/student/StudentDiscussions";
import StudentProfile from "./pages/student/StudentProfile";
import MyActivities from "./pages/student/MyActivities";
import TraineeServices from "./pages/student/TraineeServices";
import QuizzesPage from "./pages/student/QuizzesPage";
import QuizPage from "./pages/student/QuizPage";
import ExercisesPage from "./pages/student/ExercisesPage";

// Instructor Pages
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import ManageCourses from "./pages/instructor/ManageCourses";
import ManageContent from "./pages/instructor/ManageContent";
import ManageStudents from "./pages/instructor/ManageStudents";
import Revenue from "./pages/instructor/Revenue";
import Chat from "./pages/instructor/Chat";
import Profile from "./pages/instructor/Profile";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import AdminManageCourses from "./pages/admin/ManageCourses";
import ApproveCourses from "./pages/admin/ApproveCourses";
import Analytics from "./pages/admin/Analytics";
import RevenueAnalytics from "./pages/admin/RevenueAnalytics";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Student Dashboard */}
      <Route element={<DashboardLayout role="student" />}>
        <Route path="/student" element={<DashboardOverview />} />
        <Route path="/student/dashboard" element={<DashboardOverview />} />
        <Route path="/student/my-courses" element={<MyCourses />}>
          <Route path=":id" element={<CourseLearning />} />
          <Route path=":id/video/:videoId" element={<VideoPlayer />} />
        </Route>

        {/* Activities */}
        <Route path="/student/activities" element={<MyActivities />}>
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
        </Route>

        <Route path="/student/quiz/:id" element={<QuizPage />} />

        <Route path="/student/discussions" element={<StudentDiscussions />} />
        <Route path="/student/services" element={<TraineeServices />} />
        <Route path="/student/profile" element={<StudentProfile />} />
      </Route>

      {/* Instructor Dashboard */}
      <Route element={<DashboardLayout role="instructor" />}>
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />

        {/* Core Pages */}
        <Route path="/instructor/manage-courses" element={<ManageCourses />} />
        <Route
          path="/instructor/manage-students"
          element={<ManageStudents />}
        />
        <Route path="/instructor/manage-content" element={<ManageContent />} />
        <Route path="/instructor/revenue" element={<Revenue />} />
        <Route path="/instructor/profile" element={<Profile />} />
        <Route path="/instructor/chat" element={<Chat />} />
      </Route>

      {/* Admin Dashboard */}
      <Route element={<DashboardLayout role="admin" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-courses" element={<AdminManageCourses />} />
        <Route path="/admin/approve-courses" element={<ApproveCourses />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/revenue-analytics" element={<RevenueAnalytics />} />
      </Route>

      {/* Unauthorized Route */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
