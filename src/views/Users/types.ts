import { GENDER, STATUS } from "../EditUser/utils";

export interface User {
    id: number;
    name: string;
    email: string;
    gender: GENDER;
    status: STATUS;
}