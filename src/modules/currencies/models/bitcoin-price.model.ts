import Currency from './currency.model';

export default interface BitcoinPrice {
  formattedRate: string;
  rate: number;
  currency?: Currency;
}
