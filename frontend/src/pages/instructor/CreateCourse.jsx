import { useState } from "react";
import api from "../../utils/api";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/instructor/courses", { title, category, price });
      alert("Course created successfully!");
      setTitle(""); setCategory(""); setPrice("");
    } catch (err) {
      alert("Error creating course: " + err.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Create Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Course Title" className="border p-2 w-full" />
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="border p-2 w-full" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" type="number" className="border p-2 w-full" />
        <button type="submit" className="bg-[#134f93] text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}

export default CreateCourse;
