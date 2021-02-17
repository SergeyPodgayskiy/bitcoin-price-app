import { FunctionComponent } from 'react';
import { first } from 'lodash';

import Currencies from './currencies/Currencies';
import Analysis from './analysis/Analysis';

export interface Route {
  title: string;
  path: string;
  component: FunctionComponent;
}

const routes: Route[] = [
  {
    path: '/currencies',
    title: 'Currencies',
    component: Currencies
  },
  {
    path: '/analysis',
    title: 'Analysis',
    component: Analysis
  }
];

export const defaultRoute: Route = first(routes)!;
export default routes;
