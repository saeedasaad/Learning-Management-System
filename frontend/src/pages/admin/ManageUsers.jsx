import useFetch from "../../hooks/useFetch";
import DashboardCard from "../../components/layouts/DashboardCard";

function ManageUsers() {
  const { data: users, loading, error } = useFetch("/admin/users");

  if (loading) return <DashboardCard title="Manage Users"><p>Loading users...</p></DashboardCard>;
  if (error) return <DashboardCard title="Manage Users"><p>Error: {error}</p></DashboardCard>;

  return (
    <DashboardCard title="Manage Users">
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => (
            <tr key={u._id}>
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.role}</td>
              <td className="border px-4 py-2">{u.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}

export default ManageUsers;