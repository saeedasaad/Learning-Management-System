import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";

function ManageCourses() {
  const { data: courses, loading, error } = useFetch("/instructor/courses");

  const deleteCourse = async (id) => {
    await api.delete(`/instructor/courses/${id}`);
    window.location.reload();
  };

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Courses</h2>
      <ul>
        {courses?.map((c) => (
          <li key={c._id} className="flex justify-between items-center border p-2">
            <span>{c.title} - {c.status}</span>
            <button onClick={() => deleteCourse(c._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageCourses;