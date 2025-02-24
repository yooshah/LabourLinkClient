import axios from "axios";

export const getAllJobPostbyClientId = async (id: string) => {
  const response = await axios.get(
    `https://localhost:7299/api/job/jobpostbyclient?cleintid=${id}`
  );

  console.log(response);
  return response.data;
};
