export default interface BitcoinDataDto {
  time: { updated: string };
  bpi: {
    [key: string]: {
      rate_float: number;
      rate: string;
      code: string;
      symbol: string;
      description: string;
    };
  };
}
