"use client";
import { InputsField } from "@/constants/InputsField";
import { SignUpSchema, SignUpType } from "@/schemas/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Error from "./Error";
import Input from "./Input";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    mode: "onChange",
    resolver: zodResolver(SignUpSchema),
  });

  const onsubmit: SubmitHandler<SignUpType> = (data) => {
    console.log(data);
  };

  const inputsField = InputsField(register, errors);

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col rounded-[24px] border border-slate-200 bg-white/90 p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Sign up</h2>
        <p className="mt-2 text-sm text-slate-500">
          Fill in your details to get started.
        </p>
      </div>

      <ul className="flex flex-col gap-1">
        {inputsField.map((input) => (
          <li key={input.placeholder} className="flex flex-col gap-2 py-2">
            <Input
              type={input.type}
              placeholder={input.placeholder}
              register={input.register}
              error={Boolean(input.error)}
            />
            <Error error={input.error} />
          </li>
        ))}
      </ul>

      <button className="mt-4 cursor-pointer rounded-2xl bg-slate-900 px-4 py-3 text-lg font-semibold text-white transition hover:bg-slate-700">
        Create account
      </button>
    </form>
  );
}
