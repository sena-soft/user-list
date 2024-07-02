import { ButtonProps } from "./types";

const Button = ({action, classes, children, type, disabled}: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`${classes} text-white rounded-md p-2 font-bold text-xs text-center`}
      type={type || 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
