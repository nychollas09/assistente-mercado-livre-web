import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { EnumMainRoute } from './domain/enums/enum-main-route';
import { AuthMeliComponent } from './pages/auth-meli/auth-meli';
import { HomeComponent } from './pages/home/Home';
import { AuthenticatedMeliComponent } from './pages/authenticated-meli/authenticated-meli';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { Location } from 'history';

const REFERENCE_CODE_QUERY_PARAM = 'code';

const isAuthenticated = (location: Location): boolean => {
  return location.search.includes(REFERENCE_CODE_QUERY_PARAM);
};

const HomeGuard: React.FC = ({ children }) => {
  return (
    <Route
      render={({ location }) => {
        if (isAuthenticated(location)) {
          return (
            <Redirect to={{ pathname: EnumMainRoute.AUTHENTICATED_MELI }} />
          );
        }
        return children;
      }}
    />
  );
};

const AuthenticationGuard: React.FC = ({ children }) => {
  return (
    <Route
      render={({ location }) => {
        if (isAuthenticated(location)) {
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
      <NavbarComponent />
      <Switch>
        <HomeGuard>
          <Route component={HomeComponent} path={EnumMainRoute.HOME} exact />
        </HomeGuard>
        <AuthenticationGuard>
          <Route
            component={AuthenticatedMeliComponent}
            path={EnumMainRoute.AUTHENTICATED_MELI}
            exact
          ></Route>
        </AuthenticationGuard>
        <Route
          path={EnumMainRoute.AUTH_MELI}
          component={AuthMeliComponent}
          exact
        />
      </Switch>
      <FooterComponent />
    </BrowserRouter>
  );
};
