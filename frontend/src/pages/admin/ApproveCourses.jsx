import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";

function ApproveCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");

  const approveCourse = async (id) => {
    await api.patch(`/admin/courses/${id}/approve`);
    window.location.reload();
  };

  if (loading) return <DashboardCard title="Approve Courses"><p>Loading courses...</p></DashboardCard>;
  if (error) return <DashboardCard title="Approve Courses"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Approve Courses">
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
    </DashboardCard>
  );
}

export default ApproveCourses;