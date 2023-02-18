import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://kit.svelte.dev/docs/integrations#preprocessors
 // for more information about preprocessors
 preprocess: vitePreprocess(),

 kit: {
  adapter: adapter({
	// default options are shown. On some platforms
	// these options are set automatically — see below
	pages: 'build',
	assets: 'build',
	fallback: null,
	precompress: false,
	strict: true
  }),
  paths: {
	base: dev ? '' : '/my-portfolio',
  },
  // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
  // For example, instead of '_app', use 'app_', 'internal', etc.
  appDir: 'internal',
 }
};

export default config;