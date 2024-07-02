import Button from "../Button";
import { ConfirmDeleteProps } from "./types";

const ConfirmDelete = ({ onCancel, onConfirm }: ConfirmDeleteProps) => {
  return (
    <div className="mt-5  bg-slate-200">
      <div className="flex gap-2 justify-end">
        <Button action={onCancel} classes="bg-gray-500">
          Cancelar
        </Button>
        <Button action={onConfirm} classes="bg-red-600">
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
