import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
	server: {
		port: 5173
	},
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/_mantine";`,
			},
		},
	},
	build: {
		outDir: 'build',
		rollupOptions: {
			external: [],
		}
	}
});