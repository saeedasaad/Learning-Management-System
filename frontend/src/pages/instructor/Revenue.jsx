import React, { useState } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";

export default function Revenue() {
  const [revenueData] = useState([
    { month: "January", earnings: 1200 },
    { month: "February", earnings: 1500 },
    { month: "March", earnings: 1800 },
  ]);

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Revenue">
        <table className="w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Month</th>
              <th className="p-2">Earnings ($)</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((rev, idx) => (
              <tr key={idx} className="border-t text-center">
                <td className="p-2">{rev.month}</td>
                <td className="p-2">{rev.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardCard>
    </div>
  );
}
