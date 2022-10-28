export const backendURL = process.env.SERVERFUL
  ? import.meta.env.VITE_APP_SERVER_URL
  : '/.netlify/functions/api';
