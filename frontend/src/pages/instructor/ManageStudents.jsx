import useFetch from "../../hooks/useFetch";

function ManageStudents() {
  const { data: students, loading, error } = useFetch("/instructor/students");

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Students</h2>
      <ul>
        {students?.map((s) => (
          <li key={s._id}>{s.name} - {s.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ManageStudents;