import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { setLoading } from "../../usersSlice";
import { getUserByID } from "./utils";
import { User } from "../Users/types";
import { useSelector } from "react-redux";
import UserElement from "../../components/UserElement";

const DetailsView = () => {
  const { userId } = useParams();
  const loading = useSelector((state: RootState) => state.users.loading);
  const [user, setUser] = useState<User>();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await getUserByID(userId!);
        console.log(response);
        setUser(response);
        dispatch(setLoading(false));
      } catch (err) {
        console.log(err);
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <main className="mt-2 mx-auto max-w-6xl p-10 bg-white shadow">
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">{`Usuario: ${userId}`}</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Regresar
        </Link>
      </div>
      {user && (
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <UserElement title="Nombre" value={user!.name} />
            <UserElement title="Email" value={user!.email} />
            <UserElement title="Género" value={user!.gender} />
            <UserElement title="Estatus" value={user!.status} />
          </dl>
        </div>
      )}
      </main>
    </>
  );
};
export default DetailsView;