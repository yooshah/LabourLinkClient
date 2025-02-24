import React, { useState } from "react";
import { MdWork, MdLocationOn, MdSearch } from "react-icons/md";
import {
  useFetchClientJobPosts,
  useFetchJobPostByTitle,
  useSearchJobTitles,
  useSearchLocations,
} from "../../../Hooks/User/JobPostHooks";
import { useNavigate } from "react-router-dom";

const JobPostCard = () => {
  const navigate = useNavigate();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleViewDetails = (jobId?: string) => {
    if (!jobId) {
      console.error("Invalid job ID");
      return;
    }
    navigate(`/job-details/${jobId}`);
  };

  // Fetch job posts
  const { data: jobPostsData } = selectedTitle
    ? useFetchJobPostByTitle(selectedTitle)
    : useFetchClientJobPosts();
  const jobPosts = Array.isArray(jobPostsData) ? jobPostsData.filter((post) => post?.jobId) : [];

  // Fetch filtered job titles and locations
  const { data: filteredTitles } = useSearchJobTitles(titleQuery);
  const { data: filteredLocations } = useSearchLocations(locationQuery);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-lg fixed left-0 top-0 h-full overflow-y-auto space-y-6">
        <h2 className="text-lg font-bold">Filter by</h2>

        {/* Job Title Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold">Job Title</h3>
          <div className="flex items-center border p-2 rounded-lg">
            <MdSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search Title"
              value={titleQuery}
              onChange={(e) => setTitleQuery(e.target.value)}
              className="ml-2 w-full outline-none"
            />
          </div>
          <div className="space-y-2">
            {filteredTitles?.map((title) => (
              <div key={title} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedTitle === title}
                  onChange={() => setSelectedTitle(title)}
                  className="mr-2"
                />
                <label>{title}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold">Location</h3>
          <div className="flex items-center border p-2 rounded-lg">
            <MdSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search Location"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              className="ml-2 w-full outline-none"
            />
          </div>
          <div className="space-y-2">
            {filteredLocations?.map((location) => (
              <div key={location} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedLocation === location}
                  onChange={() => setSelectedLocation(location)}
                  className="mr-2"
                />
                <label>{location}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="flex justify-center w-3/4 ml-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {jobPosts.map((post) => (
            <div
              key={post.jobId}
              className="w-[400px] h-[280px] bg-[#f5efff] border rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mt-1">
                  <MdWork className="text-[#4b2065] mr-2 text-xl" />
                  <h1 className="text-lg font-bold text-[#4b2065]">{post.title || "Job Title"}</h1>
                </div>
                <div className="mt-1 flex items-center">
                  <MdLocationOn className="text-[#4b2065] mr-1 text-lg" />
                  <h2 className="text-sm text-[#4b2065]">{post.muncipalityId || "Location"}</h2>
                </div>
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                  Description: {post.description || "Job Description"}
                </p>
              </div>

              <div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-green-600 font-semibold">{post.wage || "Salary Info"}</span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                    {post.status || "Work Time"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  🟢 Preferred Time on {post.preferredTime?.toString() || "Time"}
                </p>
                <div className="flex mt-2 space-x-2">
                  <button
                    onClick={() => handleViewDetails(post.jobId)}
                    className="px-3 py-2 border rounded text-[#4b2065] hover:bg-[#4b2065] hover:text-white transition-all"
                  >
                    View Details
                  </button>
                  <button className="px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all">
                    Interested
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
