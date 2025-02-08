import { useGetSkills, useAddSkill, useDeleteSkill } from "../../hooks/UseSkills";
import { useState } from "react";

const Skills = () => {
  const [skillName, setSkillName] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data: skills, isLoading, isError } = useGetSkills(page, limit);

  const addSkillMutation = useAddSkill();
  const deleteSkillMutation = useDeleteSkill(); // Mutation for delete

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName.trim()) return;

    addSkillMutation.mutate({ title: skillName });
    setSkillName(""); // Clear input field after submission
  };

  const handleDeleteSkill = (id: number) => {
    deleteSkillMutation.mutate(id); // Call delete mutation with skill id
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setPage(newPage);
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading skills...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching skills.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Skill List</h2>

      {/* Add Skill Form */}
      <form onSubmit={handleAddSkill} className="mb-5 flex gap-3">
        <input
          type="text"
          placeholder="Enter skill name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Skill
        </button>
      </form>

      {/* Skills Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-300">ID</th>
              <th className="p-3 border border-gray-300">Skill Name</th>
              <th className="p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill) => (
              <tr key={skill.id} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300 text-center">{skill.id}</td>
                <td className="p-3 border border-gray-300 text-center">{skill.title}</td>
                <td className="p-3 border border-gray-300 text-center">
                  <button
                    onClick={() => handleDeleteSkill(skill.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
          disabled={page <= 1}
        >
          Previous
        </button>
        <span className="flex items-center text-gray-700">
          Page {page}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;
