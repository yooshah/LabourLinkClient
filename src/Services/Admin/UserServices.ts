import axios from "axios";


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


export const fetchUsers = async (page: number, limit: number): Promise<User[]> => {
  const { data } = await axios.get<User[]>(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  return data.map(user => ({ ...user, active: true }));
};


export const fetchUsersbyId = async (UserId: number): Promise<User[]> => {
    const { data } = await axios.get<User[]>(
      `https://jsonplaceholder.typicode.com/users?UserId=${UserId}`
    );
    return data;
  };