import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";
import Table from "../../components/common/Table";
import "remixicon/fonts/remixicon.css";

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

  if (loading)
    return (
      <DashboardCard title="Manage Users">
        <p>Loading...</p>
      </DashboardCard>
    );
  if (error)
    return (
      <DashboardCard title="Manage Users">
        <p>Error: {error}</p>
      </DashboardCard>
    );

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Manage Users">
        <Table columns={["name", "email", "role", "status"]} data={users} renderActions={(u) => (
            <div className="flex flex-wrap gap-2">
              <button onClick={() => updateRole(u._id, "instructor")} className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-130" title="Promote to Instructor" >
                <i className="ri-edit-2-fill text-lg"></i>
              </button>

              <button onClick={() => suspendUser(u._id)} className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-130" title="Suspend User" >
                <i className="ri-delete-bin-5-line text-lg"></i>
              </button>
            </div>
          )}
        />
      </DashboardCard>
    </div>
  );
}

export default ManageUsers;
