"use client";
import { useActionState } from "react";
import newsletterAction from "./newsletter-action";

export default function NewsletterForm() {
	const [formState, formAction, pending] = useActionState(newsletterAction, { name: "", email: "" });

	return (
		<form action={formAction} className="col-span-6 flex gap-4 items-center">
			<div>
				<label>
					<span>Navn</span>
					<input type="text" name="name" className="bg-white rounded-md border" />
					<span>{formState.error?.fieldErrors.name[0]}</span>
				</label>
			</div>
			<div>
				<label>
					<span>E-mail</span>
					<input type="email" name="email" className="bg-white rounded-md border" />
					<span>{formState.error?.fieldErrors.email[0]}</span>
				</label>
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white text-bold px-4 py-1 rounded-md">
				Tilmeld
			</button>
		</form>
	);
}