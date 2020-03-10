import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function GuradRoute(props) {
  return <Route {...props} />;
}

function Router(props) {
  const { routes } = props;
  return (
    
    <Suspense fallback={<div>{/* <Loading width={80} height={80} /> */}</div>}>
      <Switch>
        {routes.map(route => (
          <GuradRoute
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={() => {
              document.title = `TheLoke | ${route.title}`;
              const Page = route.component();
              return <Page />;
            }}
            {...props}
            guard={route.guard}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default withRouter(Router);
