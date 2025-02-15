import axios from "axios";

export const fetchSearchMunicipalities = async (searchKey: string) => {
  if (!searchKey) return []; // Avoid unnecessary API calls

  const { data } = await axios.get(
    `https://localhost:7234/api/muncipality/searchMunciplities?searchkey=${searchKey}`
  );

  return data.data;
};
