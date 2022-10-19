import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import { trpc } from './utils/trpc';
import { backendURL } from './config/backendUrl';
import User from './components/User';

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createClient({
    links: [
      httpBatchLink({
        url: `${backendURL}/trpc`,
        // optional
        // headers() {
        //   return {
        //     authorization: getAuthCookie(),
        //   };
        // },
      }),
    ],
  }));
  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}
    >
      <QueryClientProvider client={queryClient}>
        <User />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
