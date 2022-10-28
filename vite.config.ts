import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as url from 'url';
import { resolve } from 'path';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const r = (path) => resolve(dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      client: r('client'),
      backend: r('backend'),
    },
  },
  plugins: [
    react(),
  ],
  define: {
    'process.env.SERVERFUL': process.env.SERVERFUL,
  },
});
