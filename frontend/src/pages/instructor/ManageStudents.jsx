import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/api";
import Table from "../../components/common/Table";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await api.get("/instructor/students");
        setStudents(data);
      } catch (err) {
        console.error("Error fetching students:", err);
        setError("Failed to load students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const removeStudent = async (id) => {
    try {
      await api.delete(`/instructor/students/${id}`);
      setStudents(students.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error removing student:", err);
      alert("Failed to remove student");
    }
  };

  if (loading) {
    return (
      <div className="md:p-10 p-5 ">
      <DashboardCard title="Manage Students">
        <p className="text-gray-500 text-center">Loading students...</p>
      </DashboardCard>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="Manage Students">
          <p className="text-red-500 text-center">{error}</p>
        </DashboardCard>
      </div>
    );
  }

  if (!students.length) {
    return (
      <div className="p-6 grid lg:grid-cols-2 gap-6">
        <DashboardCard title="Manage Students">
          <p className="text-gray-500 text-center">No students enrolled yet.</p>
        </DashboardCard>
      </div>
    );
  }

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Manage Students">
        <Table
          columns={["name", "email", "courseTitle", "progress"]}
          data={students}
          renderActions={(student) => (
            <div className="flex flex-wrap gap-2 justify-center">
              {/* Remove student */}
              <button
                onClick={() => removeStudent(student._id)}
                className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                title="Remove Student"
              >
                <i className="ri-delete-bin-5-line text-lg"></i>
              </button>
              {/* Message student */}
              <Link
                to={`/inbox/${student._id}`}
                state={{ student }}
                className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                title="Message Student"
              >
                <i className="ri-mail-send-line text-lg"></i>
              </Link>
            </div>
          )}
        />
      </DashboardCard>
    </div>
  );
}
