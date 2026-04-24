import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/apis";
import "remixicon/fonts/remixicon.css";

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/student/profile");
        setProfile(data);
        setFormData(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });
      if (avatar) {
        form.append("avatar", avatar);
      }

      await api.patch("/student/profile", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { data } = await api.get("/student/profile");
      setProfile(data);
      setFormData(data);

      alert("Profile updated successfully ");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <DashboardCard title="Student Profile">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Left Profile Section */}
        <div className="bg-gray-50 border rounded p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center">
            {profile.avatarUrl ? (
              <img
                src={`http://localhost:5000${profile.avatarUrl}`}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <i className="ri-user-line text-3xl text-gray-500"></i>
            )}
          </div>

          {/* Name */}
          <h2 className="text-2xl font-medium mt-2">{profile.name}</h2>

          <hr className="w-full border-t border-gray-300 my-3  mt-10" />

          {/* Qualification + Specialization */}
          <div className="mt-3 w-full text-left">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-lg">
                <i className="ri-graduation-cap-line"></i>
                <span>Qualification & Specialization :</span>
              </h4>
            </div>
            <p className="text-gray-700 flex items-center gap-2 mt-1">
              {profile.qualification || "Not set"} -{" "}
              {profile.specialization || "Not set"}
            </p>
          </div>

          {/* Email */}
          <div className="mt-3 w-full text-left">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-lg">
                <i className="ri-mail-line"></i>
                <span>Email :</span>
              </h4>
            </div>
            <p className="text-gray-700 flex items-center gap-2">
              {profile.email}
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="md:col-span-2 bg-white border rounded p-6">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Qualification Section */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Qualification / Experience
          </h3>

          <label className="block text-sm font-medium">
            Highest Qualification
          </label>
          <select
            name="qualification"
            value={formData.qualification || ""}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-2"
          >
            <option value="">Select Qualification</option>
            <option value="Matric">Matric</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="PhD">PhD</option>
          </select>

          <label className="block text-sm font-medium">Specialization</label>
          <select
            name="specialization"
            value={formData.specialization || ""}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Specialization</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Web Development">Web Development</option>
            <option value="AI / Machine Learning">AI / Machine Learning</option>
            <option value="Networking">Networking</option>
            <option value="Business Administration">
              Business Administration
            </option>
          </select>

          {/* Preferences Section */}
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Preferences / Interests
          </h3>
          <label className="block text-sm font-medium">
            Familiar with freelancing
          </label>
          <select
            name="freelancing"
            value={formData.freelancing ? "Yes" : "No"}
            onChange={(e) =>
              setFormData({
                ...formData,
                freelancing: e.target.value === "Yes",
              })
            }
            className="w-full border rounded px-3 py-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <label className="block text-sm font-medium mt-5">
            Upload Avatar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-[#feaf0c] text-white rounded hover:bg-[#e09a0a]"
          >
            Save
          </button>
        </div>
      </form>
    </DashboardCard>
  );
}
