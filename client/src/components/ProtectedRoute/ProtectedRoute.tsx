import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers'

export interface RouteInterface {
  name: string
  path: string
  key: string
  exact: boolean
  component: React.FC<{routes?: Array<NestedRoute>}>
  isProtected?: boolean
  redirect?: boolean
  routes?: Array<NestedRoute>
}

export interface NestedRoute {
  path: string
  component: React.FC<{}>
}

const RouteWithSubRoutes = (route: RouteInterface) => {
  console.log(route)

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

const ProtectedRoute = (route: RouteInterface) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  if(isAuthenticated === true) {
    return <Route {...route} />
  } else {
    return <Route path={route.path} exact={route.exact} render={() => (<Redirect to="/" />)} />
  }
}

export const RenderRoutes = ({ routes }: any) => {
  return <Switch>
    { routes.map((route: RouteInterface) => {
      if(route.isProtected) {
        return <ProtectedRoute  {...route} />
      } else {
        if(route.routes) {
          return <RouteWithSubRoutes {...route} />
        } else {
          return <Route {...route} />
        }
      }})}
    <Route component={() => <h1>Not found</h1>} />
  </Switch>
}
