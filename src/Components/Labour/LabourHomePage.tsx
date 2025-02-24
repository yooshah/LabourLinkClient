// import React, { useState } from "react";
// import { MdWork, MdLocationOn, MdSearch } from "react-icons/md";
// import JobPostCard from "../../Pages/User/Labour/jobPostCard";
// import FilteredJobPostCard from "../../Pages/User/Labour/FilteredJobPostsByTitle";

// const Sidebar = ({ selectedFilters, setSelectedFilters }) => {
//   const jobTitles = ["Carpenter", "Mason", "Painter"];
//   const locations = ["Kakancheri", "Mangada", "Tirur"];

//   const handleFilterChange = (type, value) => {
//     setSelectedFilters((prev) => {
//       const newFilters = { ...prev };
//       if (newFilters[type].includes(value)) {
//         newFilters[type] = newFilters[type].filter((item) => item !== value);
//       } else {
//         newFilters[type].push(value);
//       }
//       return newFilters;
//     });
//   };

//   return (
//     <div className="w-64 bg-gray-100 p-4 shadow-lg h-screen fixed">
//       <h2 className="text-lg font-bold mb-4">Filter by</h2>

//       {/* Job Title Filter */}
//       <div className="mb-4">
//         <h3 className="font-semibold">Job title</h3>
//         <div className="flex items-center bg-white p-2 rounded-md shadow-sm">
//           <MdSearch className="text-gray-500 mr-2" />
//           <input type="text" placeholder="Search" className="outline-none w-full" />
//         </div>
//         {jobTitles.map((title) => (
//           <label key={title} className="flex items-center mt-2">
//             <input
//               type="checkbox"
//               checked={selectedFilters.jobTitles.includes(title)}
//               onChange={() => handleFilterChange("jobTitles", title)}
//               className="mr-2"
//             />
//             {title}
//           </label>
//         ))}
//       </div>

//       {/* Location Filter */}
//       <div>
//         <h3 className="font-semibold">Location</h3>
//         <div className="flex items-center bg-white p-2 rounded-md shadow-sm">
//           <MdSearch className="text-gray-500 mr-2" />
//           <input type="text" placeholder="Search" className="outline-none w-full" />
//         </div>
//         {locations.map((location) => (
//           <label key={location} className="flex items-center mt-2">
//             <input
//               type="checkbox"
//               checked={selectedFilters.locations.includes(location)}
//               onChange={() => handleFilterChange("locations", location)}
//               className="mr-2"
//             />
//             {location}
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   const [selectedFilters, setSelectedFilters] = useState({ jobTitles: [], locations: [] });

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />

//       {/* Main Content */}
//       <div className="ml-64 p-6 flex-1">
//         {selectedFilters.jobTitles.length === 0 && selectedFilters.locations.length === 0 ? (
//           <JobPostCard />
//         ) : (
//           <FilteredJobPostCard selectedFilters={selectedFilters} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
