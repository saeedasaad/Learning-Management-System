import DashboardCard from "../../components/layouts/DashboardCard";
import useFetch from "../../hooks/useFetch";
import api from "../../utils/apis";


function ManageCourses() {
  const { data: courses, loading, error } = useFetch("/instructor/courses");

  const deleteCourse = async (id) => {
    await api.delete(`/instructor/courses/${id}`);
    window.location.reload();
  };

  if (loading) return <DashboardCard title="Manage Courses"><p>Loading courses...</p></DashboardCard>;
  if (error) return <DashboardCard title="Manage Courses"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Manage Courses">
      <ul>
        {courses?.map((c) => (
          <li key={c._id} className="flex justify-between items-center border p-2">
            <span>{c.title} - {c.status}</span>
            <button onClick={() => deleteCourse(c._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}

export default ManageCourses;