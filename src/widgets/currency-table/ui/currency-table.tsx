'use client';
import React, { useCallback, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { InternalCountryAPI } from '@api/country';
import { InternalCurrencyAPI } from '@api/currency';
import { Currency } from '@models/interfaces';
import { Table } from '@shared/table';

import { getColumns } from '../models/columns.constant';
import { ToggleActive } from '../models/toggle-active.type';

const keyFn = (item: Currency) => item.id;

export default function CurrencyTable() {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    initialData: [],
    queryFn: InternalCurrencyAPI.getCurrencies,
    queryKey: ['currencies'],
  });
  const mutation = useMutation({
    mutationFn: async (item: { id: string; isActive: boolean }) =>
      await InternalCountryAPI.updateCountry(item.id, item.isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['countries'] });
      queryClient.invalidateQueries({ queryKey: ['currencies'] });
    },
  });

  const toggleActive: ToggleActive = useCallback(
    async (id: string, isActive: boolean) => {
      await mutation.mutateAsync({ id, isActive });
    },
    [mutation],
  );

  const columns = useMemo(() => getColumns(toggleActive), [toggleActive]);

  return <Table columns={columns} data={data} keyFn={keyFn} />;
}
