import { useSelector } from "react-redux";


import { AddUserProps, UserFormValues } from "./types";
import { addUser } from "./utils";
import { toast } from "react-toastify";
import FormUser from "../../components/FormUser";
import Modal from "../../components/Modal";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setActionMade, setLoading } from "../../store/usersSlice";

const AddUser = ({ isOpen, onClose }: AddUserProps) => {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.users.loading);

  if (!isOpen) return null;

  const onSubmit = async (data: UserFormValues) => {
    try {
      dispatch(setLoading(true));
      const response = await addUser(data);
      console.log(response);
      
      toast.success("Usuario Creado con Éxito!");
      dispatch(setActionMade(true));

      onClose();
    } catch (error: any) {
      dispatch(setLoading(false));
      if (error.response.data) {
        toast.error(
          `${error.response.data[0].field} ${error.response.data[0].message}`
        );
      } else toast.error("Ha ocurrido un error intentelo nuevamente");

    }
  };
  return (
    <Modal isOpen={isOpen} title="Agregar Usuario">
      <FormUser isLoading={isLoading} onClose={onClose} onSubmit={onSubmit} />
    </Modal>
  );
};

export default AddUser;
