import { QueryClient } from 'react-query';
import { queryCache } from './cache/queryCache';
import { mutationCache } from './cache/mutationCache';

export const queryClient = new QueryClient({
    queryCache,
    mutationCache,

    defaultOptions: {
        queries: {
          retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
      },
 })