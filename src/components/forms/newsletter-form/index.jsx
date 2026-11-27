"use client";
import { useActionState } from "react";
import newsletterAction from "./newsletter-action";

export default function NewsletterForm() {
	const [formState, formAction, pending] = useActionState(newsletterAction, { name: "", email: "" });
	console.log(formState)
	return (
		<form action={formAction} className="col-span-6 flex gap-4 items-center">
			<div>
				<label>
					<span>Navn</span>
					<input type="text" name="name" className="bg-white rounded-md border" defaultValue={formState.name} />
					{formState.error?.name && <span>{formState.error?.name[0]}</span>}
				</label>
			</div>
			<div>
				<label>
					<span>E-mail</span>
					<input type="email" name="email" className="bg-white rounded-md border" defaultValue={formState.email} />
					{formState.error?.email && <span>{formState.error?.email[0]}</span>}
				</label>
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white text-bold px-4 py-1 rounded-md"
				disabled={pending}
			>
				{pending ? 'Tilmelder...' : 'Tilmeld'}
			</button>
			{formState.message && <span>{formState.message}</span>}
		</form>
	);
}