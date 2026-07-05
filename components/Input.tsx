import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: boolean;
};

export default function Input({
  type,
  placeholder,
  register,
  error = false,
}: InputProps) {
  return (
    <input
      className={`block w-full rounded-2xl border px-4 py-3 text-sm text-slate-800 outline-none transition focus:ring-4 ${
        error
          ? "border-rose-400 bg-rose-50 focus:border-rose-500 focus:ring-rose-100"
          : "border-slate-200 bg-slate-50 focus:border-indigo-500 focus:bg-white focus:ring-indigo-100"
      }`}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  );
}
