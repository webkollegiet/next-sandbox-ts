"use server";

import { loginFormSchema } from "@/library/schemas";
import serverFetch from "@/library/server-fetch";
import z from "zod";

export default async function loginAction(prevState, formData) {
	const { username, password } = Object.fromEntries(formData);

	const validated = loginFormSchema.safeParse({ username, password });
	if (!validated.success) {
		return {
			username,
			password,
			error: z.flattenError(validated.error).fieldErrors
		};
	}

	try {
		const response = await serverFetch({
			endpoint: "http://localhost:4000/auth/token",
			method: "POST",
			body: {
				username: validated.data.username,
				password: validated.data.password
			}
		});
	} catch (error) {

	}

}