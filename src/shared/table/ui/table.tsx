import React from 'react';

import { ColumnType } from '../models/column-type.interface';

import styles from './table.module.css';

interface TableProps<TDataType> {
  columns: ColumnType<TDataType>[];
  data: TDataType[];
  keyFn(item: TDataType, index: number): string;
}

export default function Table<TDataType>(props: TableProps<TDataType>) {
  const { data, columns, keyFn } = props;

  return (
    <div
      className={
        styles['table-max-height'] +
        ' block overflow-auto shadow-md sm:rounded-lg'
      }
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column: ColumnType<TDataType>) => (
              <th key={column.key} scope="col" className="px-6 py-3">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles['table-height']}>
          {data.map((item: TDataType, index: number) => {
            const key = keyFn(item, index);

            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={key}
              >
                {columns.map((column: ColumnType<TDataType>) => (
                  <td key={`${key}_${column.key}`} className="px-6 py-4">
                    {column.render(item, index)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
