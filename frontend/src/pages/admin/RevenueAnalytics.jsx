import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function RevenueAnalytics() {
  const { data, loading, error } = useFetch("/admin/revenue");

  if (loading) return <DashboardCard title="Revenue Analytics"><p>Loading...</p></DashboardCard>;
  if (error) return <DashboardCard title="Revenue Analytics"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Revenue Analytics">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-100 p-4 rounded">
          <p className="text-lg font-bold">${data?.totalRevenue}</p>
          <p>Total Revenue</p>
        </div>
        <div className="bg-purple-100 p-4 rounded">
          <p className="text-lg font-bold">{data?.paymentsCount}</p>
          <p>Payments Count</p>
        </div>
      </div>
    </DashboardCard>
  );
}

export default RevenueAnalytics;
