import { Briefcase, MapPin } from "lucide-react";
import { useVeiwAllJobPostbyEmployer } from "../../../Hooks/JobPostHooks";
// // import ConfirmModal from "../../../Components/User/Modals/ConfirmModal";
// import { useState } from "react";

const fakeJobs = [
  {
    jobId: 1,
    title: "FARMER",
    muncipalityName: "Kolkanad",
    prefferedTime: "Mon May 12 2025",
    wage: "₹15,000/day",
    dayTime: "8 AM - 5 PM",
    status: "Active",
  },
  {
    jobId: 2,
    title: "Porata Maker",
    muncipalityName: "Kolkanad",
    prefferedTime: "Mon May 10 2025",
    wage: "₹12,000/day",
    dayTime: "7 AM - 4 PM",
    status: "Inactive",
  },
];

const ViewPostJobs = () => {
  // const [showModal, setShowModal] = useState(false);
  const clientId = "286195A2-52AE-4584-A39F-948CB2567242";
  const { data: jobs } = useVeiwAllJobPostbyEmployer(clientId);

  console.log(jobs);

  // console.log(jobs);

  // const handleHide=(status:string)=>{

  //   const textContent=status=="Active"? "Hide the job post": "Unhide the job post";
  // }

  return (
    <>
      {/* {showModal && <ConfirmModal setShowModal={setShowModal} textContent="" />} */}
      <div className="min-h-screen bg-gray-50 p-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Account Overview</span>
          <span>/</span>
          <span>Post View</span>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-bold mb-8">POSTED JOBS</h1>

        {/* Job Cards Container - Added max-width and centered */}
        <div className="max-w-2xl mx-auto space-y-4">
          {fakeJobs.map((job) => (
            <div
              key={job.jobId}
              className="bg-indigo-100 rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="text-purple-700">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold">{job.title}</h2>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <MapPin size={14} />
                      <span>{job.muncipalityName}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    job.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {job.status === "Active" ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded p-2">
                  <span className="text-gray-600 text-sm">Salary</span>
                  <input
                    type="text"
                    value={`${job.wage}/day`}
                    className="w-full mt-1 border-none bg-transparent text-sm"
                    disabled
                  />
                </div>
                <div className="bg-white rounded p-2">
                  <span className="text-gray-600 text-sm">PrefferedTime</span>
                  <input
                    type="text"
                    value={job.prefferedTime}
                    className="w-full mt-1 border-none bg-transparent text-sm"
                    disabled
                  />
                </div>
              </div>

              <div className="text-xs text-gray-500 mb-3">
                Posted on {job.prefferedTime}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-white text-purple-700 py-1.5 rounded text-sm hover:bg-gray-50 transition-colors border">
                  Edit
                </button>
                <button
                  className={`flex-1 py-1.5 rounded text-sm hover:bg-gray-50 transition-colors ${
                    job.status === "Active"
                      ? "bg-[#BFDFCF] text-purple-700"
                      : "bg-[#FFF5F5] text-purple-700"
                  }`}
                >
                  {job.status === "Active" ? "Inactivate" : "Activate"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewPostJobs;
