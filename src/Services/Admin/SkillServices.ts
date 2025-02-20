import axios from "axios";

export interface Skills {
  skillId: string;
  skillName: string;
}

export const fetchSkills = async (
  page: number,
  limit: number
): Promise<Skills[]> => {
  const { data } = await axios.get(
    `https://localhost:7234/api/Skill/getAllSkill?_page=${page}&_limit=${limit}`
  );
  console.log(data);

  return data.data ?? []; // Return an empty array if no data is returned
};

export const addSkill = async (newSkill: { name: string }) => {
  const { data } = await axios.post<Skills>(
    "https://localhost:7234/api/Skill/createSkill",
    newSkill
  );
  return data;
};

export const deleteSkill = async (skillId: string) => {
  await axios.delete(`https://localhost:7234/api/Skill/deleteSkill/${skillId}`);
  return skillId;
};
