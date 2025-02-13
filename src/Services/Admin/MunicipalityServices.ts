import axios from "axios";

interface Municipality {
  municipalityId: number;
  name: string;
  state?: string; 
  isActive:Boolean;
}

export const fetchMunicipalities = async (page: number, limit: number): Promise<Municipality[]> => {
  const { data } = await axios.get(`https://localhost:7234/api/Muncipality/muncipalities?_page=${page}&_limit=${limit}`);
  // console.log(data);
  
  return data.data; 
};



export const addMunicipality = async (newMunicipality: { name: string; state: string; }) => {
  const { data } = await axios.post<Municipality>(
    "https://jsonplaceholder.typicode.com/users",
    newMunicipality
  );
  return data;
};

export const deleteMuncipality = async (Id: number) => {
  await axios.delete(`https://localhost:7234/api/Muncipality/deletemuncipality/${Id}`);
  return Id;
};
