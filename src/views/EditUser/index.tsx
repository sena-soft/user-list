import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { User } from "../Users/types";
import { EditUser, getUserByID } from "./utils";
import FormUser from "../../components/FormUser";
import { SubmitHandler } from "react-hook-form";
import { UserFormValues } from "../AddUser/types";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

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
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-slate-500">{`Editar: ${userId}`}</h2>
        <Link
          to="/"
          className="rounded-md text-sm font-semibold p-2 text-slate-500 shadow-sm hover:bg-slate-300"
        >
          Regresar
        </Link>
      </div>
      {
        isLoading ? <Loading>Cargando Datos...</Loading> : (
          <FormUser isLoading={isLoading} onSubmit={onSubmit} user={user} />

        )
      }
    </>
  )
}
export default EditUserView;
