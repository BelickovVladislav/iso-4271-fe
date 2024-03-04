import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { ExternalCurrencyAPI } from '@api/currency';
import { CurrencyTable } from '@widgets/currency-table';

export default async function Currencies() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['currencies'],
    queryFn: ExternalCurrencyAPI.getCurrencies,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CurrencyTable />
    </HydrationBoundary>
  );
}

export const dynamic = 'force-dynamic';
