import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import fetch from 'cross-fetch';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.query(async (req) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
      message: 'this is sooo coolll',
      users,
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
