import React from 'react';

import { Country } from '@models/interfaces';
import type { ColumnType } from '@shared/table';

import { ToggleActive } from './toggle-active.type';

export const getColumns = (
  toggleActive: ToggleActive,
): ColumnType<Country>[] => [
  {
    title: 'Active',
    key: 'active',
    render(item: Country): React.ReactNode {
      return (
        <>
          <input
            id={item.id}
            type="checkbox"
            checked={item.isActive}
            value={+item.isActive}
            onChange={() => toggleActive(item.id, !item.isActive)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={item.id} className="sr-only">
            checkbox
          </label>
        </>
      );
    },
  },
  {
    title: 'Name',
    key: 'name',
    render(item: Country): React.ReactNode {
      return item.name;
    },
  },
  {
    title: 'Currencies',
    key: 'currencies',
    render(item: Country): React.ReactNode {
      return (
        <>
          {item.currencies.map((currency: Country['currencies'][number]) => (
            <div key={currency.id}>
              [{currency.code}] {currency.name}
            </div>
          ))}
        </>
      );
    },
  },
];
