import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

process.env.INTEGRATION_TEST_MODE = "true";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
