import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Register from "../../pages/Register/Register";
import Start from "../../pages/Start/Start";
import UserPage from "../../pages/UserPage/UserPage";
import { RouteInterface } from "./ProtectedRoute";

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

export default ROUTES