import serverFetch from "@/library/server-fetch";

export async function getAdoptSectionById(id) {
	return await serverFetch({ endpoint: `/adoptsections/${id}` });
}
