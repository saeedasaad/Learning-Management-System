import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getInstructorCourses } from "../../utils/apis";
import api from "../../utils/apis";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getInstructorCourses();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const deleteCourse = async (id) => {
    try {
      await api.delete(`/instructor/courses/${id}`);
      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete course");
    }
  };

  if (loading) {
    return (
      <DashboardCard title="Manage My Courses">
        <p className="text-gray-500 text-center">Loading courses...</p>
      </DashboardCard>
    );
  }

  if (error) {
    return (
      <DashboardCard title="Manage My Courses">
        <p className="text-red-500 text-center">{error}</p>
      </DashboardCard>
    );
  }

  if (!courses.length) {
    return (
      <DashboardCard title="Manage My Courses">
        <p className="text-gray-500 text-center">No courses found.</p>
      </DashboardCard>
    );
  }

  return (
    <DashboardCard title="Manage My Courses">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Category</th>
            <th className="p-2">Students</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="border-t text-center">
              <td className="p-2">{course.title}</td>
              <td className="p-2">{course.category}</td>
              <td className="p-2">{course.studentsEnrolled}</td>
              <td className="p-2">{course.rating}</td>
              <td className="p-2">{course.status}</td>
              <td className="p-2">
                <button
                  onClick={() => deleteCourse(course._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}
