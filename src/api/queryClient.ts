import { QueryClient } from 'react-query';
import { queryCache } from './cache/queryCache';
import { mutationCache } from './cache/mutationCache';

export const queryClient = new QueryClient({
    queryCache,
    mutationCache
 })