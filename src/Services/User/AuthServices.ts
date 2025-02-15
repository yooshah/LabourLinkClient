import axios from "axios";

interface LoginCredentials {
  username: string;
  password: string;
}

export const loginUser = async (credential: LoginCredentials) => {
  const response = await axios.post(
    "https://localhost:7115/api/Auth/login",
    credential,
    {
      withCredentials: true,
    }
  );
  console.log(response);
};
