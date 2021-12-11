import React, { useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { load } from 'react-cookies';

import { UserContext } from 'contexts/UserContext';
import { history } from './history';

interface RouterObject {
  path: string;
  exact: boolean;
  component: React.FC;
}

interface Routes {
  allRoutes: RouterObject[];
  defaultRoute: RouterObject;
}

interface Props {
  routes: Routes;
}

export const RouterGenerator: React.FC<Props> = ({
  routes,
}): React.ReactElement => {
  const { setIsUserLogged } = React.useContext(UserContext);

  useEffect(() => {
    if (load('token')) setIsUserLogged(true);
    else setIsUserLogged(false);
  }, []);

  return (
    <Router history={history}>
      <Switch>
        {routes.allRoutes.map((route: RouterObject) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}

        <Route path="/" exact={true}>
          <Redirect
            to={routes.defaultRoute.path}
            exact={routes.defaultRoute.exact}
          />
        </Route>
      </Switch>
    </Router>
  );
};
