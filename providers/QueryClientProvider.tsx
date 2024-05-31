"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderConfig,
} from "react-query";

const queryClient = new QueryClient();

function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProviderConfig client={queryClient}>
      {children}
    </QueryClientProviderConfig>
  );
}

export default QueryClientProvider;
