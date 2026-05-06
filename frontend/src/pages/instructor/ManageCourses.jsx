import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getInstructorCourses } from "../../utils/api.js";
import Table from "../../components/common/Table";
import "remixicon/fonts/remixicon.css";

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

  const deleteCourse = async (id) => {
    try {
      await api.delete(`/instructor/courses/${id}`);
      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete course");
    }
  };

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      <div className="md:m-10 m-5">
        <DashboardCard title="Manage My Courses">
          <p className="text-gray-500 text-center">Loading courses...</p>
        </DashboardCard>
      </div>
    );
  }

  if (error) {
    return (
      <div className="md:m-10 m-5">
        <DashboardCard title="Manage My Courses">
          <p className="text-red-500 text-center">{error}</p>
        </DashboardCard>
      </div>
    );
  }

  if (!courses.length) {
    return (
      <div className="md:m-10 m-5">
        <DashboardCard title="Manage My Courses">
          <p className="text-gray-500 text-center">No courses found.</p>
        </DashboardCard>
      </div>
    );
  }

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Manage My Courses">
        <Table
          columns={[
            "title",
            "category",
            "studentsEnrolled",
            "rating",
            "price",
            "duration",
            "status",
          ]}
          data={courses}
          renderActions={(course) => (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => startEdit(course)}
                className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                title="Edit Course"
              >
                <i className="ri-edit-2-fill text-lg"></i>
              </button>
              <button
                onClick={() => deleteCourse(course._id)}
                className="text-[#152956] hover:text-[#feaf0c] p-2 cursor-pointer transition-transform duration-200 transform hover:scale-110"
                title="Delete Course"
              >
                <i className="ri-delete-bin-5-line text-lg"></i>
              </button>
            </div>
          )}
        />

        {/* Edit Form Modal */}
        {editingCourse && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setEditingCourse(null)}
            ></div>

            <div className="relative bg-white p-6 rounded-lg shadow-xl w-96 z-50">
              <h2 className="text-xl font-bold mb-4 text-center">
                Edit Course
              </h2>

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
    </div>
  );
}
