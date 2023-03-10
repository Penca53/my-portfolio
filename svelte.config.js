import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://kit.svelte.dev/docs/integrations#preprocessors
 // for more information about preprocessors
 preprocess: vitePreprocess(),

 kit: {
  adapter: adapter(),
  paths: {
	base: dev ? '' : '/my-portfolio',
  }
 }
};

export default config;