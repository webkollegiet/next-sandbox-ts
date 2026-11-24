// data access layer til APIet
import serverFetch from "@/library/server-fetch";

export async function getAllAbouts() {
	return await serverFetch({ endpoint: "/abouts" });
}