import { ModalProps } from "./types";

const Modal = ({ isOpen, title, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <h2 className="text-2xl mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
