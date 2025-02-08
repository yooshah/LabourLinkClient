import { useState } from "react";
import { useJobPosts } from "../../hooks/useJobPosts";

const defaultImageUrl = "https://via.placeholder.com/400"; // Default image URL

const JobPosts = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [page, setPage] = useState(1);

  const { data: jobPosts, isLoading, error } = useJobPosts(page);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading job posts</p>;

  const openModal = (job: any) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Job Posts</h2>

      {/* Job Posts Table */}
      <div className="bg-white rounded-md shadow-md overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="bg-gray-800 px-4 border">Job ID</th>
              <th className="bg-gray-800 px-4 border">Title</th>
              <th className="bg-gray-800 px-4 border">Created At</th>
              <th className="bg-gray-800 px-4 border">Status</th>
              <th className="bg-gray-800 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobPosts?.map((job) => (
              <tr key={job.id} className="border-b hover:bg-blue-50 transition-all duration-300">
                <td className="py-3 px-4">{job.id}</td>
                <td className="py-3 px-4">{job.Title}</td>
                <td className="py-3 px-4">{new Date(job.CreateAt).toLocaleDateString()}</td>
                <td className="py-3 px-4">{job.Status}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => openModal(job)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-6 py-3 bg-blue-400 text-white rounded-md disabled:opacity-50 transition-colors hover:bg-blue-500"
        >
          Previous
        </button>
        <span className="text-lg font-semibold text-blue-700">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-6 py-3 bg-blue-500 text-white rounded-md transition-colors hover:bg-blue-600"
        >
          Next
        </button>
      </div>

      {/* Modal for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full transform transition-all duration-300 scale-95 hover:scale-100">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Job Details</h3>
            
            {/* Job Image */}
            <div className="mb-4">
              <img
                src={selectedJob.WorkImageUrl || defaultImageUrl}
                alt="Job Post"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            <p className="mb-2"><strong className="text-blue-600">Job ID:</strong> {selectedJob.body}</p>
            <p className="mb-2"><strong className="text-blue-600">Title:</strong> {selectedJob.Title}</p>
            <p className="mb-2"><strong className="text-blue-600">Description:</strong> {selectedJob.Description}</p>
            <p className="mb-2"><strong className="text-blue-600">Wage:</strong> ${selectedJob.Wage}</p>
            <p className="mb-2"><strong className="text-blue-600">Start Date:</strong> {new Date(selectedJob.StartDate).toLocaleDateString()}</p>
            <p className="mb-4"><strong className="text-blue-600">Preferred Time:</strong> {selectedJob.PreferredTime}</p>
            <p className="mb-4"><strong className="text-blue-600">Status:</strong> {selectedJob.Status}</p>

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPosts;
