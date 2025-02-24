import { useQuery, useMutation, useQueryClient  } from "@tanstack/react-query";
import axios from "axios";

export interface  JobPosts {
  id: number;
  ClientId: number;
  name: string;
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
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  return data;
};


export const deleteJobPost = async (id: number) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return id;
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


export const useDeleteJobPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJobPost,
    onSuccess: (deletedJobPostId) => {
      
      queryClient.setQueryData<JobPosts[]>(["JobPosts"], (oldJobPosts = []) =>
        oldJobPosts.filter((jobPosts) => jobPosts.id !== deletedJobPostId)
      );

      
      queryClient.invalidateQueries({ queryKey: ["JobPosts"] });
    },
    onError: (error) => {
      console.error("Error deleting job post:", error);
    },
  });
};


