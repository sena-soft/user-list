import axios from "../../config/axiosConfig";
import { User } from "../Users/types";

export const getUserByID = async (userId: string): Promise<User> => {
   const response = await axios.get<User>(`/public/v2/users/${userId}`);
   return response.data;
}
