import React from "react";

export default function DashboardCard({ title, children }) {
  return (
    <div className="bg-white shadow-lg p-6 border-t-4 border-[#feaf0c] md:m-10 m-6">
      <h3 className="text-lg font-bold text-[#134f93] mb-4">{title}</h3>
      {children}
    </div>
  );
}