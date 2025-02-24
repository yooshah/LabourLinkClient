// // src/pages/LabourHomePage.tsx
// import React from "react";
// import JobPostCard from "./jobPostCard";
// import { useFetchClientJobPosts } from "../../../Hooks/User/JobPostHooks";

// const LabourHomePage: React.FC = () => {
//   const page = 1;
//   const limit = 10;
//   const { data: jobPosts, isLoading, error } = useFetchClientJobPosts(page, limit);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {(error as Error).message}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid items-center justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
//         {jobPosts?.map((post) => (
//           <JobPostCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LabourHomePage;
