import { useQuery } from "@tanstack/react-query";
import { fetchUsers,fetchUsersbyId } from "../Services/Admin/UserServices";


// interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   active: boolean;
//   createdAt:Date;
//   profileCompleted:boolean;
//   isActive:boolean;
//   userType:string;
// }






export const useUsers = (page: number, limit: number = 5) => {
  return useQuery({
    queryKey: ["users", page], 
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