import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function AdminDashboard() {
  const { data: analytics, loading, error } = useFetch("/admin/analytics");

  if (loading) return<div className="p-6 grid lg:grid-cols-2 gap-6"> <DashboardCard title="Admin Dashboard"><p>Loading...</p></DashboardCard></div>;
  if (error) return<div className="p-6 grid lg:grid-cols-2 gap-6"><DashboardCard title="Admin Dashboard"><p>Error: {error}</p></DashboardCard></div> ;

  return (
    <div className="p-6 grid lg:grid-cols-2 gap-6">
      <DashboardCard title="Admin Dashboard">
        <p className="text-gray-700">
          Welcome, Admin! Manage users, approve courses, and monitor platform analytics.
        </p>
      </DashboardCard>

      <DashboardCard title="Total Users">{analytics?.usersCount}</DashboardCard>
      <DashboardCard title="Total Courses">{analytics?.coursesCount}</DashboardCard>
      <DashboardCard title="Analytics">{JSON.stringify(analytics?.stats)}</DashboardCard>
      <DashboardCard title="Total Revenue">${analytics?.revenue}</DashboardCard>
    </div>
  );
}

export default AdminDashboard;
