

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";



export interface Skills {
  id: number;
  title: string;
}

export const fetchSkills = async (page: number, limit: number): Promise<Skills[]> => {
  const { data } = await axios.get<Skills[]>(
    `https://jsonplaceholder.typicode.com/todos?page=${page}&_limit=${limit}`
  );
  return data;
};

export const addSkill = async (newSkill: Omit<Skills, "id">) => {
  const { data } = await axios.post<Skills>(
    "https://jsonplaceholder.typicode.com/users",
    newSkill
  );
  return data;
};

export const deleteSkill = async (skillId: number) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${skillId}`);
  return skillId;
};






export const useGetSkills = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["Skill", page],
    queryFn: () => fetchSkills(page, limit),
    placeholderData: (previousData) => previousData,
  });
};

export const useAddSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addSkill,
    onSuccess: (newSkill) => {
      queryClient.setQueryData<Skills[]>(["Skill"], (oldSkills = []) => [
        ...oldSkills,
        newSkill,
      ]);
    },
    onError: (error) => {
      console.error("Error adding skill:", error);
    },
  });
};


export const useDeleteSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSkill,
    onSuccess: (deletedSkillId) => {
      queryClient.setQueryData<Skills[]>(["Skill"], (oldSkills = []) =>
        oldSkills.filter((skill) => skill.id !== deletedSkillId)
      );
    },
    onError: (error) => {
      console.error("Error deleting skill:", error);
    },
  });
};
