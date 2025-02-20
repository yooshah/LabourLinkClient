import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../Services/User/AuthServices";
import toast from "react-hot-toast";

export const useAccountLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      toast.success(data);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
