// Import necessary modules and services
import { useQuery } from "@tanstack/react-query";
import {
  fetchJobPostByTitle,
  fetchClientJobPosts,
  fetchJobPostById,
  fetchJobTitles,
  fetchLocations,
} from "../../Services/User/JobPostsServices";

// Hook for fetching all client job posts (No Pagination)
export const useFetchClientJobPosts = () => {
  return useQuery({
    queryKey: ["jobPosts"],
    queryFn: () => fetchClientJobPosts(),
  });
};

// Hook for fetching job post by ID
export const useFetchJobPostById = (id: string) => {
  return useQuery({
    queryKey: ["jobPost", id],
    queryFn: () => fetchJobPostById(id),
  });
};

// Hook for fetching job post by Title
export const useFetchJobPostByTitle = (title: string) => {
  return useQuery({
    queryKey: ["jobPost", title],
    queryFn: () => fetchJobPostByTitle(title),
    enabled: !!title, // Only fetch when title is not empty
  });
};

// Hook for searching job titles
export const useSearchJobTitles = (query: string) => {
  return useQuery({
    queryKey: ["jobTitles", query],
    queryFn: () => fetchJobTitles(query),
    enabled: !!query, // Only fetch when query is not empty
  });
};

// Hook for searching locations
export const useSearchLocations = (query: string) => {
  return useQuery({
    queryKey: ["locations", query],
    queryFn: () => fetchLocations(query),
    enabled: !!query, // Only fetch when query is not empty
  });
};
