import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/apis";

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
      <DashboardCard title="Manage Students">
        <p className="text-gray-500 text-center">Loading students...</p>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Manage Students">
        <p className="text-red-500 text-center">{error}</p>
      </DashboardCard>
    );
  }

  if (!students.length) {
    return (
      <DashboardCard title="Manage Students">
        <p className="text-gray-500 text-center">No students enrolled yet.</p>
      </DashboardCard>
    );
  }

  return (
    <DashboardCard title="Manage Students">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Course</th>
            <th className="p-2">Progress</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-t text-center">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.email}</td>
              <td className="p-2">{student.courseTitle}</td>
              <td className="p-2">{student.progress}%</td>
              <td className="p-2 flex gap-2 justify-center">
                <button
                  onClick={() => removeStudent(student._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button
                  onClick={() => alert(`Message sent to ${student.name}`)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}
