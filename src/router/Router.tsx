import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { homeRoutes } from './HomeRoutes';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                  {route.children}
                </Route>
              ))}
            </Switch>
          )}
        />
      </Route>
    </Switch>
  );
});