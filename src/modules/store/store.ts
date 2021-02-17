import { init, RematchDispatch, RematchRootState, RematchStore } from '@rematch/core';
import { models, RootStateModel } from './root.state-model';
import { createSelectorHook, useDispatch } from 'react-redux';

const store: RematchStore = init({
  models
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootStateModel>;
export type RootState = RematchRootState<RootStateModel>;

export const useRootStateSelector = createSelectorHook<RootState>();
export const useRootDispatch = (): RematchDispatch<RootStateModel> => useDispatch<Dispatch>();

export default store;
