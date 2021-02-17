import { values } from 'lodash';
import React, { FunctionComponent, useEffect, useMemo } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import { useRootDispatch, useRootStateSelector } from '../../../store';
import { useInterval } from '../../hooks';
import { BitcoinPrice, Currency } from '../../models';
import { columns, DATA_REFRESH_INTERVAL } from './table.settings';
import { theme } from '../../../../styles/theme';

// Register new table theme
createTheme('lightGrey', {
  background: {
    default: `${theme.color.lightGrey}`
  }
});

// Declarations
type TableRow = Partial<{ id: string } & Currency & Omit<BitcoinPrice, 'currency'>>;

// Component
const BitcoinPriceTable: FunctionComponent = () => {
  const dispatch = useRootDispatch();
  const { data, isLoading, error } = useRootStateSelector((state) => state.bitcoinData);
  const prices = useMemo(() => matPricesDataToTableRows(data.prices), [data]);

  useEffect(() => {
    dispatch.bitcoinData.fetchBitcoinPriceData();
  }, [dispatch]);

  useInterval(() => {
    dispatch.bitcoinData.fetchBitcoinPriceData();
  }, DATA_REFRESH_INTERVAL);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <DataTable
        title="Bitcoin price from Coin Desk API"
        subHeader={true}
        subHeaderComponent={
          data.updatedAt && `Last updated at: ${data.updatedAt.toUTCString()}`
        }
        columns={columns}
        data={prices}
        progressPending={isLoading}
        theme={'lightGrey'}
      />
    </>
  );
};

export default BitcoinPriceTable;

// Helpers
function matPricesDataToTableRows(prices: BitcoinPrice[] = []): TableRow[] {
  return values(prices).map((price, index) => {
    const { rate, currency } = price;
    return {
      id: `${index}-${rate}-${currency?.code}`,
      code: currency?.code,
      rate: rate
    };
  });
}
