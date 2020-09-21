import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

const GuessLayout = ({ children }) => (
  <div className="default-layout container">
    {children}
  </div>
);

const GuessLayoutRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    document.body.className = `
      d-flex align-items-center bg-auth border-top border-top-2 border-primary
    `;
    document.getElementById('root').className = 'container'

    return () => {
      document.body.className = '';
      document.getElementById('root').className = '';
    }
  });

  return (
    <Route {...rest} render={matchProps => (
      <GuessLayout>
        <Component {...matchProps} />
      </GuessLayout>
    )} />
  )
};

export default GuessLayoutRoute;
