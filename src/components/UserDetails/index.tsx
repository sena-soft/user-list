import {
  useNavigate
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { UserDetailsProps } from "./types";
import Button from "../Button";
import { AppDispatch } from "../../store";
import { setUser } from "../../store/usersSlice";


export default function UserDetails({ user, onDelete }: UserDetailsProps) {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const onStartDeleteUser = () => {
    dispatch(setUser(user.id));
    onDelete();
  }
  

  return (
    <tr className="border-b hover:bg-slate-300">
      <td className="p-3 text-xs text-gray-800">{user.id}</td>
      <td className="p-3 text-md text-gray-800">{user.name}</td>
      <td className="p-3 text-xs text-gray-800">{user.email}</td>
      <td className="p-3 text-md text-gray-800">{user.gender}</td>
      <td className={`p-3 text-md ${user.status === 'active' ? 'text-green-600': 'text-gray-800'}`}>{user.status}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
            <Button 
                action={() => navigate(`/details/${user.id}`)}
                classes="bg-indigo-600"
            >
                Ver
            </Button>
            <Button 
                action={() => navigate(`/edit/${user.id}`)}
                classes="bg-indigo-600"
            >
                Editar
            </Button>

          
            <Button 
                classes="bg-red-600"
                action={onStartDeleteUser}
            >
                Eliminar
            </Button>
        </div>
      </td>
    </tr>
  );
}
