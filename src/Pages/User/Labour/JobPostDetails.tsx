import React from "react";
import { useParams } from "react-router-dom";
import { useFetchJobPostById } from "../../../Hooks/User/JobPostHooks";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const JobPostDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();

  if (!jobId) {
    return <div className="text-center text-xl text-red-600">Invalid Job ID</div>;
  }

  const { data: jobPost, isLoading, isError, error } = useFetchJobPostById(jobId);

  if (isLoading) {
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-xl text-red-600">Error: {error?.message}</div>;
  }

  if (!jobPost) {
    return <div className="text-center text-xl text-red-600">No job post found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-green-600" size={24} />
            <h1 className="text-2xl font-bold">{jobPost.title}</h1>
          </div>
          <div className="flex items-center gap-2 mt-2 text-gray-500">
            <FaMapMarkerAlt size={20} />
            <span>Location</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <span className="bg-green-200 text-green-700 px-3 py-1 rounded-md">Rs {jobPost.wage} / day</span>
          <span className="bg-green-200 text-green-700 px-3 py-1 rounded-md">Date</span>
          <span className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md">Day work</span>
        </div>

        <p className="text-lg font-semibold text-gray-700">Posted on </p>

        <div>
          <h2 className="text-lg font-bold">About Work</h2>
          <div className="bg-purple-100 p-4 rounded-md mt-2">
            <p className="text-gray-700">{jobPost.description}</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">About Client</h2>
          <p className="text-gray-700">Yooshah</p>
          <p className="text-gray-700">Kondotty</p>
          <p className="text-gray-700">Mob: +91 9876547865</p>
        </div>

        <div className="flex items-center justify-between">
          <img
            src={jobPost.image}
            alt="Job Image"
            className="w-64 h-40 object-cover rounded-md shadow-md"
          />
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-600">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostDetails;
