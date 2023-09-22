import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().optional(), // TODO: fix undefined
});

export const ENV = envSchema.parse(process.env);
