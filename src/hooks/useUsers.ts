import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the User interface
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt:Date;
  profileCompleted:boolean;
  isActive:boolean;
  userType:string;
}

// Function to fetch paginated users
const fetchUsers = async (page: number, limit: number): Promise<User[]> => {
  const { data } = await axios.get<User[]>(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  return data.map(user => ({ ...user, active: true }));
};


const fetchUsersbyId = async (UserId: number): Promise<User[]> => {
    const { data } = await axios.get<User[]>(
      `https://jsonplaceholder.typicode.com/users?UserId=${UserId}`
    );
    return data;
  };



// Custom Hook for paginated users
export const useUsers = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["users", page], // Refetch when page changes
    queryFn: () => fetchUsers(page, limit),
    placeholderData: (previousData) => previousData, 
  });
};


export const useUserId=(UserId:number)=>{
    return useQuery({
queryKey:["users",UserId],
queryFn:()=>fetchUsersbyId(UserId),
enabled:!!UserId
    })
}