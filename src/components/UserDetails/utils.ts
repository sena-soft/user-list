import axios from "../../axiosConfig";
import { User } from "../../views/Users/types";

export const deleteUser = async (idUser: User['id']): Promise<User> => {
  const response = await axios.delete<User>(`/public/v2/users/${idUser}`);
  return response.data;
};
