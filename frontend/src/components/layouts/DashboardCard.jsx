import React from "react";

export default function DashboardCard({ title, children }) {
  return (
    <div className="bg-white shadow-lg p-4 sm:p-6 border-t-4 border-[#feaf0c] rounded-sm w-full">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#134f93] mb-3 sm:mb-4 break-words">
        {title}
      </h3>
      <div className="text-sm sm:text-base">{children}</div>
    </div>
  );
}
