import { SignUpType } from "@/schemas/Auth";
import { FieldErrors, UseFormRegister } from "react-hook-form";

export const InputsField = (
  register: UseFormRegister<SignUpType>,
  errors: FieldErrors | undefined,
) => [
  {
    type: "text",
    placeholder: "Enter Your Name",
    register: register("name"),
    error: errors?.name,
  },

  {
    type: "email",
    placeholder: "Enter Your Email",
    register: register("email"),
    error: errors?.email,
  },

  {
    type: "password",
    placeholder: "Enter Your Password",
    register: register("password"),
    error: errors?.password,
  },

  {
    type: "password",
    placeholder: "Enter Confirm Password",
    register: register("confirm_password"),
    error: errors?.confirm_password,
  },
];
