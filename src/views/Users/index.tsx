import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { setData, setLoading } from '../../usersSlice';
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { getUsers } from "./utils";
import { Header } from "../../components/Header";
import UserDetails from "../../components/UserDetails";
import Modal from "../AddUser";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const UsersView = () => {
    const data = useSelector((state: RootState) => state.users.data);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            dispatch(setLoading(true));
            try {
              const response = await getUsers();
              dispatch(setData(response))
                console.log(response);
                dispatch(setLoading(false));
            
            } catch (err) {
              console.log(err);
              dispatch(setLoading(false));
            }
          };
      
          fetchData();
    }, [])
    
  return (
    <>
    <Header title="Lista de Usuarios" />
    <main className="mt mx-auto max-w-6xl p-10 bg-white shadow">
    <ToastContainer />
    <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
           <div className="p-2">
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
                  {data.map(user => (
                      <UserDetails
                          key={user.id}
                          user={user}
                      />
                  ))}
                </tbody>
            </table>
        </div>
      </main>
</>
  )
}
export default UsersView;
