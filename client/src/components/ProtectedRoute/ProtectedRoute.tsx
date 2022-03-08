import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from '../../pages/Home/Home'
import LogIn from '../../pages/LogIn/LogIn'
import Register from '../../pages/Register/Register'
import Start from '../../pages/Start/Start'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers'
import UserPage from '../../pages/UserPage/UserPage'

interface RouteInterface {
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

export const ROUTES = [{
  exact: true,
  path: '/',
  key: 'ROOT',
  component: Start,
  isProtected: false
},{
  exact: true,
  path: '/login',
  key: 'LOGIN',
  component: LogIn,
  isProtected: false
},{
  exact: true,
  path: '/register',
  key: 'REGISTER',
  component: Register,
  isProtected: false
},{
  path: '/redirect',
  key: 'REDIRECT',
  component: Home,
  isProtected: false,
  routes: [{
    exact: true,
    path: '/redirect/:id',
    component: <h1>here</h1>,
  }]
},{
  exact: true,
  path: '/protected',
  key: 'PROTECTED',
  component: () => <h1>protected</h1>,
  isProtected: true
},{
  exact: true,
  path: '/home',
  key: 'HOME',
  component: Home,
  isProtected: true
},{
  exact: true,
  path: '/user/:id',
  key: 'HOME',
  component: UserPage,
  isProtected: true
}] as Array<RouteInterface>

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

export default ROUTES