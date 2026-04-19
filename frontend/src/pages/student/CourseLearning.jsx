import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardCard from "../../components/layouts/DashboardCard";
import { getCourseDetails } from "../../utils/apis";

export default function CourseLearning() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseDetails(id); 
        setCourse(data);
      } catch (err) {
        console.error("Error fetching course details:", err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <DashboardCard title={course.title}>
      <p className="text-gray-600">{course.description}</p>
      <ul className="mt-4 space-y-2 text-gray-600">
        {course.lectures?.map((lecture, index) => (
          <li key={index}>{lecture.title}</li>
        ))}
      </ul>
    </DashboardCard>
  );
}
