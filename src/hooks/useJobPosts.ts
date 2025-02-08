import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface JobPosts {
  id: number;
  ClientId: number;
  Title: string;
  Description: string;
  Wage: number;
  StartDate: Date;
  PreferredTime: string;
  MunicipalityId: number;
  Status: string;
  WorkImageUrl: string;
  CreateAt: Date;
}

const fetchJobPosts = async (page: number, limit: number): Promise<JobPosts[]> => {
  const { data } = await axios.get<JobPosts[]>(
    `https://jsonplaceholder.typicode.com/posts?page=${page}&_limit=${limit}`
  );
  return data;
};

export const useJobPosts = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["JobPosts", page],
    queryFn: () => fetchJobPosts(page, limit),
    placeholderData: (previousData) => {
      return previousData; 
    },
  });
};
