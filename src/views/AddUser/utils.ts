import axios from "../../axiosConfig";
import { User } from "../Users/types";
import { UserFormValues } from "./types";

export const addUser = async (newUser: UserFormValues): Promise<User> => {
  const response = await axios.post<User>(`/public/v2/users`, newUser);
  return response.data;
};
