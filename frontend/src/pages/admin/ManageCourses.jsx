import useFetch from "../../hooks/useFetch";

function ManageCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Courses</h2>
      <ul>
        {courses?.map((c) => (
          <li key={c._id}>
            {c.title} - {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageCourses;