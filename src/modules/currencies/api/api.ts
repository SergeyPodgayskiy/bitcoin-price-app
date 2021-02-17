import BitcoinData from '../models/bitcoin-data.model';
import { mapBitcoinDataDtoToModel } from './helper';

async function fetchBitcoinPriceData(): Promise<BitcoinData> {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const responseJson = await response.json();
  return mapBitcoinDataDtoToModel(responseJson);
}

export { fetchBitcoinPriceData };
