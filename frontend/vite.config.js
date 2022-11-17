import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	// set up proxy to backend
	server: {
		proxy: {
			'/api': {
				target: 'https://637665204fa4223f973a4c3f--escapade-mern.netlify.app/',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
