import React from 'react';

import { Currency } from '@models/interfaces';
import type { ColumnType } from '@shared/table';

import { ToggleActive } from './toggle-active.type';

export const getColumns = (
  toggleActive: ToggleActive,
): ColumnType<Currency>[] => [
  {
    title: 'Code',
    key: 'code',
    render(item: Currency): React.ReactNode {
      return item.code;
    },
  },
  {
    title: 'Name',
    key: 'name',
    render(item: Currency): React.ReactNode {
      return item.name;
    },
  },
  {
    title: 'Countries',
    key: 'countries',
    render(item: Currency): React.ReactNode {
      return (
        <>
          {item.countries.map((country: Currency['countries'][number]) => {
            const id = `${item.id}_${country.id}`;

            return (
              <div key={id} className="flex flex-row py-2">
                <div className="flex-col mr-2">
                  <input
                    id={id}
                    type="checkbox"
                    checked={country.isActive}
                    value={+country.isActive}
                    onChange={() => toggleActive(country.id, !country.isActive)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={id} className="sr-only">
                    checkbox
                  </label>
                </div>
                <div className="flex-col">{country.name}</div>
              </div>
            );
          })}
        </>
      );
    },
  },
];
