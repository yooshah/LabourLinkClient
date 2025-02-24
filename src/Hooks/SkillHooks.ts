import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchSkills,
  addSkill,
  deleteSkill,
} from "../Services/Admin/SkillServices";
import {
  fetchAllSkill,
  fetchSearchSkills,
  postAJob,
} from "../Services/User/SkillServices";
import toast from "react-hot-toast";

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Skill"] }); // Auto-refetch updated list
      toast.success("Skill added successfully!");
    },
    onError: (error) => {
      console.error("Error adding skill:", error);
      toast.error("Failed to add skill");
    },
  });
};

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Skill"] }); // Auto-refetch updated list
      toast.success("Skill deleted successfully!");
    },
    onError: (error) => {
      console.error("Error deleting skill:", error);
      toast.error("Failed to delete skill");
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

export const useGetAllSkill = () => {
  return useQuery({
    queryKey: ["allSkill"],
    queryFn: () => fetchAllSkill(),
  });
};

export const usePostJob = () => {
  return useMutation({
    mutationFn: postAJob,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Job posted successfully!");
      // Additional success handling here
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to post job");
    },
  });
};

export const useMunicipalitySearch = (searchKey: string) => {
  return useQuery({
    queryKey: ["municipalities", searchKey], // Cache based on search term
    queryFn: () => fetchSearchMunicipalities(searchKey),
    enabled: !!searchKey, // Only fetch when there is input
    staleTime: 60000, // Cache results for 1 minute
  });
};

export const useGetAllMuncipalities = () => {
  return useQuery({
    queryKey: ["allMuncipality"],
    queryFn: () => fetchAllMuncipality(),
  });
};

export const useMunicipalitiesByState = (state: string, page: number, pageSize: number) => {
  return useQuery<{ data: Municipality[]; totalPages: number }>({
    queryKey: ["municipalities", state, page], // ✅ Unique cache key for pagination
    queryFn: () => fetchMunicipalitiesByState(state, page, pageSize),
    enabled: !!state, // ✅ Only fetch when a state is provided
  });
};