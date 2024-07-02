import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setActionMade, setLoading } from "../../store/usersSlice";
import { toast } from "react-toastify";
import Modal from "../../components/Modal";
import { DeleteUserProps } from "./types";
import { deleteUser } from "./utils";
import { useSelector } from "react-redux";
import ConfirmDelete from "../../components/ConfirmDelete";

const DeleteUser = ({ isOpen, onClose, idUser }: DeleteUserProps) => {
    const dispatch: AppDispatch = useDispatch();
    const userId = useSelector((state: RootState) => state.users.userId);

  if (!isOpen) return null;

  const onDeleteUser = async () => {
    if (!idUser) {
        return
    }
    try {
      dispatch(setLoading(true));
      await deleteUser(idUser);
      toast.success(`Usuario ${idUser} Eliminado con Éxito!`);
      dispatch(setActionMade(true));
      onClose();
    } catch (error) {
      console.log(error);
      toast.error(`Ha ocurrido un error!`);
      dispatch(setLoading(false));
    }
  }
  return (
    <Modal isOpen={isOpen} title={`Esta seguro de borrar el usuario ${userId}`}>
      <ConfirmDelete onCancel={onClose} onConfirm={onDeleteUser}/>
    </Modal>
  );
};

export default DeleteUser;
