import React from 'react';

export interface ColumnType<TDataType> {
  title?: string;
  key: string;
  render(item: TDataType, index: number): React.ReactNode;
}
