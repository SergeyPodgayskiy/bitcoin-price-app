import { Models } from '@rematch/core';
import bitcoinData from '../currencies/store/bitcoin-data.state-model';

export interface RootStateModel extends Models {
  bitcoinData: typeof bitcoinData;
}

export const models: RootStateModel = {
  bitcoinData: bitcoinData
};
