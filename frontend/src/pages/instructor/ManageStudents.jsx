import DashboardCard from "../../components/layouts/DashboardCard";
import useFetch from "../../hooks/useFetch";


function ManageStudents() {
  const { data: students, loading, error } = useFetch("/instructor/students");

  if (loading) return <DashboardCard title="Manage Students"><p>Loading students...</p></DashboardCard>;
  if (error) return <DashboardCard title="Manage Students"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Manage Students">
      <ul>
        {students?.map((s) => (
          <li key={s._id}>{s.name} - {s.email}</li>
        ))}
      </ul>
    </DashboardCard>
  );
}

export default ManageStudents;