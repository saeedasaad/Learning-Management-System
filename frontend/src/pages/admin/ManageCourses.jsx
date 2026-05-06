import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import api from "../../utils/api";
import DashboardCard from "../../components/layouts/DashboardCard";
import Table from "../../components/common/Table";
import "remixicon/fonts/remixicon.css";

function ManageCourses() {
  const { data: courses, loading, error } = useFetch("/admin/courses");
  const [updatedCourses, setUpdatedCourses] = useState([]);

  const approveCourse = async (id) => {
    try {
      await api.patch(`/admin/courses/${id}/approve`);
      setUpdatedCourses(
        courses.map((c) => (c._id === id ? { ...c, status: "approved" } : c)),
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
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="Manage Courses">
          <p>Loading courses...</p>
        </DashboardCard>
      </div>
    );
  if (error)
    return (
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="Manage Courses">
          <p>Error: {error}</p>
        </DashboardCard>
      </div>
    );

  const displayCourses = updatedCourses.length > 0 ? updatedCourses : courses;

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Manage Courses">
        <Table
          columns={["title", "category", "status"]}
          data={displayCourses}
          renderActions={(c) => (
            <div className="flex flex-wrap gap-2">
              {c.status === "pending" && (
                <button
                  onClick={() => approveCourse(c._id)}
                  className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                  title="Approve Course"
                >
                  <i className="ri-checkbox-circle-line text-lg"></i>
                </button>
              )}
              <button
                onClick={() => deleteCourse(c._id)}
                className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                title="Delete Course"
              >
                <i className="ri-delete-bin-5-line text-lg"></i>
              </button>
            </div>
          )}
        />
      </DashboardCard>
    </div>
  );
}

export default ManageCourses;
