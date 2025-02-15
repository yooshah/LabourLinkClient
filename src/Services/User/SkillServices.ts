import axios from "axios";

export const fetchSearchSkills = async (searchParams: string) => {
  if (!searchParams) return []; // Don't fetch if the input is empty

  const { data } = await axios.get(
    `https://localhost:7234/api/Skill/getSkillsBySearchParams?searchParams=${searchParams}`
  );

  return data.data; // Assuming the API returns an array of skills
};
