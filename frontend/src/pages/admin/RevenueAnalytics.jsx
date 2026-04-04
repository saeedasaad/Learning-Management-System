import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function RevenueAnalytics() {
  const { data, loading, error } = useFetch("/admin/revenue");

  if (loading) return <DashboardCard title="Revenue Analytics"><p>Loading revenue data...</p></DashboardCard>;
  if (error) return <DashboardCard title="Revenue Analytics"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Revenue Analytics">
      <p>Total Revenue: ${data?.totalRevenue}</p>
      <p>Payments Count: {data?.paymentsCount}</p>
    </DashboardCard>
  );
}

export default RevenueAnalytics;