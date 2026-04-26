import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function ManageStudents() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", course: "React Basics", progress: "80%" },
    { id: 2, name: "Sara Ahmed", course: "Python Fundamentals", progress: "60%" },
    { id: 3, name: "Bilal Hussain", course: "UI/UX Design", progress: "90%" },
  ]);

  return (
    <DashboardCard title="Manage Students">
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Course</th>
            <th className="p-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t text-center">
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.course}</td>
              <td className="p-2">{student.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardCard>
  );
}
