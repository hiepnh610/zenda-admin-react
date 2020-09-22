import React from 'react';
import { Route } from 'react-router-dom';

import MainSidebar from 'components/sidebar';

const AuthLayout = ({ children }) => (
  <div className="sidebar-layout">
    <MainSidebar />

    <div className="main-content">
      {children}
    </div>
  </div>
);

const AuthLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <AuthLayout>
        <Component {...matchProps} />
      </AuthLayout>
    )} />
  )
};

export default AuthLayoutRoute;
