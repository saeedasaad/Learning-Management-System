import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function Analytics() {
  const { data, loading, error } = useFetch("/admin/analytics");

  if (loading) return <DashboardCard title="Analytics"><p>Loading...</p></DashboardCard>;
  if (error) return <DashboardCard title="Analytics"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Analytics">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <p className="text-lg font-bold">{data?.usersCount}</p>
          <p>Total Users</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <p className="text-lg font-bold">{data?.coursesCount}</p>
          <p>Total Courses</p>
        </div>
      </div>
    </DashboardCard>
  );
}

export default Analytics;
