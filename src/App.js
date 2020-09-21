import React from 'react';
import { Switch } from 'react-router-dom';

import 'assets/css/theme.min.css';
import 'assets/fonts/feather/feather.css';
import 'assets/scss/styles.scss';

import AuthLayoutRoute from 'layouts/auth-layout';
import GuessLayoutRoute from 'layouts/guess-layout';

import { MAIN_ROUTER } from 'constants/urls';

function App () {
  const routers = MAIN_ROUTER
    .map((router, index) => (
      router.auth ?
      <AuthLayoutRoute
        key={index}
        path={router.path}
        component={router.component}
        exact={router.exact}
      /> :

      <GuessLayoutRoute
        key={index}
        path={router.path}
        component={router.component}
        exact={router.exact}
      />
  ));

  const routerSwitch = (
    <Switch>
      {routers}
    </Switch>
  );

  return (
    <div>{routerSwitch}</div>
  );
}

export default App;
