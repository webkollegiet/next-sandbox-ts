"use server";
import serverFetch from "@/library/server-fetch";

import z from "zod";

export default async function newsletterAction(prevState, formData) {
	const name = formData.get("name");
	const email = formData.get("email");

	const schema = z.object({
		name: z.string().min(4, "NAVNET ER FOR KORT, ALLAN!"),
		email: z.email("DET' IK' EN EMAIL, DIN NØD!!")
	});

	const validated = schema.safeParse({ name, email });
	if (!validated.success) {
		console.log("error: ", z.flattenError(validated.error).fieldErrors);
		return {
			name, 
			email,
			error: z.flattenError(validated.error).fieldErrors
		};
	}

	
	const subscriber = await serverFetch({
		endpoint: "/subscribers", 
		method: "POST",
		body:  { ...validated.data } 
	})

	console.log(subscriber)

	// sende data til api send tak besked... 
	return {
		name: "",
		email: "",
		message: "Tak for din tilmelding..."
	}

}