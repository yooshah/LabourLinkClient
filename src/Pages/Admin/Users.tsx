import { useState } from "react";
import { useUsers, useUserId } from "../../hooks/useUsers";

const Users = () => {
  const [page, setPage] = useState(1);
  const [userIdSearch, setUserIdSearch] = useState<number | string>(""); // For user ID search
  const [userTypeFilter, setUserTypeFilter] = useState<string>("all"); // User type filter (Client, Labour, Admin)
  const limit = 5; // Users per page
  const { data: users, isLoading, error } = useUsers(page, limit);

  // Filter users based on the search input (user ID only) and user type
  const filteredUsers = users?.filter((user) => {
    const matchesIdSearch = user.id.toString().includes(userIdSearch.toString());
    const matchesUserType = userTypeFilter === "all" || user.type === userTypeFilter;
    return matchesIdSearch && matchesUserType;
  });

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading users</p>;

  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      {/* Search Input for user ID */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by User ID"
          className="px-4 py-3 border border-blue-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userIdSearch}
          onChange={(e) => setUserIdSearch(e.target.value)}
        />

        {/* Filter by user type */}
        <select
          value={userTypeFilter}
          onChange={(e) => setUserTypeFilter(e.target.value)}
          className="px-4 py-3 border border-blue-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All User Types</option>
          <option value="client">Client</option>
          <option value="labour">Labour</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Display paginated users */}
      <div className="bg-white rounded-md shadow-md">
        <table className="min-w-full text-left w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="bg-gray-800 px-2 border w-20">UserId</th>
              <th className="bg-gray-800 px-2 border w-32">Username</th>
              <th className="bg-gray-800 px-2 border w-48">Email</th>
              <th className="bg-gray-800 px-2 border w-32">Phone</th>
              <th className="bg-gray-800 px-2 border w-20">Active</th>
              <th className="bg-gray-800 px-2 border w-32">CreatedAt</th>
              <th className="bg-gray-800 px-2 border w-36">ProfileCompleted</th>
              <th className="bg-gray-800 px-2 border w-32">User Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => (
              <tr key={user.id} className="border-b hover:bg-blue-50">
                <td className="py-1 px-2">{user.id}</td>
                <td className="py-1 px-2">{user.name}</td>
                <td className="py-1 px-2">{user.email}</td>
                <td className="py-1 px-2">{user.phone}</td>
                <td className="py-1 px-2">{user.active ? "Yes" : "No"}</td>
                <td className="py-1 px-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="py-1 px-2">{user.profileCompleted ? "Yes" : "No"}</td>
                <td className="py-1 px-2">{user.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
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
    </div>
  );
};

export default Users;