import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { User } from "../Users/types";
import { EditUser, getUserByID } from "./utils";
import FormUser from "../../components/FormUser";
import { SubmitHandler } from "react-hook-form";
import { UserFormValues } from "../AddUser/types";
import { toast } from "react-toastify";

const EditUserView = () => {
    const { userId } = useParams();
    // const loading = useSelector((state: RootState) => state.users.loading);
  const [user, setUser] = useState<User>();
  // const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getUserByID(+userId!);
        console.log(response);
        setUser(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit: SubmitHandler<UserFormValues> = async (data) => {
    try {
      setIsLoading(true)
      const response = await EditUser(data, +userId!);
      console.log(response);
      navigate('/')
      toast.success(`Usuario ${userId} Editado con Éxito!`);
    } catch (error: any) {
      console.log(error);
      
      if (error.response.data) {
        toast.error(`${error.response.data[0].field} ${error.response.data[0].message}`);
      }else
      toast.error("Ha ocurrido un error intentelo nuevamente");

      setIsLoading(false);

    }
  };
  return (
    <>
        <main className="mt-2 mx-auto max-w-6xl p-10 bg-white shadow">
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">{`Editar: ${userId}`}</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Regresar
        </Link>
      </div>
      <FormUser isLoading={isLoading} onSubmit={onSubmit} user={user} />
      </main>
    </>
  )
}
export default EditUserView;
