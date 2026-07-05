import z from "zod";

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, { message: "Please enter your name" })
      .max(20, { message: "Name must be 20 characters or less" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name can only contain letters and spaces",
      }),

    email: z
      .string()
      .trim()
      .min(1, { message: "Please enter your email" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(20, { message: "Password must be 20 characters or less" }),
    confirm_password: z
      .string()
      .trim()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(20, { message: "Password must be 20 characters or less" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type SignUpType = z.infer<typeof SignUpSchema>;
