import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['legacy-js-api']
			}
		}
	},
	plugins: [
		vue2(),
		legacy({
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url))
		}
	},
	server: {
		port: 3110,
		host: true,
		watch: {
			usePolling: true
		}
	}
})
