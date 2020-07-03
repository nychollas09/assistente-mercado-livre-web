import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { EnumMainRoute } from './domain/enums/enum-main-route';
import { AuthMeliComponent } from './pages/auth-meli/auth-meli';
import { HomeComponent } from './pages/home/Home';

const REFERENCE_CODE_QUERY_PARAM = 'code';

const AuthenticationGuard: React.FC = ({ children }) => {
  return (
    <Route
      render={({ location }) => {
        const isAuthenticated = location.search.includes(
          REFERENCE_CODE_QUERY_PARAM,
        );
        if (isAuthenticated) {
          return children;
        }
        return <Redirect to={{ pathname: EnumMainRoute.AUTH_MELI }} />;
      }}
    />
  );
};

export const AppNavigation = () => {
  return (
    <BrowserRouter>
      <AuthenticationGuard>
        <Route component={HomeComponent} path={EnumMainRoute.HOME} exact />
      </AuthenticationGuard>
      <Route
        path={EnumMainRoute.AUTH_MELI}
        component={AuthMeliComponent}
        exact
      />
    </BrowserRouter>
  );
};
