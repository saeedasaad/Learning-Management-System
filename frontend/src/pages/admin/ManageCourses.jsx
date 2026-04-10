import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";

function ManageCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");
  const [updatedCourses, setUpdatedCourses] = useState([]);

  const approveCourse = async (id) => {
    try {
      await api.patch(`/admin/courses/${id}/approve`);
      setUpdatedCourses(
        courses.map((c) =>
          c._id === id ? { ...c, status: "approved" } : c
        )
      );
    } catch (err) {
      console.error("Error approving course:", err);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await api.delete(`/admin/courses/${id}`);
      setUpdatedCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
    }
  };

  if (loading)
    return (
      <DashboardCard title="Manage Courses">
        <p>Loading courses...</p>
      </DashboardCard>
    );
  if (error)
    return (
      <DashboardCard title="Manage Courses">
        <p>Error: {error}</p>
      </DashboardCard>
    );

  const displayCourses = updatedCourses.length > 0 ? updatedCourses : courses;

  return (
    <DashboardCard title="Manage Courses">
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayCourses?.map((c) => (
            <tr key={c._id}>
              <td className="border px-4 py-2">{c.title}</td>
              <td className="border px-4 py-2">{c.category}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    c.status === "approved"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="border px-4 py-2 flex gap-2">
                {c.status === "pending" && (
                  <button
                    onClick={() => approveCourse(c._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => deleteCourse(c._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}

export default ManageCourses;
