import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import cors from 'cors';

// Trpc
import * as trpcExpress from '@trpc/server/adapters/express';

// Validator
import { appRouter, createContext } from '../routes';

const SERVERFUL = process.env.SERVERFUL;
const API_URL = process.env.SERVERFUL ? '' : '/.netlify/functions/api';

dotenv.config();
const app = express();

// Middleware
if (SERVERFUL) {
  app.use(cors());
}
app.use(express.json()); // based on body parser
app.use(express.urlencoded({ extended: true }));

// Routes

app.get(API_URL, (req: Request, res: Response) => {
  res.json({ message: 'ok' });
});

app.use(
  `${API_URL}/trpc`,
  trpcExpress.createExpressMiddleware({
    // @ts-ignore
    router: appRouter,
    createContext,
  }),
);

// @ts-ignore
export const handler = serverless(app);

// On development run on serverful mode for faster DX
if (SERVERFUL) {
  console.log('Starting app in SERVERFUL mode');
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Success! Your application is running on  http://localhost:${PORT}/`);
  });
}
