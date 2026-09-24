import z from "zod";
import { loginSchema } from "./LoginSchema";

export const registerSchema = loginSchema.extend({
    name: z.string().min(1, "Name is required")
})