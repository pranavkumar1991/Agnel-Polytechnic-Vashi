import type { PageServerLoad } from './$types';
import fs from 'fs';

export const load = (() => {
	const directories = fs.readdirSync(`./static/gallery`);
	const items: Record<string, string[]> = {};
	directories.forEach((directory) => {
		items[directory] = fs.readdirSync(`./static/gallery/${directory}`);
	});

	return {
		items
	};
}) satisfies PageServerLoad;
