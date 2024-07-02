import {
  useNavigate,
  Form,
  ActionFunctionArgs,
  redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { UserDetailsProps } from "./types";
import { deleteUser } from "./utils";
import Button from "../Button";
import { AppDispatch } from "../../store";
import { setActionMade } from "../../store/usersSlice";


export async function action({ params }: ActionFunctionArgs) {
  console.log(params);

  console.log("desde eliminar");


  if (params.userId !== undefined) {
    await deleteUser(+params.userId);
    return redirect('/');
  }
}

export default function UserDetails({ user }: UserDetailsProps) {
  const navigate = useNavigate();

  const deletingUser = () => {
    const dispatch: AppDispatch = useDispatch();
    dispatch(setActionMade(true));
  }

  return (
    <tr className="border-b hover:bg-slate-300">
      <td className="p-3 text-lg text-gray-800">{user.id}</td>
      <td className="p-3 text-lg text-gray-800">{user.name}</td>
      <td className="p-3 text-lg text-gray-800">{user.email}</td>
      <td className="p-3 text-lg text-gray-800">{user.gender}</td>
      <td className="p-3 text-lg text-gray-800">{user.status}</td>
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

          <Form
            className="w-full"
            method="DELETE"
            action={`/users/${user.id}/delete`}
            onSubmit={(e) => {
              if (!confirm("¿Eliminar?")) {
                e.preventDefault();
              }
            }}
          >
            <Button 
                classes="bg-red-600"
                type="submit"
            >
                Eliminar
            </Button>
          </Form>
        </div>
      </td>
    </tr>
  );
}
