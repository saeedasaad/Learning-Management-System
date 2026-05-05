// ProfileCard.jsx
import React from "react";
import "remixicon/fonts/remixicon.css";

const ProfileCard = ({ profile, BASE_URL }) => {
  return (
    <div className="bg-gray-50 border rounded md:p-6 p-4 flex flex-col items-center">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center">
        {profile.avatarUrl ? (
          <img
            src={`${BASE_URL}${profile.avatarUrl}`}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <i className="ri-user-line text-3xl text-gray-500"></i>
        )}
      </div>

      {/* Name */}
      <h2 className="text-2xl font-medium mt-2">
        {profile.name}
      </h2>

      <hr className="w-full border-t border-gray-300 my-3 mt-8" />

      {/* Qualification + Specialization */}
      <div className="mt-3 w-full text-left">
        <h4 className="flex items-start gap-2 font-bold">
          <i className="ri-graduation-cap-line text-lg"></i>
          <span className="md:text-lg text-sm">Qualification & Specialization</span>
        </h4>
        <p className="text-gray-700 mt-1">
          {profile.qualification || "Not set"} -{" "}
          {profile.specialization || "Not set"}
        </p>
      </div>

      {/* Email */}
      <div className="mt-3 w-full text-left">
        <h4 className="flex items-start gap-2 font-bold text-lg">
          <i className="ri-mail-line text-lg"></i>
          <span className="md:text-lg text-sm">Email</span>
        </h4>
        <p className="text-gray-700">{profile.email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
