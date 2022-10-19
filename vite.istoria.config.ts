import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const r = (path) => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'istoria-public',
  resolve: {
    alias: {
      client: r('client'),
      backend: r('backend'),
    },
  },
  build: {
    outDir: 'istoria-dist',
    rollupOptions: {
      input: {
        istoria: r('istoria/index.html'),
        sandbox: r('istoria/sandbox/index.html'),
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            'babel-plugin-styled-components',
            {
              displayName: process.env.NODE_ENV !== 'production',
            }],
        ],
      },
    }),
  ],
  server: {
    port: 5000,
  },
  envPrefix: ['VITE_APP_'],
  define: {
    'process.env.SERVERFUL': true,
  },
});
