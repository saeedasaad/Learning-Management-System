import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";

function ApproveCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");

  const approveCourse = async (id) => {
    await api.patch(`/admin/courses/${id}/approve`);
    window.location.reload();
  };

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Approve Courses</h2>
      {courses?.map((c) => (
        <div key={c._id} className="flex justify-between items-center border p-2">
          <span>{c.title}</span>
          {c.status === "pending" && (
            <button
              onClick={() => approveCourse(c._id)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Approve
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ApproveCourses;