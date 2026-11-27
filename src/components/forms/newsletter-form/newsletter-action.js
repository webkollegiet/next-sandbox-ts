"use server";
import serverFetch from "@/library/server-fetch";
import { newsletterFormSchema } from "@/library/schemas";
import z from "zod";

export default async function newsletterAction(prevState, formData) {
	const name = formData.get("name");
	const email = formData.get("email");

	const validated = newsletterFormSchema.safeParse({ name, email });
	if (!validated.success) {
		console.log("error: ", z.flattenError(validated.error).fieldErrors);
		return {
			name,
			email,
			error: z.flattenError(validated.error).fieldErrors
		};
	}

	try {
		const subscriber = await serverFetch({
			endpoint: "/subscribers",
			method: "POST",
			body: { ...validated.data }
		});
	} catch (error) {
		if (error.message === "API_RESPONSE_NOT_OK") {
			return {
				name: validated.data.name,
				email: validated.data.email,
				message: "Noget gik galt, prøv igen."
			}
		}
	}

	// sende data til api send tak besked... 
	return {
		name: "",
		email: "",
		message: "Tak for din tilmelding..."
	}
}