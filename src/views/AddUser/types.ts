import { GENDER, STATUS } from "../EditUser/utils";

export interface AddUserProps {
    isOpen: boolean;
    onClose: () => void;
}


export interface UserFormValues {
    name: string;
    email: string;
    gender: GENDER;
    status: STATUS;
  }
  