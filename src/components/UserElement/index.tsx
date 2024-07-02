import { UserElementProps } from "./types";

const UserElement = ( 
    {title, value} : UserElementProps
) => {
  return (
    <div className="px-4 py-6">
      <div className="text-md font-bold leading-6 text-slate-500">{title}:</div>
      <div className="font-semibold text-slate-700 rounded-md bg-slate-300 p-3 hover:bg-slate-600 hover:text-slate-200">
        {value}
      </div>
    </div>
  );
};

export default UserElement;
