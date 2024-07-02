import { SubmitHandler } from "react-hook-form";
import { UserFormValues } from "../../views/AddUser/types";
import { User } from "../../views/Users/types";

export interface FormUserProps {
    onSubmit: SubmitHandler<UserFormValues>;
    onClose?: () => void;
    isLoading: boolean;
    user?: User;
  }

