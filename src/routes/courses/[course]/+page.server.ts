import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { data } from '../data';

export const load = (async ({ params }) => {
    const deptData = data[params.course];

    if (deptData === undefined) {
        throw error(404, 'Not found');
    }

    return {
        deptData
    }
}) satisfies PageServerLoad;