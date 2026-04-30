import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/apis";
import LectureUploadForm from "../../components/instructor/LectureUploadForm";
import NotesUploadForm from "../../components/instructor/NotesUploadForm";
import QuizUploadForm from "../../components/instructor/QuizUploadForm";
import ExerciseUploadForm from "../../components/instructor/ExerciseUploadForm";
import LectureList from "../../components/instructor/LectureList";
import NotesList from "../../components/instructor/NotesList";
import QuizList from "../../components/instructor/QuizList";
import ExerciseList from "../../components/instructor/ExerciseList";

export default function ManageModuleContent() {
  const [modules, setModules] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get("/instructor/courses");
        if (data.length > 0) {
          setSelectedCourseId(data[0]._id);
          setModules(data[0].modules);
        }
      } catch (err) {
        console.error("Error fetching instructor courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <DashboardCard title="Manage Module Content">
        <p className="text-center text-gray-500">Loading modules...</p>
      </DashboardCard>
    );
  }

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Manage Module Content">
        {modules.map((module, index) => (
          <div key={index} className="mb-8 border rounded p-4">
            <h2
              className="text-lg font-bold cursor-pointer mb-4"
              onClick={() =>
                setActiveModule(activeModule === index ? null : index)
              }
            >
              {module.title}
            </h2>

            {activeModule === index && (
              <>
                {/* Upload Forms */}
                <LectureUploadForm
                  courseId={selectedCourseId}
                  moduleIndex={index}
                />
                <NotesUploadForm
                  courseId={selectedCourseId}
                  moduleIndex={index}
                />
                <QuizUploadForm
                  courseId={selectedCourseId}
                  moduleIndex={index}
                />
                <ExerciseUploadForm
                  courseId={selectedCourseId}
                  moduleIndex={index}
                />

                {/* Display Lists */}
                <LectureList lectures={module.lectures} />
                <NotesList notes={module.pdfUrl} />
                <QuizList quiz={module.quiz} />
                <ExerciseList exercises={module.exercises} />
              </>
            )}
          </div>
        ))}
      </DashboardCard>
    </div>
  );
}
