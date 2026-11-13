import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const chatProxy = {
  '/api': {
    target: 'http://127.0.0.1:8787',
    changeOrigin: true,
  },
};

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: chatProxy,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    proxy: chatProxy,
  },
});
