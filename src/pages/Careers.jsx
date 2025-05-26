import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const jobs = [
  {
    title: "Human Resource Intern",
    location: "Onsite",
    type: "Full time",
  },
  {
    title: "Supply Chain",
    location: "Onsite",
    type: "Full time",
  },
];

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Our Team</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600 capitalize mt-1">{job.location}</p>
              <p className="text-gray-600 capitalize">{job.type}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
