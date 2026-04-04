import DashboardCard from "../../components/layouts/DashboardCard";
import useFetch from "../../hooks/useFetch";


function Revenue() {
  const { data, loading, error } = useFetch("/instructor/revenue");

  if (loading) return <DashboardCard title="Revenue"><p>Loading revenue...</p></DashboardCard>;
  if (error) return <DashboardCard title="Revenue"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Revenue">
      <p>Total Revenue: ${data?.totalRevenue}</p>
      <p>Courses Sold: {data?.coursesSold}</p>
    </DashboardCard>
  );
}

export default Revenue;