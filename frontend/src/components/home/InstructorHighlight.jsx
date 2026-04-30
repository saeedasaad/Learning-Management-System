import React, { useEffect, useState } from "react";
import api from "../../utils/api";

export default function InstructorHighlight() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const { data } = await api.get("/admin/instructors");
        setInstructors(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load instructors");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <p className="text-center">Loading instructors...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="md:py-20 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="md:text-4xl text-2xl font-semibold text-[#02448d] mb-3 md:mt-8 mt-1">
          Meet Our Instructors
        </h2>
        <p className="md:text-md text-sm text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn from industry experts who bring real-world experience and
          passion for teaching.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {instructors && instructors.length > 0 ? (
            instructors.map((inst) => (
              <div
                key={inst._id}
                className="bg-white shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center"
              >
                <div className="overflow-hidden transition">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${inst.avatar}`}
                    alt={inst.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {inst.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {inst.expertise}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No instructors available</p>
          )}
        </div>
      </div>
    </section>
  );
}
