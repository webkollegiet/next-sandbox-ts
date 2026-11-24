const API_BASE_URL = "http://localhost:4000/api/v1";

export default async function serverFetch({ endpoint, method = "GET" }) {
	const response = await fetch(API_BASE_URL + endpoint, {
		method
	});

	const contentType = response.headers.get("content-type");
	if (!contentType.includes("application/json"))
		throw new Error("API_BODY_NOT_JSON");

	const json = await response.json();

	return json;
}