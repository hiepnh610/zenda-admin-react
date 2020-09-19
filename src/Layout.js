import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'assets/css/theme.min.css';
import 'assets/fonts/feather/feather.css';

import MainSidebar from 'components/sidebar';

import { MAIN_ROUTER } from 'constants/urls';

function Layout () {
  const routers = MAIN_ROUTER
    .map((router, index) => (
    <Route
      key={index}
      path={router.path}
      component={router.component}
      exact={router.exact}
    />
  ));

  return (
    <div className="Layout">
      <MainSidebar />

      <div className="main-content">
        <Switch>
          {routers}
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
