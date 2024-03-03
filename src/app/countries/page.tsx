import React from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { ExternalCountryAPI } from '@api/country';
import { CountryTable } from '@widgets/country-table';

export default async function Countries() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['countries'],
    queryFn: ExternalCountryAPI.getCountries,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CountryTable />
    </HydrationBoundary>
  );
}
