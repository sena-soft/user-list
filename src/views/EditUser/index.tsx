import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "../Users/types";
import { EditUser, getUserByID } from "./utils";
import FormUser from "../../components/FormUser";
import { UserFormValues } from "../AddUser/types";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const EditUserView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getUserByID(+userId!);
        setUser(response);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const onSubmit = async (data: UserFormValues) => {
    try {
      setIsLoading(true);
      await EditUser(data, +userId!);
      navigate("/");
      toast.success(`Usuario ${userId} Editado con Éxito!`);
    } catch (error: any) {
      console.log(error);

      if (error.response.data) {
        toast.error(
          `${error.response.data[0].field} ${error.response.data[0].message}`
        );
      } else toast.error("Ha ocurrido un error intentelo nuevamente");

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
      {isLoading ? (
        <Loading>Cargando Datos...</Loading>
      ) : (
        <FormUser isLoading={isLoading} onSubmit={onSubmit} user={user} />
      )}
    </>
  );
};
export default EditUserView;
