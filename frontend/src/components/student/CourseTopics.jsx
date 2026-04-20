import React, { useState } from "react";

export default function CourseTopics({ modules }) {
  const [openModule, setOpenModule] = useState(null);
  const [openLecture, setOpenLecture] = useState(null);

  console.log("Modules:", modules);

  if (!modules || modules.length === 0) {
    return <p className="text-gray-500">No modules available.</p>;
  }

  return (
    <div>
      {modules.map((module, moduleIndex) => (
        <div
          key={module.id || module.title || moduleIndex}
          className="mb-6 bg-white shadow rounded-lg p-4"
        >
          {/* Module toggle */}
          <button
            onClick={() => {
              setOpenModule(openModule === moduleIndex ? null : moduleIndex);
              setOpenLecture(null);
            }}
            className="w-full text-left font-bold text-gray-800 hover:text-yellow-600"
          >
            {module.title}
          </button>

          {/* Lectures inside module */}
          {openModule === moduleIndex && (
            <div className="mt-4 space-y-3">
              {module.lectures?.map((lec, lectureIndex) => (
                <div
                  key={lec.id || lec.title || lectureIndex}
                  className="border rounded"
                >
                  <button
                    onClick={() =>
                      setOpenLecture(
                        openLecture === lectureIndex ? null : lectureIndex,
                      )
                    }
                    className={`w-full text-left px-4 py-2 font-medium ${
                      openLecture === lectureIndex
                        ? "bg-yellow-100 text-blue-600"
                        : "bg-gray-50 hover:bg-yellow-50"
                    }`}
                  >
                    {lec.title} – {lec.duration} (
                    {new Date(lec.releaseDate).toLocaleDateString()})
                  </button>

                  {/* Video player */}
                  {openLecture === lectureIndex && (
                    <div className="p-4 bg-gray-50 border-t">
                      <h4 className="font-semibold mb-4 text-gray-800">
                        {lec.title}
                      </h4>
                      <video
                        controls
                        width="100%"
                        className="rounded-lg shadow mb-4"
                      >
                        <source src={lec.videoUrl} type="video/mp4" />
                      </video>

                      {/* Navigation buttons */}
                      <div className="flex justify-between">
                        <button
                          disabled={lectureIndex === 0}
                          onClick={() =>
                            setOpenLecture(
                              lectureIndex > 0 ? lectureIndex - 1 : 0,
                            )
                          }
                          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button
                          disabled={lectureIndex === module.lectures.length - 1}
                          onClick={() =>
                            setOpenLecture(
                              lectureIndex < module.lectures.length - 1
                                ? lectureIndex + 1
                                : lectureIndex,
                            )
                          }
                          className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
