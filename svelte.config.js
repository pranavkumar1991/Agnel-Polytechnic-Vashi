import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn'
		},
		csp: {
			directives: {
				'connect-src': ['vitals.vercel-insights.com']
			}
		}
	},
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	]
};

export default config;
