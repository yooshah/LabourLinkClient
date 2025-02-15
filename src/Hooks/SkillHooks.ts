import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchSkills,
  addSkill,
  deleteSkill,
} from "../Services/Admin/SkillServices";
import { fetchSearchSkills } from "../Services/User/SkillServices";

export interface Skills {
  skillId: string;
  skillName: string;
}

export const useGetSkills = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["Skill", page],
    queryFn: () => fetchSkills(page, limit),
    placeholderData: (previousData) => previousData ?? [],
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
        oldSkills.filter((skill) => skill.skillId !== deletedSkillId)
      );
    },
    onError: (error) => {
      console.error("Error deleting skill:", error);
    },
  });
};

export const useSkillSearch = (searchParams: string) => {
  return useQuery({
    queryKey: ["skills", searchParams], // Cache based on search term
    queryFn: () => fetchSearchSkills(searchParams),
    enabled: !!searchParams, // Only fetch when there is input
    staleTime: 60000, // Cache the results for 1 minute
  });
};
