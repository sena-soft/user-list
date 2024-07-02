import { SubmitHandler } from "react-hook-form";

import { AddUserProps, UserFormValues } from "./types";
import { addUser } from "./utils";
import { toast } from "react-toastify";
import { useState } from "react";
import FormUser from "../../components/FormUser";

const AddUser = ({ isOpen, onClose }: AddUserProps) => {
  if (!isOpen) return null;
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit: SubmitHandler<UserFormValues> = async (data) => {
    try {
      setIsLoading(true)
      const response = await addUser(data);
      console.log(response);
      toast.success("Usuario Creado con Éxito!");
      onClose();
    } catch (error: any) {
      if (error.response.data) {
        toast.error(`${error.response.data[0].field} ${error.response.data[0].message}`);
      }else
      toast.error("Ha ocurrido un error intentelo nuevamente");

      setIsLoading(false);

    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4 text-center">Agregar Usuario</h2>
        <FormUser isLoading={isLoading} onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddUser;
