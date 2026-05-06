import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/layouts/DashboardCard";
import api from "../../utils/api";
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
      <div className="md:m-10 m-5">
        <DashboardCard title="Manage Module Content">
          <p className="text-center text-gray-500">Loading modules...</p>
        </DashboardCard>
      </div>
    );
  }

  return (
    <div className="md:m-10 m-5">
      <DashboardCard title="Manage Module Content">
        {Array.isArray(modules) && modules.length > 0 ? (
          modules.map((module, index) => (
            <div key={index} className="md:mb-8 mb-4 border rounded md:p-4 p-2">
              <h2
                className="md:text-lg text-md font-bold cursor-pointer md:mb-4 mb-2"
                onClick={() =>
                  setActiveModule(activeModule === index ? null : index)
                }
              >
                {module.title}
              </h2>

              {activeModule === index && (
                <>
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

                  <LectureList lectures={module.lectures || []} />
                  <NotesList notes={module.pdfUrl || []} />
                  <QuizList quiz={module.quiz || []} />
                  <ExerciseList exercise={module.exercise || []} />
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No modules found for this course.
          </p>
        )}
      </DashboardCard>
    </div>
  );
}
