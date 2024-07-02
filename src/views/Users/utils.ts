import axios from "../../axiosConfig";
import { User } from "./types";

export const getUsers = async (): Promise<User[]> => {
   const response = await axios.get<User[]>('/public/v2/users/');
   return response.data;
}
