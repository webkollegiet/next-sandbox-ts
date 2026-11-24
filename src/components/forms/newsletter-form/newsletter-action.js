"use server";

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
		return {
			...validated,
			error: z.flattenError(validated.error)
		};
	}
}