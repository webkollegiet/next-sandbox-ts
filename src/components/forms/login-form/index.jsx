"use client";

import { useActionState } from "react";
import loginAction from "./login-action";

const initialState = {
	username: "",
};

export default function LoginForm() {
	const [formState, formAction, pending] = useActionState(loginAction, initialState);

	return (
		<form action={formAction} className="col-start-5 col-span-4">
			<div>
				<label className="flex flex-col">
					<span>Brugernavn</span>
					<input type="text" name="username" className="border rounded-md" />
					{formState.error?.username && (
						formState.error?.username.map(msg => <span>{msg}</span>)
					)}
				</label>
			</div>
			<div>
				<label className="flex flex-col">
					<span>Adgangskode</span>
					<input type="password" name="password" className="border rounded-md" />
					{formState.error?.password && (
						formState.error?.password.map(msg => <span>{msg}</span>)
					)}
				</label>
			</div>
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Log ind</button>
		</form>
	);
}