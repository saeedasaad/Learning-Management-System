import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function ManageCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");

  if (loading) return <DashboardCard title="Manage Courses"><p>Loading courses...</p></DashboardCard>;
  if (error) return <DashboardCard title="Manage Courses"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Manage Courses">
      <ul>
        {courses?.map((c) => (
          <li key={c._id}>
            {c.title} - {c.status}
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}

export default ManageCourses;