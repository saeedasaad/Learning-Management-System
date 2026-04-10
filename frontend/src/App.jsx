import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Student Pages
import DashboardOverview from "./pages/student/DashboardOverview";
import MyCourses from "./pages/student/MyCourses";
import CourseLearning from "./pages/student/CourseLearning";
import VideoPlayer from "./pages/student/VideoPlayer";
import StudentChat from "./pages/student/StudentChat";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSettings from "./pages/student/StudentSettings";
import MyActivities from "./pages/student/MyActivities";
import TraineeServices from "./pages/student/TraineeServices";

// Instructor Pages
import InstructorDashboard from "./pages/instructor/InstructorDashboard";
import CreateCourse from "./pages/instructor/CreateCourse";
import ManageCourses from "./pages/instructor/ManageCourses";
import UploadLectures from "./pages/instructor/UploadLectures";
import ManageStudents from "./pages/instructor/ManageStudents";
import Revenue from "./pages/instructor/Revenue";
import InstructorChat from "./pages/instructor/Chat";
import InstructorProfile from "./pages/instructor/Profile";

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
        <Route path="/student/dashboard" element={<DashboardOverview />} />
        <Route path="/student/my-courses" element={<MyCourses />}>
          <Route path=":id" element={<CourseLearning />} />
          <Route path=":id/video/:videoId" element={<VideoPlayer />} />
        </Route>
        <Route path="/student/chat" element={<StudentChat />} />
        <Route path="/student/activities" element={<MyActivities />} />
        <Route path="/student/services" element={<TraineeServices />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/settings" element={<StudentSettings />} />
      </Route>

      {/* Instructor Dashboard */}
      <Route element={<DashboardLayout role="instructor" />}>
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/create-course" element={<CreateCourse />} />
        <Route path="/instructor/manage-courses" element={<ManageCourses />} />
        <Route
          path="/instructor/upload-lectures"
          element={<UploadLectures />}
        />
        <Route
          path="/instructor/manage-students"
          element={<ManageStudents />}
        />
        <Route path="/instructor/revenue" element={<Revenue />} />
        <Route path="/instructor/chat" element={<InstructorChat />} />
        <Route path="/instructor/profile" element={<InstructorProfile />} />
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
    </Routes>
  );
}

export default App;
