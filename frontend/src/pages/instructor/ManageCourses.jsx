import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getInstructorCourses } from "../../utils/apis";
import api from "../../utils/apis";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({});

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

  // Delete course
  const deleteCourse = async (id) => {
    try {
      await api.delete(`/instructor/courses/${id}`);
      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete course");
    }
  };

  // Start editing
  const startEdit = (course) => {
    setEditingCourse(course._id);
    setFormData({
      title: course.title,
      category: course.category,
      price: course.price,
      duration: course.duration,
      description: course.description,
      status: course.status,
    });
  };

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save updates
  const saveCourse = async () => {
    try {
      const { data } = await api.patch(
        `/instructor/courses/${editingCourse}`,
        formData,
      );
      setCourses(
        courses.map((c) => (c._id === editingCourse ? { ...c, ...data } : c)),
      );
      setEditingCourse(null);
      alert("Course updated successfully!");
    } catch (err) {
      console.error("Error updating course:", err);
      alert("Failed to update course");
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
            <th className="p-2">Price</th>
            <th className="p-2">Duration</th>
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
              <td className="p-2">{course.price}</td>
              <td className="p-2">{course.duration}</td>
              <td className="p-2">{course.status}</td>
              <td className="p-2 flex gap-2 justify-center">
                <button
                  onClick={() => startEdit(course)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Edit
                </button>
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

      {/* Edit Form Modal */}
      {editingCourse && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay with blur */}
          <div
            className="absolute fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={() => setEditingCourse(null)} // close when clicking outside
          ></div>

          {/* Modal content */}
          <div className="relative bg-white p-6 rounded-lg shadow-xl w-96 z-50">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Course</h2>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="w-full border p-2 mb-3 rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full border p-2 mb-3 rounded"
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 mb-4 rounded"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
            </select>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setEditingCourse(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={saveCourse}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardCard>
  );
}
