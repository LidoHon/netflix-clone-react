import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/netflix-clone-react/',
	plugins: [react()],
	build: {
		outDir: 'dist',
	},
});
