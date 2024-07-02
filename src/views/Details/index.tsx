import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserByID } from "./utils";
import { User } from "../Users/types";
import UserElement from "../../components/UserElement";
import Loading from "../../components/Loading";

const DetailsView = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserByID(userId!);
        setUser(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-black text-slate-500">{`Usuario: ${userId}`}</h2>
        <Link
          to="/"
          className="rounded-md text-sm font-semibold p-2 text-slate-500 shadow-sm hover:bg-slate-300"
        >
          Regresar
        </Link>
      </div>
      {!user ?<Loading>Cargando datos...</Loading> : (
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <UserElement title="Nombre" value={user!.name} />
            <UserElement title="Email" value={user!.email} />
            <UserElement title="Género" value={user!.gender} />
            <UserElement title="Estatus" value={user!.status} />
          </dl>
        </div>
      )}
      
      
    </>
  );
};
export default DetailsView;