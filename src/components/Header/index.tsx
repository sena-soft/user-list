import { HeaderProps } from "./types";

export const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <header className="bg-slate-800">
        <div className="ml-10 mx-auto max-w-6xl py-10">
          <h1 className="text-4xl font-extrabold text-white">{title}</h1>
        </div>
      </header>
    </>
  );
};
