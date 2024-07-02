import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setData, setLoading } from "../../store/usersSlice";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { getUsers } from "./utils";
import UserDetails from "../../components/UserDetails";
import Modal from "../AddUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const UsersView = () => {
  const data = useSelector((state: RootState) => state.users.data);
  const loading = useSelector((state: RootState) => state.users.loading);
  const dispatch: AppDispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await getUsers();
        dispatch(setData(response));
        console.log(response);
        dispatch(setLoading(false));
      } catch (err) {
        console.log(err);
        dispatch(setLoading(false));
      }
    };
    if (!isModalOpen) {
      fetchData();
    }
  }, [isModalOpen, dispatch]);

  return (
    <>
      <ToastContainer />
      <Button
        action={handleOpenModal}
        classes="bg-indigo-600 hover:bg-indigo-800"
      >
        Nuevo Usuario
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="p-2">
        {loading ? (
          <Loading>Cargando Datos...</Loading>
        ) : (
          <table className="w-full mt-5 table-auto">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2">Id</th>
                <th className="p-2">Nombre</th>
                <th className="p-2">Email</th>
                <th className="p-2">Genero</th>
                <th className="p-2">Estatus</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user) => (
                <UserDetails key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default UsersView;
