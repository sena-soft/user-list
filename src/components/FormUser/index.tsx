import { useForm } from "react-hook-form";
import { UserFormValues } from "../../views/AddUser/types";
import ErrorMessage from "../ErrorMessage";
import { GENDER, STATUS } from "../../views/EditUser/utils";
import { FormUserProps } from "./types";
import { useEffect } from "react";
import Button from "../Button";

const FormUser = ({ onSubmit, isLoading, onClose, user }: FormUserProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      email: "",
      gender: undefined,
      status: undefined,
    },
    mode: "onChange",
  });
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        gender: user.gender,
        status: user.status,
      });
    }
  }, [user, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5  ">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Nombre
        </label>
        <input
          className="w-full px-3 py-2  border rounded"
          type="text"
          id="name"
          {...register("name", { required: "Nombre es requerido" })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 border rounded w-"
          type="email"
          id="email"
          {...register("email", {
            required: "Email es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="gender">
          Género
        </label>
        <select
          id="gender"
          {...register("gender", { required: "Género es requerido" })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value={GENDER.male}>Male</option>
          <option value={GENDER.female}>Female</option>
        </select>
        {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          {...register("status", { required: "Status es requerido" })}
          className="w-full px-3 py-2 border rounded"
        >
          <option value={STATUS.active}>Active</option>
          <option value={STATUS.inactive}>Inactive</option>
        </select>
        {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
      </div>
      <div className="flex gap-2 justify-end">
        {onClose && (
          <Button 
          action={onClose}
          classes="bg-gray-500"
          disabled={isLoading}
      >
          Cancelar
      </Button>
        )}
        <Button 
          type="submit"
          classes="bg-indigo-600"
          disabled={isLoading}
      >
          {user ? 'Editar' : 'Agregar'}
      </Button>
      </div>
    </form>
  );
};

export default FormUser;
