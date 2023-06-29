import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { data } from '../data';
import fs from 'fs';

export const load = (async ({ params }) => {
	const deptData = data[params.course];

	if (deptData === undefined) {
		throw error(404, 'Not found');
	}

	const directories = fs.readdirSync(`./static/courses/${params.course}`);
	const items: Record<string, string[]> = {};
	directories.forEach((directory) => {
		items[directory] = fs.readdirSync(`./static/courses/${params.course}/${directory}`);
	});

	return {
		deptData,
		items
	};
}) satisfies PageServerLoad;
