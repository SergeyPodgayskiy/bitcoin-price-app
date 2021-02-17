import { createModel, ModelConfig } from '@rematch/core';

import { fetchBitcoinPriceData } from '../api';
import BitcoinData from '../models/bitcoin-data.model';

interface BitcoinDataState {
  isLoading: boolean;
  error: string | null;
  data: Partial<BitcoinData>;
}

const initialState: BitcoinDataState = {
  isLoading: false,
  error: null,
  data: {}
};

const bitcoinData = createModel<BitcoinDataState, ModelConfig<BitcoinDataState>>({
  name: 'bitcoinData',
  state: initialState,
  reducers: {
    setLoading(state: BitcoinDataState, payload: boolean) {
      return {
        ...state,
        isLoading: payload
      };
    },
    setError(state: BitcoinDataState, payload: string) {
      return {
        ...state,
        error: payload
      };
    },
    setData(state: BitcoinDataState, payload: Partial<BitcoinData>) {
      return {
        ...state,
        data: payload
      };
    }
  },
  effects: {
    async fetchBitcoinPriceData() {
      try {
        this.setLoading(true);
        const bitcoinPriceData = await fetchBitcoinPriceData();
        this.setData(bitcoinPriceData);
      } catch (error) {
        const errorMessage = 'Unable to load data from https://www.coindesk.com';
        console.error(errorMessage, error);
        this.setError(errorMessage);
      } finally {
        this.setLoading(false);
      }
    }
  }
});

export default bitcoinData;
