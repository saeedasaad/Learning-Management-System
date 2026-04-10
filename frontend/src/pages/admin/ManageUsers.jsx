import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";

function ManageUsers() {
  const { data: users, loading, error } = useFetch("/admin/users");

  const updateRole = async (id, role) => {
    await api.patch(`/admin/users/${id}/role`, { role });
    window.location.reload();
  };

  const suspendUser = async (id) => {
    await api.patch(`/admin/users/${id}/suspend`);
    window.location.reload();
  };

  if (loading) return <DashboardCard title="Manage Users"><p>Loading...</p></DashboardCard>;
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
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => (
            <tr key={u._id}>
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.role}</td>
              <td className="border px-4 py-2">{u.status}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button onClick={() => updateRole(u._id, "instructor")} className="bg-blue-500 text-white px-2 py-1 rounded">Promote</button>
                <button onClick={() => suspendUser(u._id)} className="bg-red-500 text-white px-2 py-1 rounded">Suspend</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}

export default ManageUsers;
