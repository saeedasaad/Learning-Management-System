import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/apis";

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/student/profile");
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <DashboardCard title="Student Profile">
      <p className="text-gray-600">Name: {profile.name}</p>
      <p className="text-gray-600">Email: {profile.email}</p>
      <p className="text-gray-600">Enrolled Courses: {profile.enrolledCount}</p>
    </DashboardCard>
  );
}
