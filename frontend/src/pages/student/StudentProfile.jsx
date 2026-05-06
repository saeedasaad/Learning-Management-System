import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/api";
import ProfileForm from "../../components/layouts/ProfileForm";
import ProfileCard from "../../components/layouts/ProfileCard";
import "remixicon/fonts/remixicon.css";

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [avatar, setAvatar] = useState(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

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
      if (avatar) form.append("avatar", avatar);

      await api.patch("/student/profile", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { data } = await api.get("/student/profile");
      setProfile(data);
      setFormData(data);

      alert("Profile updated successfully");
    } catch (err) {
      console.error("Error updating profile:", err);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Student Profile">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Profile Card */}
          <ProfileCard profile={profile} BASE_URL={BASE_URL} />

          {/* Right Form Section */}
          <ProfileForm
            formData={formData}
            handleChange={handleChange}
            handleAvatarChange={handleAvatarChange}
            onSubmit={handleSubmit}
            setFormData={setFormData}
          />
        </div>
      </DashboardCard>
    </div>
  );
}
