import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Development server port
  },
  base: '/website2025/', // Temporary: revert to GitHub Pages path until DNS propagation
});
