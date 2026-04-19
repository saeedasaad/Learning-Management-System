import React, { useEffect, useState } from "react";
import { getActivities } from "../../utils/apis";

export default function MyActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
      } catch (err) {
        console.error("Error fetching activities:", err);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Activities</h2>
      {activities.length === 0 ? (
        <p>No activities yet.</p>
      ) : (
        <ul className="list-disc pl-6">
          {activities.map((act, i) => (
            <li key={i}>{act.title} — {act.status}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
