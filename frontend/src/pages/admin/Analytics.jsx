import useFetch from "../../hooks/useFetch";

function Analytics() {
  const { data, loading, error } = useFetch("/admin/analytics");

  if (loading) return <p>Loading analytics...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Analytics</h2>
      <p>Total Users: {data?.usersCount}</p>
      <p>Total Courses: {data?.coursesCount}</p>
    </div>
  );
}

export default Analytics;