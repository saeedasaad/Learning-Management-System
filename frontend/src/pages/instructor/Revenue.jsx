import useFetch from "../../hooks/useFetch";

function Revenue() {
  const { data, loading, error } = useFetch("/instructor/revenue");

  if (loading) return <p>Loading revenue...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Revenue</h2>
      <p>Total Revenue: ${data?.totalRevenue}</p>
      <p>Courses Sold: {data?.coursesSold}</p>
    </div>
  );
}

export default Revenue;