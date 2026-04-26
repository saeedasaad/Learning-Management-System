import React from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

export default function TraineeServices() {
  // Example data (replace with API later)
  const progressData = [
    { week: "Week 1", topics: 10, completed: 8 },
    { week: "Week 2", topics: 12, completed: 10 },
    { week: "Week 3", topics: 8, completed: 6 },
    { week: "Week 4", topics: 15, completed: 12 },
  ];

  const quizData = [
    { name: "Attempted", value: 6 },
    { name: "Not Attempted", value: 4 },
  ];

  const exerciseData = [
    { name: "Submitted", value: 5 },
    { name: "Not Submitted", value: 3 },
  ];

  const COLORS = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-1">
      {/* Learning Activity Line Chart */}
      <DashboardCard title="Learning Activity (Videos Watch)">
        <LineChart width={400} height={250} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="topics" stroke="#f59e0b" />
          <Line type="monotone" dataKey="completed" stroke="#10b981" />
        </LineChart>
      </DashboardCard>

      {/* Quizzes Pie Chart */}
      <DashboardCard title="Quizzes">
        <PieChart width={300} height={250}>
          <Pie
            data={quizData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {quizData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </DashboardCard>

      {/* Exercises Pie Chart */}
      <DashboardCard title="Exercises">
        <PieChart width={300} height={250}>
          <Pie
            data={exerciseData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            dataKey="value"
          >
            {exerciseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index + 2]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </DashboardCard>

      {/* Course Participation Bar Chart */}
      <DashboardCard title="Course Participation">
        <BarChart width={400} height={250} data={[{ delivered: 80, participation: 65 }]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="delivered" hide />
          <YAxis />
          <Tooltip />
          <Bar dataKey="delivered" fill="#f59e0b" />
          <Bar dataKey="participation" fill="#ec4899" />
        </BarChart>
      </DashboardCard>
    </div>
  );
}
