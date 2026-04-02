import useFetch from "../../hooks/useFetch";

function RevenueAnalytics() {
  const { data, loading, error } = useFetch("/admin/revenue");

  if (loading) return <p>Loading revenue data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Revenue Analytics</h2>
      <p>Total Revenue: ${data?.totalRevenue}</p>
      <p>Payments Count: {data?.paymentsCount}</p>
    </div>
  );
}

export default RevenueAnalytics;