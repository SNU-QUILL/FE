import { z } from "zod";

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username must be at most 20 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must be at most 30 characters"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const defaultLoginFormSchema: LoginFormSchema = {
  username: "",
  password: "",
};
