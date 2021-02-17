import { TableColumn } from 'react-data-table-component';

// Refresh bitcoin price data every 10 seconds
const DATA_REFRESH_INTERVAL = 10 * 1000;

const columns: TableColumn<Record<string, unknown>>[] = [
  {
    name: 'Code',
    selector: 'code',
    sortable: true
  },
  {
    name: 'Rate',
    selector: 'rate',
    sortable: true
  }
];

export {
  DATA_REFRESH_INTERVAL,
  columns
};
