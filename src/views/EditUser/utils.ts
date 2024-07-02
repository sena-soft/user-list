import axios from "../../axiosConfig";
import { UserFormValues } from "../AddUser/types";
import { User } from "../Users/types";

export const getUserByID = async (userId: User['id']): Promise<User> => {
   const response = await axios.get<User>(`/public/v2/users/${userId}`);
   return response.data;
}
export const EditUser = async (newUser: UserFormValues, idUser: User['id']): Promise<User> => {
   const response = await axios.put<User>(`/public/v2/users/${idUser}`, newUser);
   return response.data;
 };
export enum GENDER {
   male = 'male',
   female = 'female'
}
export enum STATUS {
   active = 'active',
   inactive = 'inactive'
}
