import BitcoinPrice from './bitcoin-price.model';

export default interface BitcoinData {
  updatedAt: Date | null;
  prices: BitcoinPrice[];
}
