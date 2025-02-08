// import { useParams } from 'react-router-dom';
// import { useUserId } from '../../hooks/useUsers';

// const UserDetails = () => {
//   const { id } = useParams();  // Get user ID from the URL
//   const { data: user, isLoading, error } = useUserId(Number(id));

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching user details</p>;

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-blue-800">User Details</h2>
//       <div className="mt-4">
//         <p><strong>Username:</strong> {user?.[0].name}</p>
//         <p><strong>Email:</strong> {user?.[0].email}</p>
//         <p><strong>Phone:</strong> {user?.[0].phone}</p>
//         <p><strong>Active:</strong> {user?.[0].isActive ? "Yes" : "No"}</p>
//         <p><strong>Profile Completed:</strong> {user?.[0].profileCompleted ? "Yes" : "No"}</p>
//         <p><strong>Created At:</strong> {new Date(user?.[0].createdAt).toLocaleDateString()}</p>
//         <p><strong>User Type:</strong> {user?.[0].type}</p>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;
