import { createClient } from '$lib/prismicio';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const client = createClient();

	const nav = await client.getSingle('nav');

	return {
		nav
	};
}
