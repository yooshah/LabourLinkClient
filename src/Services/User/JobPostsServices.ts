import axios from "axios";

export interface JobPosts {
    jobId:string;
    title: string;
    description: string;
    wage: number;
    startDate: Date;
    preferredTime: string;
    muncipalityId: number;
    status: string;
    skillId1: string;
    skillId2: string;
    image: string;
  }
  

const BASE_URL = "https://localhost:7299/api/Job";

export const fetchClientJobPosts = async (): Promise<JobPosts[]> => {
    const { data } = await axios.get(`https://localhost:7299/api/Job/showallJobpostactive`);
    // console.log("All Job Posts:", data);
  
    return data.data;
  };
  

// Fetch job post by ID
export const fetchJobPostById = async (id: string): Promise<JobPosts> => {
    try {
      const { data } = await axios.get(`https://localhost:7299/api/Job/getjobpostbyid?id=${id}`);
      console.log(`Job Post with ID ${id}:`, data);
      return data.data;
    } catch (error) {
      console.error(`Error fetching job post with ID ${id}:`, error);
      throw new Error("Failed to fetch job post");
    }
  };
  

// Fetch job posts by title without pagination
export const fetchJobPostByTitle = async (
  title: string
): Promise<JobPosts[]> => {
  const { data } = await axios.get<JobPosts[]>(
    `${BASE_URL}/searchByTitle`,
    {
      params: {
        title,
      },
    }
  );
  console.log(`Job Posts with Title "${title}":`, data);
  return data;
};

// Fetch job titles for autocomplete or search suggestions
export const fetchJobTitles = async (query: string): Promise<string[]> => {
  const { data } = await axios.get<string[]>(
    `${BASE_URL}/search/job-titles`,
    {
      params: {
        query,
      },
    }
  );
  console.log(`Job Titles for Query "${query}":`, data);
  return data;
};

// Fetch locations for autocomplete or search suggestions
export const fetchLocations = async (query: string): Promise<string[]> => {
  const { data } = await axios.get<string[]>(
    `${BASE_URL}/search/locations`,
    {
      params: {
        query,
      },
    }
  );
  console.log(`Locations for Query "${query}":`, data);
  return data;
};
