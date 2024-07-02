import { GENDER, STATUS } from "../EditUser/utils";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


export interface UserFormValues {
    name: string;
    email: string;
    gender: GENDER;
    status: STATUS;
  }
  