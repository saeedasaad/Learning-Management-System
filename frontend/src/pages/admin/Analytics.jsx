import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function Analytics() {
  const { data, loading, error } = useFetch("/admin/analytics");

  if (loading) return <DashboardCard title="Analytics"><p>Loading analytics...</p></DashboardCard>;
  if (error) return <DashboardCard title="Analytics"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Analytics">
      <p>Total Users: {data?.usersCount}</p>
      <p>Total Courses: {data?.coursesCount}</p>
    </DashboardCard>
  );
}

export default Analytics;