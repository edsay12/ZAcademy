"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderConfig,
} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60, // 1 hour cache time
      staleTime: 1000 * 60 * 5, // 5 minutes until data is considered stale
      refetchOnWindowFocus: false, // Disable refetch on window focus
    },
  },
});

function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProviderConfig client={queryClient}>
      {children}
    </QueryClientProviderConfig>
  );
}

export default QueryClientProvider;
