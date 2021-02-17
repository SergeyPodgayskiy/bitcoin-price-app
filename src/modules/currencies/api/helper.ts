import { values } from 'lodash';

import BitcoinDataDto from './bitcoin-data.dto';
import BitcoinData from '../models';

export function mapBitcoinDataDtoToModel(bitcoinDataDto: BitcoinDataDto): BitcoinData {
  const {
    time: { updated },
    bpi
  } = bitcoinDataDto;

  return {
    updatedAt: updated ? new Date(updated) : null,
    prices: values(bpi)?.map((bitcoinPrice) => {
      const { code, symbol, description, rate_float, rate } = bitcoinPrice;
      return {
        rate: rate_float,
        formattedRate: rate,
        currency: {
          code: code,
          symbol: symbol,
          description: description
        }
      };
    })
  };
}
