import React, { FunctionComponent } from 'react';
import { Switch, Route as RouteComponent, Redirect } from 'react-router-dom';

import routes, { Route, defaultRoute } from './modules/routes';
import { Header, Main } from './layout';
import { NavigationLink } from './components';

const App: FunctionComponent = () => {
  return (
    <>
      <Header links={mapRoutesToNavigationLinks(routes)} />
      <Main>
        <Switch>
          <RouteComponent exact path="/">
            <Redirect to={defaultRoute.path} />
          </RouteComponent>
          {routes.map(({ path, component }) => {
            return <RouteComponent key={path} exact path={path} component={component} />;
          })}
          <RouteComponent path="*">
            <Redirect to={defaultRoute.path} />
          </RouteComponent>
        </Switch>
      </Main>
    </>
  );
};

export default App;

// Helpers
function mapRoutesToNavigationLinks(routes: Route[] = []): NavigationLink[] {
  return routes.map((route) => ({
    title: route.title,
    path: route.path
  }));
}
