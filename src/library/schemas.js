import z from "zod";

export const newsletterFormSchema = z.object({
	name: z.string().min(4, "NAVNET ER FOR KORT, ALLAN!"),
	email: z.email("DET' IK' EN EMAIL, DIN NØD!!")
});

export const loginFormSchema = z.object({
	username: z.string().min(4, "Dit brugernavn skal være mindst 4 tegn"),
	password: z.string().min(4, "Din adgangskode skal være mindst 4 tegn"),
});
