import DashboardCard from "../../components/layouts/DashboardCard";
import Analytics from "./Analytics";
import ManageUsers from "./ManageUsers";
import ManageCourses from "./ManageCourses";
import ApproveCourses from "./ApproveCourses";
import RevenueAnalytics from "./RevenueAnalytics";

function AdminDashboard() {
  return (
    <div className="p-6 grid lg:grid-cols-2 gap-6">
      <DashboardCard title="Admin Dashboard">
        <p className="text-gray-700">
          Welcome, Admin! Manage users, approve courses, and monitor platform analytics.
        </p>
      </DashboardCard>

      <Analytics />
      <RevenueAnalytics />
      <ManageUsers />
      <ManageCourses />
      <ApproveCourses />
    </div>
  );
}

export default AdminDashboard;
