import { useMutation } from "@tanstack/react-query";
import { registerUser, ApiResponse, RegisterData } from "../../Services/User/RegisterService";

export const useRegisterUser = () => {
  return useMutation<ApiResponse, Error, RegisterData>({
    mutationFn: registerUser,
  });
};
