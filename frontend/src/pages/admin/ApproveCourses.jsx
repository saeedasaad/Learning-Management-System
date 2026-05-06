import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";

function ApproveCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");
  const [approved, setApproved] = useState([]);

  const approveCourse = async (id) => {
    try {
      await api.patch(`/admin/courses/${id}/approve`);
      setApproved([...approved, id]);
    } catch (err) {
      console.error("Error approving course:", err);
    }
  };

  if (loading)
    return (
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="Approve Courses">
          <p>Loading...</p>
        </DashboardCard>
      </div>
    );
  if (error)
    return (
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="Approve Courses">
          <p>Error: {error}</p>
        </DashboardCard>
      </div>
    );

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Approve Courses">
        {courses?.map((c) => (
          <div
            key={c._id}
            className="flex justify-between items-center border p-2 rounded mb-2"
          >
            <span>{c.title}</span>
            {c.status === "pending" && !approved.includes(c._id) ? (
              <button
                onClick={() => approveCourse(c._id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Approve
              </button>
            ) : (
              <span className="text-green-600 font-semibold">Approved</span>
            )}
          </div>
        ))}
      </DashboardCard>
    </div>
  );
}

export default ApproveCourses;
